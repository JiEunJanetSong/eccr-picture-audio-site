window.ECCR_A4_BOOKS = [
  {
    id: "book1",
    title: "Book1",
    assetDir: "assets/book1",
    pages: Array.from({ length: 12 }, (_, index) => ({
      title: `Page ${index + 1}`,
      image: `page-${String(index + 1).padStart(2, "0")}.jpg`,
      audio: [],
    })),
  },
  {
    id: "book2",
    title: "Book2",
    assetDir: "assets/book2",
    pages: Array.from({ length: 20 }, (_, index) => ({
      title: `Page ${index + 1}`,
      image: `page-${String(index + 1).padStart(2, "0")}.jpg`,
      audio: [],
    })),
  },
  {
    id: "book3",
    title: "Book3",
    assetDir: "assets/book3",
    pages: [
      { title: "Cover", image: "page-01.jpg", audio: [] },
      { title: "Book 3", image: "page-02.jpg", audio: [] },
      {
        title: "Fa bi",
        image: "page-03.jpg",
        audio: [{ text: "Fa bi", speechText: "Fa bi.", lang: "twi", audioSrc: "audio/book3/1-Fabi.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Ka bi",
        image: "page-04.jpg",
        audio: [{ text: "Ka bi", speechText: "Ka bi.", lang: "twi", audioSrc: "audio/book3/2-Kabi.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Di bi",
        image: "page-05.jpg",
        audio: [{ text: "Di bi", speechText: "Di bi.", lang: "twi", audioSrc: "audio/book3/3-Dibi.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Sa fa",
        image: "page-06.jpg",
        audio: [{ text: "Sa fa", speechText: "Sa fa.", lang: "twi", audioSrc: "audio/book3/4-Safa.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Tu ko",
        image: "page-07.jpg",
        audio: [{ text: "Tu kɔ", speechText: "Tu kɔ.", lang: "twi", audioSrc: "audio/book3/5-Tuko.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Ko da",
        image: "page-08.jpg",
        audio: [{ text: "Kɔ da", speechText: "Kɔ da.", lang: "twi", audioSrc: "audio/book3/6-Koda.mp3", box: { x: 0, y: 0, w: 48, h: 18 } }],
      },
      {
        title: "Yi bi di",
        image: "page-09.jpg",
        audio: [{ text: "Yi bi di", speechText: "Yi bi di.", lang: "twi", audioSrc: "audio/book3/7-Yibidi.mp3", box: { x: 0, y: 0, w: 54, h: 18 } }],
      },
      {
        title: "Sa bi we",
        image: "page-10.jpg",
        audio: [{ text: "Sa bi we", speechText: "Sa bi we.", lang: "twi", audioSrc: "audio/book3/8-Sabiwe.mp3", box: { x: 0, y: 0, w: 54, h: 18 } }],
      },
      {
        title: "Ka bi fa",
        image: "page-11.jpg",
        audio: [{ text: "Ka bi fa", speechText: "Ka bi fa.", lang: "twi", audioSrc: "audio/book3/9-Kabifa.mp3", box: { x: 0, y: 0, w: 54, h: 18 } }],
      },
      {
        title: "Ma me bi",
        image: "page-12.jpg",
        audio: [{ text: "Ma me bi", speechText: "Ma me bi.", lang: "twi", audioSrc: "audio/book3/10-Mamebi.mp3", box: { x: 0, y: 0, w: 58, h: 18 } }],
      },
      {
        title: "Te me so",
        image: "page-13.jpg",
        audio: [{ text: "Te me so", speechText: "Te me so.", lang: "twi", audioSrc: "audio/book3/11-Temeso.mp3", box: { x: 0, y: 0, w: 58, h: 18 } }],
      },
      {
        title: "Ka bi we",
        image: "page-14.jpg",
        audio: [{ text: "Ka bi we", speechText: "Ka bi we.", lang: "twi", audioSrc: "audio/book3/12-Kabiwe.mp3", box: { x: 0, y: 0, w: 58, h: 18 } }],
      },
      {
        title: "Fa bi si me so",
        image: "page-15.jpg",
        audio: [{ text: "Fa bi si me so", speechText: "Fa bi si me so.", lang: "twi", audioSrc: "audio/book3/13-Fabisimeso.mp3", box: { x: 0, y: 0, w: 72, h: 18 } }],
      },
      {
        title: "Sa bi gu me ho",
        image: "page-16.jpg",
        audio: [{ text: "Sa bi gu me ho", speechText: "Sa bi gu me ho.", lang: "twi", audioSrc: "audio/book3/14-Sabigumeho.mp3", box: { x: 0, y: 0, w: 72, h: 18 } }],
      },
      {
        title: "To bi gu me ho",
        image: "page-17.jpg",
        audio: [{ text: "To bi gu me ho", speechText: "To bi gu me ho.", lang: "twi", audioSrc: "audio/book3/15-Tobigumeho.mp3", box: { x: 0, y: 0, w: 72, h: 18 } }],
      },
      {
        title: "Yi bi ma me",
        image: "page-18.jpg",
        audio: [{ text: "Yi bi ma me", speechText: "Yi bi ma me.", lang: "twi", audioSrc: "audio/book3/16-Yibimame.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "To bi ma yen",
        image: "page-19.jpg",
        audio: [{ text: "To bi ma yɛn", speechText: "To bi ma yɛn.", lang: "twi", audioSrc: "audio/book3/17-Tobimayen.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Ka bi na fa",
        image: "page-20.jpg",
        audio: [{ text: "Ka bi na fa", speechText: "Ka bi na fa.", lang: "twi", audioSrc: "audio/book3/18-Kabinafa.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Papa Musa",
        image: "page-21.jpg",
        audio: [{ text: "Papa Musa", speechText: "Papa Musa.", lang: "twi", audioSrc: "audio/book3/19-PapaMusa.mp3", box: { x: 0, y: 0, w: 62, h: 18 } }],
      },
      {
        title: "Story 1",
        image: "page-22.jpg",
        audio: [{ text: "Papa Musa wo nkoko mmienu, mponkye mmienu ne mma baanu.", speechText: "Papa Musa wɔ nkokɔ mmienu, mpɔnkye mmienu ne mma baanu.", lang: "twi", audioSrc: "audio/book3/20-.mp3", box: { x: 0, y: 0, w: 78, h: 22 } }],
      },
      {
        title: "Story 2",
        image: "page-23.jpg",
        audio: [{ text: "Ne ba barima ne Ali.", speechText: "Ne ba barima ne Ali.", lang: "twi", audioSrc: "audio/book3/21-.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Story 3",
        image: "page-24.jpg",
        audio: [{ text: "Ne ba baa ne Alima.", speechText: "Ne ba baa ne Alima.", lang: "twi", audioSrc: "audio/book3/22-.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Story 4",
        image: "page-25.jpg",
        audio: [{ text: "Anopa biara, Ali pra mmoa no buo no mu.", speechText: "Anɔpa biara, Ali pra mmoa no buo no mu.", lang: "twi", audioSrc: "audio/book3/23-.mp3", box: { x: 0, y: 0, w: 82, h: 18 } }],
      },
      {
        title: "Story 5",
        image: "page-26.jpg",
        audio: [{ text: "Oma mmoa no aduane di.", speechText: "Ɔma mmoa no aduane di.", lang: "twi", audioSrc: "audio/book3/24-.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Story 6",
        image: "page-27.jpg",
        audio: [{ text: "Anopa biara, Alima pra adiho.", speechText: "Anɔpa biara, Alima pra adihɔ.", lang: "twi", audioSrc: "audio/book3/25-.mp3", box: { x: 0, y: 0, w: 74, h: 18 } }],
      },
      {
        title: "Story 7",
        image: "page-28.jpg",
        audio: [{ text: "Oma mmoa no nsuo nom.", speechText: "Ɔma mmoa no nsuo nom.", lang: "twi", audioSrc: "audio/book3/26-.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Story 8",
        image: "page-29.jpg",
        audio: [{ text: "Woyɛ ntɛm ko sukuu.", speechText: "Wɔyɛ ntɛm kɔ sukuu.", lang: "twi", audioSrc: "audio/book3/27-.mp3", box: { x: 0, y: 0, w: 68, h: 18 } }],
      },
      {
        title: "Questions",
        image: "page-30.jpg",
        audio: [{ text: "Kenkan bio.", speechText: "Kenkan bio.", lang: "twi", audioSrc: "audio/book3/28-.mp3", box: { x: 28, y: 78, w: 34, h: 8 } }],
      },
      { title: "Blank", image: "page-31.jpg", audio: [] },
      { title: "Credits", image: "page-32.jpg", audio: [] },
    ],
  },
];
