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

const TWI_VOICES = [
  { value: "mms-aka", label: "MMS Akan/Twi" },
];

const books = Array.isArray(globalThis.ECCR_A4_BOOKS)
  ? [...globalThis.ECCR_A4_BOOKS]
  : [];

books.sort(compareBooks);

const state = {
  bookId: books[0].id,
  pageIndex: 0,
  audio: null,
  playbackToken: 0,
  englishVoice: DEFAULT_ENGLISH_TTS.voice,
  twiVoice: DEFAULT_TWI_TTS.voice,
};

function compareBooks(a, b) {
  return getBookNumber(a) - getBookNumber(b);
}

function getBookNumber(book) {
  const match = String(book?.id || book?.title || "").match(/(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  Object.assign(els, {
    bookSelect: document.getElementById("bookSelect"),
    englishVoiceSelect: document.getElementById("englishVoiceSelect"),
    twiVoiceSelect: document.getElementById("twiVoiceSelect"),
    statusPill: document.getElementById("statusPill"),
    pageImage: document.getElementById("pageImage"),
    hotspotLayer: document.getElementById("hotspotLayer"),
    pageTitle: document.getElementById("pageTitle"),
    pageCounter: document.getElementById("pageCounter"),
    pageDots: document.getElementById("pageDots"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
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
  els.englishVoiceSelect?.addEventListener("change", () => {
    state.englishVoice = els.englishVoiceSelect.value;
    stopAudio();
  });
  els.twiVoiceSelect?.addEventListener("change", () => {
    state.twiVoice = els.twiVoiceSelect.value;
    stopAudio();
  });
  els.prevBtn.addEventListener("click", previousPage);
  els.nextBtn.addEventListener("click", nextPage);
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      previousPage();
    }
    if (event.key === "ArrowRight" || event.key === " ") {
      event.preventDefault();
      nextPage();
    }
  });
}

function renderBookOptions() {
  els.bookSelect.innerHTML = books
    .map((book) => `<option value="${escapeHtml(book.id)}">${escapeHtml(book.title)}</option>`)
    .join("");
  els.bookSelect.value = state.bookId;
}

function renderVoiceOptions() {
  if (els.englishVoiceSelect) {
    els.englishVoiceSelect.innerHTML = ENGLISH_VOICES
      .map((voice) => `<option value="${escapeHtml(voice.value)}">${escapeHtml(voice.label)}</option>`)
      .join("");
    els.englishVoiceSelect.value = state.englishVoice;
  }

  if (els.twiVoiceSelect) {
    els.twiVoiceSelect.innerHTML = TWI_VOICES
      .map((voice) => `<option value="${escapeHtml(voice.value)}">${escapeHtml(voice.label)}</option>`)
      .join("");
    els.twiVoiceSelect.value = state.twiVoice;
  }
}

function render() {
  const book = getBook();
  const page = getPage();
  els.pageImage.src = getPageImageSrc(book, page);
  els.pageImage.alt = `${book.title}, ${page.title}`;
  els.pageTitle.textContent = page.title;
  els.pageCounter.textContent = `${state.pageIndex + 1} / ${book.pages.length}`;
  els.prevBtn.disabled = state.pageIndex <= 0;
  els.nextBtn.disabled = state.pageIndex >= book.pages.length - 1;
  renderHotspots(getPageAudioItems(page));
  renderPageDots(book);
}

function getPageImageSrc(book, page) {
  return `${book.assetDir}/${page.image || `page-${state.pageIndex + 1}.png`}`;
}

function getPageAudioItems(page) {
  const items = page.titleBox ? [{ text: page.title, box: page.titleBox }] : [];
  return items.concat(page.audio || []);
}

function renderHotspots(items) {
  els.hotspotLayer.innerHTML = items
    .flatMap((item, index) =>
      getHotspotBoxes(item).map(
        (box) => `
        <button
          class="text-hotspot"
          type="button"
          data-audio-index="${index}"
          style="${getHotspotStyle(box)}"
          title="${escapeHtml(item.text)}"
          aria-label="Listen: ${escapeHtml(item.text)}"
        ></button>
      `
      )
    )
    .join("");

  els.hotspotLayer.querySelectorAll("[data-audio-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items[Number(button.dataset.audioIndex)];
      playText(getSpeechText(item), button);
    });
  });

}

function getSpeechText(item) {
  return item.speechText || item.text;
}

function getHotspotBoxes(item) {
  return item.boxes || [item.box || estimateHotspotBox(item)];
}

function getHotspotStyle(box) {
  return `left: ${box.x}%; top: ${box.y}%; width: ${box.w}%; height: ${box.h}%`;
}

function estimateHotspotBox(item) {
  const width = Math.min(72, Math.max(10, item.text.length * 1.15));
  const x = Math.max(4, (Number(item.x) || 50) - width);
  const y = Math.max(4, (Number(item.y) || 50) - 2.3);
  return {
    x,
    y,
    w: Math.min(width + 4, 96 - x),
    h: 5.4,
  };
}

function renderPageDots(book) {
  els.pageDots.innerHTML = book.pages
    .map(
      (_, index) => `
        <button class="page-dot${index === state.pageIndex ? " active" : ""}" type="button" data-page-index="${index}">
          ${index + 1}
        </button>
      `
    )
    .join("");
  els.pageDots.querySelectorAll("[data-page-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pageIndex = Number(button.dataset.pageIndex);
      stopAudio();
      render();
    });
  });
}

function previousPage() {
  if (state.pageIndex <= 0) {
    return;
  }
  state.pageIndex -= 1;
  stopAudio();
  render();
}

function nextPage() {
  const book = getBook();
  if (state.pageIndex >= book.pages.length - 1) {
    return;
  }
  state.pageIndex += 1;
  stopAudio();
  render();
}

function playText(text, button) {
  const token = ++state.playbackToken;
  const item = getPageAudioItems(getPage())[Number(button.dataset.audioIndex)];
  const url = buildTtsUrl(text, item);
  if (!url) {
    stopAudio();
    els.statusPill.textContent = "Audio coming soon";
    return;
  }
  clearPlaying();
  stopAudio(false);
  button.classList.add("playing");
  els.statusPill.textContent = "Playing";

  state.audio.pause();
  state.audio.src = url;
  state.audio.currentTime = 0;
  state.audio.onended = () => finishPlayback(token, button);
  state.audio.onerror = () => {
    finishPlayback(token, button);
    els.statusPill.textContent = "Audio error";
  };
  state.audio.play().catch((error) => {
    finishPlayback(token, button);
    els.statusPill.textContent = error?.name === "NotAllowedError" ? "Tap again" : "Audio error";
  });
}

function finishPlayback(token, button) {
  if (token !== state.playbackToken) {
    return;
  }
  button?.classList.remove("playing");
  els.statusPill.textContent = getIdleStatusText();
}

function stopAudio(invalidate = true) {
  if (invalidate) {
    state.playbackToken += 1;
  }
  clearPlaying();
  if (state.audio) {
    state.audio.pause();
    state.audio.removeAttribute("src");
    state.audio.load();
  }
  els.statusPill.textContent = getIdleStatusText();
}

function clearPlaying() {
  els.hotspotLayer?.querySelectorAll(".text-hotspot.playing").forEach((item) => item.classList.remove("playing"));
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

function getIdleStatusText() {
  return "English + Twi TTS";
}

function buildTtsUrl(text, item = {}) {
  if (item.recordingMissing) {
    return "";
  }
  if (item.audioSrc) {
    return item.audioSrc;
  }
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
  return getBook().pages[state.pageIndex];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
