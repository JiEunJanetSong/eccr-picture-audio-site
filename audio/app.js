const DEFAULT_ENGLISH_TTS = {
  engine: "kokoro",
  voice: "bm_fable",
  speed: 0.9,
};

const DEFAULT_TWI_TTS = {
  engine: "mms-aka",
  voice: "mms-aka",
  speed: 0.9,
};

const ENGLISH_VOICES = [
  { value: "bm_fable", label: "Fable (UK)" },
  { value: "bm_daniel", label: "Daniel (UK)" },
  { value: "bf_emma", label: "Emma (UK)" },
  { value: "af_heart", label: "Heart (US)" },
];

const TWI_VOICES = [{ value: "mms-aka", label: "MMS Akan/Twi" }];

const books = (Array.isArray(globalThis.YAW_PICTURE_BOOKS) ? globalThis.YAW_PICTURE_BOOKS : []).slice().sort(compareBooks);

const state = {
  bookId: books[0]?.id || "",
  pageIndex: 0,
  englishVoice: DEFAULT_ENGLISH_TTS.voice,
  twiVoice: DEFAULT_TWI_TTS.voice,
  audio: null,
  playbackToken: 0,
  sequenceToken: 0,
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function compareBooks(a, b) {
  return getBookNumber(a) - getBookNumber(b);
}

function getBookNumber(book) {
  const match = String(book?.id || book?.title || "").match(/(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function init() {
  Object.assign(els, {
    bookSelect: document.getElementById("bookSelect"),
    englishVoiceSelect: document.getElementById("englishVoiceSelect"),
    twiVoiceSelect: document.getElementById("twiVoiceSelect"),
    statusPill: document.getElementById("statusPill"),
    pageList: document.getElementById("pageList"),
    pageTitle: document.getElementById("pageTitle"),
    pageMeta: document.getElementById("pageMeta"),
    audioList: document.getElementById("audioList"),
    playPageBtn: document.getElementById("playPageBtn"),
    ttsAudio: document.getElementById("ttsAudio"),
  });

  state.audio = els.ttsAudio || new Audio();
  renderBookOptions();
  renderVoiceOptions();
  bindEvents();
  render();
}

function bindEvents() {
  els.bookSelect.addEventListener("change", () => {
    state.bookId = els.bookSelect.value;
    state.pageIndex = 0;
    stopAudio();
    render();
  });

  els.englishVoiceSelect.addEventListener("change", () => {
    state.englishVoice = els.englishVoiceSelect.value;
    stopAudio();
  });

  els.twiVoiceSelect.addEventListener("change", () => {
    state.twiVoice = els.twiVoiceSelect.value;
    stopAudio();
  });

  els.playPageBtn.addEventListener("click", playCurrentPage);
}

function renderBookOptions() {
  els.bookSelect.innerHTML = books
    .map((book) => `<option value="${escapeHtml(book.id)}">${escapeHtml(book.title)}</option>`)
    .join("");
  els.bookSelect.value = state.bookId;
}

function renderVoiceOptions() {
  els.englishVoiceSelect.innerHTML = ENGLISH_VOICES
    .map((voice) => `<option value="${escapeHtml(voice.value)}">${escapeHtml(voice.label)}</option>`)
    .join("");
  els.englishVoiceSelect.value = state.englishVoice;

  els.twiVoiceSelect.innerHTML = TWI_VOICES
    .map((voice) => `<option value="${escapeHtml(voice.value)}">${escapeHtml(voice.label)}</option>`)
    .join("");
  els.twiVoiceSelect.value = state.twiVoice;
}

function render() {
  const book = getBook();
  const page = getPage();
  if (!book || !page) {
    els.pageTitle.textContent = "No books loaded";
    els.pageMeta.textContent = "";
    els.audioList.innerHTML = "";
    return;
  }

  els.pageTitle.textContent = page.title || `Page ${state.pageIndex + 1}`;
  els.pageMeta.textContent = `${book.title} · ${state.pageIndex + 1} / ${book.pages.length}`;
  renderPages(book);
  renderAudioItems(page.audio || []);
}

function renderPages(book) {
  els.pageList.innerHTML = book.pages
    .map(
      (page, index) => `
        <button class="page-btn${index === state.pageIndex ? " active" : ""}" type="button" data-page-index="${index}">
          ${index + 1}. ${escapeHtml(page.title || `Page ${index + 1}`)}
        </button>
      `
    )
    .join("");

  els.pageList.querySelectorAll("[data-page-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pageIndex = Number(button.dataset.pageIndex);
      stopAudio();
      render();
    });
  });
}

function renderAudioItems(items) {
  els.audioList.innerHTML = items
    .map(
      (item, index) => `
        <article class="audio-item">
          <span class="lang">${escapeHtml(item.lang || "en")}</span>
          <div>
            <div class="text">${escapeHtml(cleanDisplayText(item.text || item.speechText || ""))}</div>
            <div class="speech">${escapeHtml(item.speechText || item.text || "")}</div>
          </div>
          <button class="play-btn" type="button" data-audio-index="${index}">Listen</button>
        </article>
      `
    )
    .join("");

  els.audioList.querySelectorAll("[data-audio-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items[Number(button.dataset.audioIndex)];
      playItem(item, button);
    });
  });
}

function cleanDisplayText(text) {
  return String(text).replace(/^\((.*)\)$/, "$1");
}

function playCurrentPage() {
  const items = (getPage()?.audio || []).filter((item) => item.speechText || item.text);
  const token = ++state.sequenceToken;
  playSequence(items, token);
}

async function playSequence(items, token) {
  for (const item of items) {
    if (token !== state.sequenceToken) {
      return;
    }
    await playItem(item);
  }
}

function playItem(item, button) {
  const token = ++state.playbackToken;
  const text = item.speechText || item.text;
  const url = buildTtsUrl(text, item);
  if (!url) {
    els.statusPill.textContent = "Audio coming soon";
    return Promise.resolve();
  }
  clearPlaying();
  stopAudio(false);
  button?.classList.add("playing");
  els.statusPill.textContent = item.lang === "twi" ? "Playing Twi" : "Playing English";

  return new Promise((resolve) => {
    state.audio.pause();
    state.audio.src = url;
    state.audio.currentTime = 0;
    state.audio.onended = () => {
      finishPlayback(token, button);
      resolve();
    };
    state.audio.onerror = () => {
      finishPlayback(token, button);
      els.statusPill.textContent = "Audio error";
      resolve();
    };
    state.audio.play().catch(() => {
      finishPlayback(token, button);
      els.statusPill.textContent = "Tap again";
      resolve();
    });
  });
}

function finishPlayback(token, button) {
  if (token !== state.playbackToken) {
    return;
  }
  button?.classList.remove("playing");
  els.statusPill.textContent = "Ready";
}

function stopAudio(invalidate = true) {
  if (invalidate) {
    state.playbackToken += 1;
    state.sequenceToken += 1;
  }
  clearPlaying();
  if (state.audio) {
    state.audio.pause();
    state.audio.removeAttribute("src");
    state.audio.load();
  }
  els.statusPill.textContent = "Ready";
}

function clearPlaying() {
  els.audioList?.querySelectorAll(".play-btn.playing").forEach((button) => button.classList.remove("playing"));
}

function getItemTtsConfig(item = {}) {
  if (item.lang === "twi") {
    return {
      ...DEFAULT_TWI_TTS,
      voice: state.twiVoice,
    };
  }

  return {
    ...DEFAULT_ENGLISH_TTS,
    voice: state.englishVoice,
  };
}

function buildTtsUrl(text, item = {}) {
  const config = getItemTtsConfig(item);
  const apiBase = String(globalThis.ECCR_TTS_API_BASE || "").replace(/\/$/, "");
  if (!apiBase) {
    return "";
  }
  const params = new URLSearchParams({
    text,
    engine: config.engine,
    voice: config.voice,
    speed: String(config.speed),
  });
  return `${apiBase}/api/tts/audio?${params.toString()}`;
}

function getBook() {
  return books.find((book) => book.id === state.bookId) || books[0];
}

function getPage() {
  return getBook()?.pages[state.pageIndex];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
