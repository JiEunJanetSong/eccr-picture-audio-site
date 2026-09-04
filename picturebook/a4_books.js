(() => {
  const COVER_BOX = { x: 12, y: 11, w: 76, h: 24 };
  const BODY_BOX = { x: 8, y: 67, w: 84, h: 24 };
  const TWI_BOX = { x: 10, y: 71, w: 80, h: 11 };
  const ENGLISH_BOX = { x: 10, y: 82, w: 80, h: 10 };

  function image(pageNumber) {
    return `page-${String(pageNumber).padStart(2, "0")}.jpg`;
  }

  function hotspot(boxOrBoxes) {
    if (Array.isArray(boxOrBoxes)) {
      return { boxes: boxOrBoxes.map((box) => ({ ...box })) };
    }
    return { box: { ...boxOrBoxes } };
  }

  function recording(text, audioSrc, box = BODY_BOX, lang = "twi") {
    return { text, speechText: text, audioSrc, ...hotspot(box), lang };
  }

  function missing(text, box, lang = "twi") {
    return { text, speechText: text, ...hotspot(box), lang, recordingMissing: true };
  }

  function page(pageNumber, title, audio = []) {
    return { title, image: image(pageNumber), audio };
  }

  function recordedPage(bookNumber, pageNumber, title, text = title, box = BODY_BOX, lang = "twi") {
    return page(pageNumber, title, [
      recording(text, `audio/book${bookNumber}/page-${String(pageNumber).padStart(2, "0")}.mp3`, box, lang),
    ]);
  }

  function bilingualPage(bookNumber, pageNumber, twi, english) {
    const base = `audio/book${bookNumber}/page-${String(pageNumber).padStart(2, "0")}`;
    return page(pageNumber, twi, [
      recording(twi, `${base}-twi.mp3`, TWI_BOX, "twi"),
      recording(english, `${base}-en.mp3`, ENGLISH_BOX, "en"),
    ]);
  }

  window.ECCR_A4_BOOKS = [
    {
      id: "book1",
      title: "Book1",
      assetDir: "assets/book1",
      pages: [
        page(1, "Me ne me fie", [recording("Me ne me fie", "audio/book1/cover.mp3", COVER_BOX)]),
        page(2, "Me ne me fie", [recording("Me ne me fie", "audio/book1/cover.mp3", { x: 25, y: 16, w: 50, h: 10 })]),
        recordedPage(1, 3, "Me din de Kofi."),
        recordedPage(1, 4, "Mekɔ sukuu. Mehyɛ ataade fitaa."),
        recordedPage(1, 5, "Me papa din de Kwadwo. Me maame din de Abena."),
        recordedPage(1, 6, "Yɛwɔ kraman fɛfɛ bi. Kraman no di emo."),
        recordedPage(1, 7, "M’ani gye sukuu ho. Metwerɛ m’adeɛ yie."),
        recordedPage(1, 8, "M’AKYERƐKYERƐFOƆ", "M’akyerɛkyerɛfoɔ dɔ me."),
        page(9, "Blank"),
        page(10, "Blank"),
        page(11, "Blank"),
        page(12, "Credits"),
      ],
    },
    {
      id: "book2",
      title: "Book2",
      assetDir: "assets/book2",
      pages: [
        page(1, "Ama ne Kofi", [recording("Ama ne Kofi", "audio/book2/cover.mp3", COVER_BOX)]),
        page(2, "Ama ne Kofi", [recording("Ama ne Kofi", "audio/book2/cover.mp3", { x: 25, y: 16, w: 50, h: 10 })]),
        recordedPage(2, 3, "Anɔpa aba. Owia apue."),
        recordedPage(2, 4, "Ama ne Kofi asɔre."),
        recordedPage(2, 5, "Wɔka sɛ, “Maakye, Maame.” Maame ka sɛ, “Yaa, me mma.”"),
        recordedPage(2, 6, "Wɔpra fie hɔ. Fie hɔ ayɛ fɛ."),
        recordedPage(2, 7, "Wɔhohoro wɔn nsa."),
        recordedPage(2, 8, "Wɔdi banku ne nkruma frɔeɛ."),
        recordedPage(2, 9, "Kwan so, wɔkyea Nana. Wɔka sɛ, “Maakye, Nana.”"),
        recordedPage(2, 10, "Wɔfa wɔn nwoma. Wɔkɔ sukuu."),
        recordedPage(2, 11, "Sukuu mu, wɔsua nnyegyeɛ."),
        recordedPage(2, 12, "Ama twerɛ ne din. Ne din de Ama."),
        recordedPage(2, 13, "Ahomegyeɛ berɛ mu, wɔdi kwadu."),
        recordedPage(2, 14, "Wɔpɔn a, wɔboa wɔ dwa so."),
        recordedPage(2, 15, "Anwummerɛ, abusua no hyia. Nana to anansesɛm."),
        recordedPage(2, 16, "Ama ne Kofi sere. Wɔka sɛ, “Yɛda wo ase.”"),
        page(17, "Nsɛmmisa", [
          recording(
            "Hwan na ɔkɔɔ sukuu? Deɛn na Ama kenkan? Hwan na ɔtoo anansesɛm no?",
            "audio/book2/page-17.mp3",
            { x: 14, y: 18, w: 72, h: 38 }
          ),
          missing("Kenkan bio.", { x: 30, y: 78, w: 40, h: 9 }),
        ]),
        page(18, "Blank"),
        page(19, "Blank"),
        page(20, "Credits"),
      ],
    },
    {
      id: "book3",
      title: "Book3",
      assetDir: "assets/book3",
      pages: [
        page(1, "Asante Twi Reading Practice", [
          missing("Asante Twi Reading Practice", { x: 7, y: 13, w: 86, h: 9 }, "en"),
        ]),
        page(2, "Asante Twi Reading Practice", [
          missing("Asante Twi Reading Practice", { x: 10, y: 17, w: 80, h: 9 }, "en"),
        ]),
        recordedPage(3, 3, "Fa bi"),
        recordedPage(3, 4, "Ka bi"),
        recordedPage(3, 5, "Di bi"),
        recordedPage(3, 6, "Sa fa"),
        recordedPage(3, 7, "Tu kɔ"),
        recordedPage(3, 8, "Kɔ da"),
        recordedPage(3, 9, "Yi bi di"),
        recordedPage(3, 10, "Sa bi we"),
        recordedPage(3, 11, "Ka bi fa"),
        recordedPage(3, 12, "Ma me bi"),
        recordedPage(3, 13, "Te me so"),
        recordedPage(3, 14, "Ka bi we"),
        recordedPage(3, 15, "Fa bi si me so"),
        recordedPage(3, 16, "Sa bi gu me ho"),
        recordedPage(3, 17, "To bi gu me ho"),
        recordedPage(3, 18, "Yi bi ma me"),
        recordedPage(3, 19, "To bi ma yɛn"),
        recordedPage(3, 20, "Ka bi na fa"),
        recordedPage(3, 21, "Papa Musa"),
        recordedPage(3, 22, "Papa Musa wɔ nkokɔ mmienu, mpɔnkye mmienu ne mma baanu."),
        recordedPage(3, 23, "Ne ba barima ne Ali."),
        recordedPage(3, 24, "Ne ba baa ne Alima."),
        recordedPage(3, 25, "Anɔpa biara, Ali pra mmoa no buo no mu."),
        recordedPage(3, 26, "Ɔma mmoa no aduane di."),
        recordedPage(3, 27, "Anɔpa biara, Alima pra adihɔ."),
        recordedPage(3, 28, "Ɔma mmoa no nsuo nom."),
        recordedPage(3, 29, "Wɔyɛ ntɛm kɔ sukuu."),
        page(30, "Nsɛmmisa", [
          recording(
            "Hwan ne Ali? Nkokɔ sɛn na Papa Musa wɔ? Adwuma bɛn na Ali yɛ no anɔpa? Adwuma bɛn na Alima yɛ no anɔpa? Adɛn nti na wɔboa mmoa no? Wo nso, deɛn na woyɛ ansa na wakɔ sukuu?",
            "audio/book3/page-30.mp3",
            { x: 7, y: 8, w: 86, h: 70 }
          ),
          missing("Kenkan bio.", { x: 17, y: 79, w: 66, h: 11 }),
        ]),
        page(31, "Blank"),
        page(32, "Credits"),
      ],
    },
    {
      id: "book4",
      title: "Book4",
      assetDir: "assets/book4",
      pages: [
        page(1, "Aku ne Ɔkra", [
          recording("Aku ne Ɔkra", "audio/book4/cover.mp3", { x: 25, y: 11, w: 50, h: 10 }),
          missing("Aku and the Cat.", { x: 30, y: 20, w: 40, h: 6 }, "en"),
        ]),
        page(2, "Aku ne Ɔkra", [recording("Aku ne Ɔkra", "audio/book4/cover.mp3", { x: 25, y: 16, w: 50, h: 10 })]),
        bilingualPage(4, 3, "Aku yɛ ɔbaa.", "Aku is a girl."),
        bilingualPage(4, 4, "Aku te mpa so.", "Aku is sitting on a bed."),
        bilingualPage(4, 5, "Ɔwɔ ɔkra tuntum bi.", "She has a black cat."),
        bilingualPage(4, 6, "Aku pɛ ɔkra no asɛm.", "Aku likes the cat’s story / wants to talk to the cat."),
        bilingualPage(4, 7, "Ɔkra no nso pɛ Aku asɛm.", "The cat also likes Aku’s story / wants to listen to Aku."),
        bilingualPage(4, 8, "Ɔkra ho hia.", "The cat is important."),
        page(9, "Comprehension Questions", [
          recording(
            "Hwan ne Aku? Who is Aku? Aboa bɛn na Aku wɔ? Which animal does Aku have? Aku pɛ aboa bɛn asɛm? Which animal does Aku like? Aboa bɛn na wopɛ n’asɛm? Adɛn nti a? Which animal do you like? Why? Adɛn nti na ɔkra ho hia? Why is a cat important?",
            "audio/book4/page-09.mp3",
            { x: 7, y: 12, w: 86, h: 80 },
            "twi-en"
          ),
        ]),
        page(10, "Kenkan bio.", [
          missing("Kenkan bio.", TWI_BOX),
          missing("Read again.", ENGLISH_BOX, "en"),
        ]),
        page(11, "Blank"),
        page(12, "Credits"),
      ],
    },
    {
      id: "book5",
      title: "Book5",
      assetDir: "assets/book5",
      pages: [
        page(1, "Asɔ ne Ako", [
          recording("Asɔ ne Ako", "audio/book5/cover-twi.mp3", { x: 25, y: 11, w: 50, h: 10 }),
          recording("Aso and the Parrot", "audio/book5/cover-en.mp3", { x: 28, y: 20, w: 44, h: 7 }, "en"),
        ]),
        page(2, "Asɔ ne Ako", [recording("Asɔ ne Ako", "audio/book5/cover-twi.mp3", { x: 25, y: 16, w: 50, h: 10 })]),
        bilingualPage(5, 3, "Asɔ yɛ ɔbaa.", "Aso is a girl."),
        bilingualPage(5, 4, "Asɔ wɔ ako.", "Aso has a parrot."),
        bilingualPage(5, 5, "Asɔ ma ako no nsuo.", "Aso gives the parrot water."),
        bilingualPage(5, 6, "Ako nom nsuo.", "The parrot drinks water."),
        bilingualPage(5, 7, "Ako sɔsɔ aburo.", "The parrot pecks/eats maize."),
        bilingualPage(5, 8, "Asɔ pɛ ako no asɛm.", "Aso likes the parrot."),
        page(9, "Nsɛmmisa", [
          recording(
            "Aboa bɛn na Asɔ wɔ? What bird does Aso have? Aduane bɛn na ako di? What food does the parrot eat? Anomaa bɛn na wopɛ n’asɛm? Adɛn nti a? Which bird do you like? Why? Fa ako yɛ ɔkasamu. Use parrot in a sentence.",
            "audio/book5/page-09.mp3",
            { x: 7, y: 8, w: 86, h: 82 },
            "twi-en"
          ),
        ]),
        page(10, "Blank"),
        page(11, "Blank"),
        page(12, "Credits"),
      ],
    },
    {
      id: "book6",
      title: "Book6",
      assetDir: "assets/book6",
      pages: [
        page(1, "Twi Letter Cards", [missing("Twi Letter Cards", COVER_BOX, "en")]),
        page(2, "Twi Letter Cards", [missing("Twi Letter Cards", { x: 20, y: 16, w: 60, h: 18 }, "en")]),
        recordedPage(6, 3, "ky · kyɛ · share", "ky, kyɛ, share", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 4, "gy · gya · fire", "gy, gya, fire", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 5, "hy · hyɛ · wear", "hy, hyɛ, wear", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 6, "ny · nyɛ · not / do not", "ny, nyɛ, not or do not", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 7, "tw · twa · cut", "tw, twa, cut", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 8, "dw · dwa · peel (cassava)", "dw, dwa, peel cassava", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 9, "kw · kwaeɛ · forest", "kw, kwaeɛ, forest", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 10, "hw · hwɛ · look", "hw, hwɛ, look", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        recordedPage(6, 11, "nw · nwom · song / music", "nw, nwom, song or music", { x: 14, y: 11, w: 72, h: 55 }, "twi-en"),
        page(12, "Credits"),
      ],
    },
    {
      id: "book7",
      title: "Book7",
      assetDir: "assets/book7",
      pages: [
        page(1, "Sam and the Cat", [
          recording("Sam and the Cat", "audio/book7/title.mp3", { x: 22, y: 12, w: 56, h: 9 }, "en"),
          missing("Short /a/ Reader", { x: 32, y: 20, w: 36, h: 6 }, "en"),
        ]),
        page(2, "Sam and the Cat", [
          recording("Sam and the Cat", "audio/book7/title.mp3", { x: 22, y: 17, w: 56, h: 8 }, "en"),
          missing("Short /a/ Reader", { x: 32, y: 28, w: 36, h: 7 }, "en"),
        ]),
        page(3, "Target Sound", [
          recording(
            "Target Sound: short a",
            "audio/book7/page-03-heading.mp3",
            [
              { x: 30, y: 8, w: 40, h: 7 },
              { x: 40, y: 15, w: 20, h: 6 },
            ],
            "en"
          ),
          recording("/a/", "audio/book7/page-03-sound.mp3", { x: 37, y: 22, w: 26, h: 13 }, "en"),
          recording("cat", "audio/book7/page-03-cat.mp3", { x: 21, y: 35, w: 12, h: 7 }, "en"),
          recording("mat", "audio/book7/page-03-mat.mp3", { x: 32, y: 35, w: 12, h: 7 }, "en"),
          recording("cap", "audio/book7/page-03-cap.mp3", { x: 43, y: 35, w: 12, h: 7 }, "en"),
          recording("bag", "audio/book7/page-03-bag.mp3", { x: 54, y: 35, w: 12, h: 7 }, "en"),
          recording("jam", "audio/book7/page-03-jam.mp3", { x: 65, y: 35, w: 13, h: 7 }, "en"),
        ]),
        page(4, "Simple Sentences", [
          recording("Simple Sentences", "audio/book7/page-04-heading.mp3", { x: 28, y: 8, w: 44, h: 7 }, "en"),
          recording("Sam has a cap.", "audio/book7/page-04-01.mp3", { x: 47, y: 28, w: 36, h: 8 }, "en"),
          recording("The cat sat.", "audio/book7/page-04-02.mp3", { x: 47, y: 51, w: 30, h: 8 }, "en"),
          recording("A man has a bag.", "audio/book7/page-04-03.mp3", { x: 47, y: 74, w: 40, h: 8 }, "en"),
        ]),
        page(5, "More Reading Practice", [
          recording("More Reading Practice", "audio/book7/page-05-heading.mp3", { x: 22, y: 8, w: 56, h: 7 }, "en"),
          recording("Sam can pat the cat.", "audio/book7/page-05-01.mp3", { x: 17, y: 64, w: 48, h: 8 }, "en"),
          recording("The cat sat on a mat.", "audio/book7/page-05-02.mp3", { x: 17, y: 71, w: 50, h: 7 }, "en"),
          recording("Sam and the cat sat.", "audio/book7/page-05-03.mp3", { x: 17, y: 77, w: 49, h: 8 }, "en"),
        ]),
        page(6, "Short Paragraph", [
          recording("Short Paragraph", "audio/book7/page-06-heading.mp3", { x: 28, y: 8, w: 44, h: 7 }, "en"),
          recording("Sam has a cat.", "audio/book7/page-06-01.mp3", { x: 17, y: 57, w: 34, h: 7 }, "en"),
          recording("The cat sat on a mat.", "audio/book7/page-06-02.mp3", { x: 17, y: 62, w: 45, h: 7 }, "en"),
          recording("Sam can pat the cat.", "audio/book7/page-06-03.mp3", { x: 17, y: 68, w: 44, h: 7 }, "en"),
          recording("The cat ran at a rat.", "audio/book7/page-06-04.mp3", { x: 17, y: 73, w: 44, h: 7 }, "en"),
          recording("Sam and the cat sat.", "audio/book7/page-06-05.mp3", { x: 17, y: 78, w: 44, h: 7 }, "en"),
        ]),
        page(7, "Story Continues", [
          recording("Story Continues", "audio/book7/page-07-heading.mp3", { x: 28, y: 8, w: 44, h: 7 }, "en"),
          recording("Sam had a bag.", "audio/book7/page-07-01.mp3", { x: 17, y: 57, w: 35, h: 7 }, "en"),
          recording("The cat ran to the bag.", "audio/book7/page-07-02.mp3", { x: 17, y: 62, w: 48, h: 7 }, "en"),
          recording("Sam ran after the cat.", "audio/book7/page-07-03.mp3", { x: 17, y: 68, w: 47, h: 7 }, "en"),
          recording("The cat sat by the bag.", "audio/book7/page-07-04.mp3", { x: 17, y: 73, w: 48, h: 7 }, "en"),
          recording("Sam was glad.", "audio/book7/page-07-05.mp3", { x: 17, y: 78, w: 35, h: 7 }, "en"),
        ]),
        page(8, "Think and Talk", [
          recording("Think and Talk", "audio/book7/page-08-heading.mp3", { x: 29, y: 8, w: 42, h: 7 }, "en"),
          recording("Who has a cat?", "audio/book7/page-08-01.mp3", { x: 18, y: 29, w: 42, h: 9 }, "en"),
          recording("Where did the cat sit?", "audio/book7/page-08-02.mp3", { x: 18, y: 45, w: 56, h: 9 }, "en"),
          recording("Why was Sam glad?", "audio/book7/page-08-03.mp3", { x: 18, y: 61, w: 52, h: 9 }, "en"),
        ]),
        page(9, "Writing Activity", [
          recording(
            "Writing Activity: Write",
            "audio/book7/page-09-heading.mp3",
            [
              { x: 28, y: 8, w: 44, h: 7 },
              { x: 16, y: 23, w: 20, h: 7 },
            ],
            "en"
          ),
          recording("cat", "audio/book7/page-09-cat.mp3", { x: 19, y: 28, w: 13, h: 7 }, "en"),
          recording("mat", "audio/book7/page-09-mat.mp3", { x: 19, y: 33, w: 14, h: 7 }, "en"),
          recording("bag", "audio/book7/page-09-bag.mp3", { x: 19, y: 38, w: 14, h: 7 }, "en"),
          recording("Sam", "audio/book7/page-09-sam.mp3", { x: 19, y: 43, w: 15, h: 7 }, "en"),
          recording(
            "Complete: The cat sat on a blank.",
            "audio/book7/page-09-complete.mp3",
            [
              { x: 16, y: 53, w: 25, h: 7 },
              { x: 16, y: 60, w: 50, h: 8 },
            ],
            "en"
          ),
        ]),
        page(10, "Blank"),
        page(11, "Blank"),
        page(12, "Credits"),
      ],
    },
  ];
})();
