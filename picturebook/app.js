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

const books = [
  {
    "id": "book7",
    "title": "Book7",
    "assetDir": "assets/book7",
    "pages": [
      {
        "title": "Cover",
        "titleBox": {
          "x": 23.0,
          "y": 10.1,
          "w": 54.0,
          "h": 6.6
        },
        "audio": [
          {
            "text": "Sam and the Cat.",
            "x": 64,
            "y": 79,
            "box": {
              "x": 23.0,
              "y": 10.1,
              "w": 54.0,
              "h": 6.6
            }
          }
        ]
      },
      {
        "title": "Target Sound",
        "audio": [
          {
            "text": "Short 'a' Reader.",
            "x": 65,
            "y": 20,
            "box": {
              "x": 45.5,
              "y": 17.7,
              "w": 23.5,
              "h": 5.4
            }
          },
          {
            "text": "short 'a'",
            "x": 56,
            "y": 28,
            "box": {
              "x": 45.6,
              "y": 25.7,
              "w": 14.3,
              "h": 5.4
            }
          },
          {
            "text": "cat",
            "x": 32.8,
            "y": 37.8,
            "box": {
              "x": 20.8,
              "y": 35.9,
              "w": 9.1,
              "h": 3.8
            }
          },
          {
            "text": "mat",
            "x": 45.5,
            "y": 37.8,
            "box": {
              "x": 31.5,
              "y": 35.9,
              "w": 11,
              "h": 3.7
            }
          },
          {
            "text": "cap",
            "x": 57.1,
            "y": 38.5,
            "box": {
              "x": 44.1,
              "y": 36.5,
              "w": 10,
              "h": 3.9
            }
          },
          {
            "text": "bag",
            "x": 69.4,
            "y": 38.1,
            "box": {
              "x": 56,
              "y": 35.8,
              "w": 10.4,
              "h": 4.6
            }
          },
          {
            "text": "jam",
            "x": 82,
            "y": 38.1,
            "box": {
              "x": 67.8,
              "y": 35.8,
              "w": 11.3,
              "h": 4.7
            }
          }
        ],
        "titleBox": {
          "x": 33.5,
          "y": 6.6,
          "w": 33.0,
          "h": 4.9
        }
      },
      {
        "title": "Simple Sentences",
        "audio": [
          {
            "text": "Sam has a cap.",
            "x": 81.7,
            "y": 31.5,
            "box": {
              "x": 48.9,
              "y": 29.1,
              "w": 29.9,
              "h": 4.1
            }
          },
          {
            "text": "The cat sat.",
            "x": 75.5,
            "y": 55.2,
            "box": {
              "x": 48.9,
              "y": 53.4,
              "w": 23.7,
              "h": 3.5
            }
          },
          {
            "text": "A man has a bag.",
            "x": 86.3,
            "y": 79.7,
            "box": {
              "x": 48.8,
              "y": 77.6,
              "w": 34.6,
              "h": 4.1
            }
          }
        ],
        "titleBox": {
          "x": 29.8,
          "y": 6.6,
          "w": 40.4,
          "h": 4.9
        }
      },
      {
        "title": "More Reading Practice",
        "audio": [
          {
            "text": "Sam can pat the cat.",
            "x": 61.3,
            "y": 69.4,
            "box": {
              "x": 17.2,
              "y": 67.5,
              "w": 41.2,
              "h": 4.2
            }
          },
          {
            "text": "The cat sat on a mat.",
            "x": 62.4,
            "y": 76.1,
            "box": {
              "x": 17,
              "y": 74.2,
              "w": 42.4,
              "h": 3.6
            }
          },
          {
            "text": "Sam and the cat sat.",
            "x": 61,
            "y": 82.8,
            "box": {
              "x": 17.2,
              "y": 80.9,
              "w": 40.9,
              "h": 3.6
            }
          }
        ],
        "titleBox": {
          "x": 23.4,
          "y": 6.6,
          "w": 53.1,
          "h": 4.9
        }
      },
      {
        "title": "Short Paragraph",
        "audio": [
          {
            "text": "Sam has a cat.",
            "x": 46.9,
            "y": 61,
            "box": {
              "x": 17.2,
              "y": 58.8,
              "w": 26.8,
              "h": 4.6
            }
          },
          {
            "text": "The cat sat on a mat.",
            "x": 58.2,
            "y": 66.7,
            "box": {
              "x": 17.2,
              "y": 64.9,
              "w": 38.1,
              "h": 3.4
            }
          },
          {
            "text": "Sam can pat the cat.",
            "x": 57.2,
            "y": 72.4,
            "box": {
              "x": 17.2,
              "y": 70.6,
              "w": 37.1,
              "h": 4
            }
          },
          {
            "text": "The cat ran at a rat.",
            "x": 56.9,
            "y": 78.1,
            "box": {
              "x": 17.2,
              "y": 76,
              "w": 36.8,
              "h": 4.5
            }
          },
          {
            "text": "Sam and the cat sat.",
            "x": 57,
            "y": 83.9,
            "box": {
              "x": 17.2,
              "y": 82,
              "w": 36.9,
              "h": 3.5
            }
          }
        ],
        "titleBox": {
          "x": 30.0,
          "y": 6.6,
          "w": 40.0,
          "h": 4.9
        }
      },
      {
        "title": "Story Continues",
        "audio": [
          {
            "text": "Sam had a bag.",
            "x": 48.5,
            "y": 61.2,
            "box": {
              "x": 17.2,
              "y": 58.9,
              "w": 28.4,
              "h": 4.6
            }
          },
          {
            "text": "The cat ran to the bag.",
            "x": 60.9,
            "y": 66.9,
            "box": {
              "x": 17.2,
              "y": 64.9,
              "w": 40.8,
              "h": 3.9
            }
          },
          {
            "text": "Sam ran after the cat.",
            "x": 59.4,
            "y": 72.4,
            "box": {
              "x": 17.2,
              "y": 70.6,
              "w": 39.3,
              "h": 3.4
            }
          },
          {
            "text": "The cat sat by the bag.",
            "x": 60.7,
            "y": 78.3,
            "box": {
              "x": 17.2,
              "y": 76.3,
              "w": 40.6,
              "h": 3.9
            }
          },
          {
            "text": "Sam was glad.",
            "x": 46.6,
            "y": 84.1,
            "box": {
              "x": 17.2,
              "y": 82.1,
              "w": 26.5,
              "h": 3.9
            }
          }
        ],
        "titleBox": {
          "x": 30.9,
          "y": 6.6,
          "w": 38.2,
          "h": 4.9
        }
      },
      {
        "title": "Think and Talk",
        "audio": [
          {
            "text": "Who has a cat?",
            "x": 56.7,
            "y": 32.3,
            "box": {
              "x": 25.1,
              "y": 30.6,
              "w": 28.7,
              "h": 3.5
            }
          },
          {
            "text": "Where did the cat sit?",
            "x": 68.3,
            "y": 49.5,
            "box": {
              "x": 25.1,
              "y": 47.8,
              "w": 40.2,
              "h": 3.5
            }
          },
          {
            "text": "Why was Sam glad?",
            "x": 65.3,
            "y": 66.8,
            "box": {
              "x": 25.1,
              "y": 64.9,
              "w": 37.3,
              "h": 4
            }
          }
        ],
        "titleBox": {
          "x": 31.2,
          "y": 6.6,
          "w": 37.5,
          "h": 4.2
        }
      },
      {
        "title": "Writing Activity",
        "audio": [
          {
            "text": "Write.",
            "x": 33.2,
            "y": 24.7,
            "box": {
              "x": 15.7,
              "y": 22.9,
              "w": 14.6,
              "h": 3.5
            }
          },
          {
            "text": "cat",
            "x": 30.4,
            "y": 30.5,
            "box": {
              "x": 19.9,
              "y": 28.8,
              "w": 7.6,
              "h": 3.3
            }
          },
          {
            "text": "mat",
            "x": 32,
            "y": 36,
            "box": {
              "x": 19.9,
              "y": 34.4,
              "w": 9.2,
              "h": 3.2
            }
          },
          {
            "text": "bag",
            "x": 31.5,
            "y": 41.6,
            "box": {
              "x": 19.9,
              "y": 39.6,
              "w": 8.7,
              "h": 4
            }
          },
          {
            "text": "Sam",
            "x": 32.8,
            "y": 46.8,
            "box": {
              "x": 19.9,
              "y": 45.1,
              "w": 10,
              "h": 3.5
            }
          },
          {
            "text": "The cat sat on a mat.",
            "x": 62,
            "y": 78,
            "box": {
              "x": 37.9,
              "y": 75.7,
              "w": 28.1,
              "h": 5.4
            }
          }
        ],
        "titleBox": {
          "x": 30.4,
          "y": 6.6,
          "w": 39.0,
          "h": 4.9
        }
      }
    ]
  },
  {
    "id": "book8",
    "title": "Book8",
    "assetDir": "assets/book8",
    "pages": [
      {
        "title": "Cover",
        "titleBox": {
          "x": 20.0,
          "y": 13.4,
          "w": 60.0,
          "h": 6.4
        },
        "audio": [
          {
            "text": "The Duck in the Pond.",
            "x": 70,
            "y": 79,
            "box": {
              "x": 20.0,
              "y": 13.4,
              "w": 60.0,
              "h": 6.4
            }
          }
        ]
      },
      {
        "title": "Word Bank",
        "audio": [
          {
            "text": "Read these words.",
            "x": 64.8,
            "y": 15.8,
            "box": {
              "x": 38,
              "y": 14.4,
              "w": 23.9,
              "h": 2.8
            }
          },
          {
            "text": "the",
            "speechText": "__phonemes__:ðə.",
            "x": 24.6,
            "y": 34.3,
            "box": {
              "x": 14.1,
              "y": 32.6,
              "w": 7.6,
              "h": 3.3
            }
          },
          {
            "text": "was",
            "speechText": "__phonemes__:wɒz.",
            "x": 46.1,
            "y": 34.5,
            "box": {
              "x": 34.4,
              "y": 33.2,
              "w": 8.7,
              "h": 2.8
            }
          },
          {
            "text": "are",
            "speechText": "__phonemes__:ɑɹ.",
            "x": 66.5,
            "y": 34.5,
            "box": {
              "x": 56,
              "y": 33.2,
              "w": 7.6,
              "h": 2.8
            }
          },
          {
            "text": "we",
            "speechText": "__phonemes__:wiː.",
            "x": 87.1,
            "y": 34.5,
            "box": {
              "x": 77.2,
              "y": 33.2,
              "w": 7,
              "h": 2.8
            }
          },
          {
            "text": "he",
            "speechText": "__phonemes__:hˈiː.",
            "x": 23.9,
            "y": 43.8,
            "box": {
              "x": 14.8,
              "y": 42.1,
              "w": 6.1,
              "h": 3.3
            }
          },
          {
            "text": "she",
            "speechText": "__phonemes__:ʃiː.",
            "x": 45.6,
            "y": 43.8,
            "box": {
              "x": 35,
              "y": 42.1,
              "w": 7.6,
              "h": 3.3
            }
          },
          {
            "text": "boy",
            "speechText": "__phonemes__:bˈɔɪ.",
            "x": 66.9,
            "y": 44,
            "box": {
              "x": 55.6,
              "y": 42.1,
              "w": 8.3,
              "h": 3.8
            }
          },
          {
            "text": "girl",
            "speechText": "girl.",
            "x": 87.7,
            "y": 44,
            "box": {
              "x": 76.7,
              "y": 42.1,
              "w": 8.1,
              "h": 3.9
            }
          },
          {
            "text": "one",
            "speechText": "one.",
            "x": 24.9,
            "y": 53.5,
            "box": {
              "x": 13.8,
              "y": 52.2,
              "w": 8.1,
              "h": 2.8
            }
          },
          {
            "text": "you",
            "speechText": "__phonemes__:juː.",
            "x": 46,
            "y": 53.8,
            "box": {
              "x": 34.6,
              "y": 52.2,
              "w": 8.5,
              "h": 3.3
            }
          },
          {
            "text": "they",
            "speechText": "__phonemes__:ðeɪ.",
            "x": 67.5,
            "y": 53.5,
            "box": {
              "x": 55,
              "y": 51.6,
              "w": 9.6,
              "h": 3.8
            }
          }
        ],
        "titleBox": {
          "x": 35.4,
          "y": 6.7,
          "w": 29.0,
          "h": 4.1
        }
      },
      {
        "title": "On the Mat",
        "audio": [
          {
            "text": "We are on the mat.",
            "x": 58.3,
            "y": 66.6,
            "box": {
              "x": 16.9,
              "y": 64.8,
              "w": 38.5,
              "h": 3.5
            }
          },
          {
            "text": "The boy was on the mat.",
            "x": 68.3,
            "y": 73.1,
            "box": {
              "x": 17,
              "y": 71.2,
              "w": 48.3,
              "h": 4.1
            }
          },
          {
            "text": "The girl was by it.",
            "x": 56.4,
            "y": 79.4,
            "box": {
              "x": 17,
              "y": 77.5,
              "w": 36.4,
              "h": 4.2
            }
          }
        ],
        "titleBox": {
          "x": 35.7,
          "y": 6.6,
          "w": 28.6,
          "h": 4.2
        }
      },
      {
        "title": "They Saw the Cat",
        "audio": [
          {
            "text": "He saw the cat.",
            "x": 52.8,
            "y": 72.2,
            "box": {
              "x": 17,
              "y": 70.3,
              "w": 32.8,
              "h": 3.7
            }
          },
          {
            "text": "She saw the cat too.",
            "x": 62,
            "y": 78.7,
            "box": {
              "x": 17.2,
              "y": 76.7,
              "w": 41.9,
              "h": 3.8
            }
          }
        ],
        "titleBox": {
          "x": 29.2,
          "y": 6.6,
          "w": 41.7,
          "h": 4.9
        }
      },
      {
        "title": "By the Pond",
        "audio": [
          {
            "text": "One day, the boy and the girl sat by a pond.",
            "x": 58.8,
            "y": 78.9,
            "box": {
              "x": 17,
              "y": 70.3,
              "w": 53.1,
              "h": 10.9
            }
          }
        ],
        "titleBox": {
          "x": 35.0,
          "y": 6.7,
          "w": 29.8,
          "h": 4.8
        }
      },
      {
        "title": "The Duck",
        "audio": [
          {
            "text": "They saw a duck in the pond.",
            "x": 79.3,
            "y": 72.5,
            "box": {
              "x": 17,
              "y": 70.4,
              "w": 59.3,
              "h": 4.2
            }
          },
          {
            "text": "The duck was glad.",
            "x": 59.8,
            "y": 79,
            "box": {
              "x": 17,
              "y": 76.9,
              "w": 39.8,
              "h": 4.2
            }
          }
        ],
        "titleBox": {
          "x": 37.6,
          "y": 6.7,
          "w": 24.8,
          "h": 4.1
        }
      },
      {
        "title": "They Were Glad",
        "audio": [
          {
            "text": "The boy was glad.",
            "x": 58.7,
            "y": 72.5,
            "box": {
              "x": 17,
              "y": 70.3,
              "w": 38.7,
              "h": 4.4
            }
          },
          {
            "text": "The girl was glad.",
            "x": 58.5,
            "y": 79,
            "box": {
              "x": 17,
              "y": 76.7,
              "w": 38.5,
              "h": 4.5
            }
          }
        ],
        "titleBox": {
          "x": 30.3,
          "y": 6.6,
          "w": 39.3,
          "h": 4.9
        }
      },
      {
        "title": "Think and Write",
        "audio": [
          {
            "text": "Who sat by the pond?",
            "x": 64.1,
            "y": 25,
            "box": {
              "x": 23.9,
              "y": 23.1,
              "w": 37.3,
              "h": 3.8
            }
          },
          {
            "text": "What was in the pond?",
            "x": 66.1,
            "y": 39.8,
            "box": {
              "x": 23.9,
              "y": 37.9,
              "w": 39.2,
              "h": 3.8
            }
          },
          {
            "text": "Write.",
            "x": 72.1,
            "y": 8.8,
            "box": {
              "x": 54.3,
              "y": 6.8,
              "w": 14.8,
              "h": 3.9
            }
          },
          {
            "text": "the",
            "speechText": "__phonemes__:ðə.",
            "x": 53.2,
            "y": 24.8,
            "box": {
              "x": 43,
              "y": 23.1,
              "w": 7.2,
              "h": 3.3
            }
          },
          {
            "text": "was",
            "speechText": "__phonemes__:wɒz.",
            "x": 45,
            "y": 39.8,
            "box": {
              "x": 33.7,
              "y": 38.4,
              "w": 8.3,
              "h": 2.8
            }
          },
          {
            "text": "are",
            "speechText": "__phonemes__:ɑɹ.",
            "x": 65,
            "y": 57.9,
            "box": {
              "x": 54.9,
              "y": 56.6,
              "w": 7.1,
              "h": 2.7
            }
          },
          {
            "text": "you",
            "speechText": "__phonemes__:juː.",
            "x": 85,
            "y": 58.1,
            "box": {
              "x": 74.5,
              "y": 56.6,
              "w": 7.6,
              "h": 3.1
            }
          },
          {
            "text": "The duck was glad.",
            "x": 60,
            "y": 92,
            "box": {
              "x": 39.3,
              "y": 89.7,
              "w": 24.7,
              "h": 5.4
            }
          }
        ],
        "titleBox": {
          "x": 30.0,
          "y": 6.6,
          "w": 39.8,
          "h": 4.2
        }
      }
    ]
  },
  {
    "id": "book9",
    "title": "Book9",
    "assetDir": "assets/book9",
    "pages": [
      {
        "title": "Cover",
        "titleBox": {
          "x": 24.0,
          "y": 15.1,
          "w": 52.0,
          "h": 6.2
        },
        "audio": [
          {
            "text": "The Little Fox.",
            "x": 64,
            "y": 79,
            "box": {
              "x": 24.0,
              "y": 15.1,
              "w": 52.0,
              "h": 6.2
            }
          }
        ]
      },
      {
        "title": "A Happy Home",
        "audio": [
          {
            "text": "Once upon a time, there was a hunter and his wife who lived very well and happily.",
            "x": 53.9,
            "y": 88.9,
            "box": {
              "x": 11,
              "y": 84,
              "w": 77.5,
              "h": 6.6
            }
          },
          {
            "text": "They had a son.",
            "x": 76.3,
            "y": 88.9,
            "box": {
              "x": 49.6,
              "y": 87.1,
              "w": 23.8,
              "h": 3.5
            }
          }
        ],
        "titleBox": {
          "x": 35.3,
          "y": 4.4,
          "w": 29.3,
          "h": 4.1
        }
      },
      {
        "title": "A Gift",
        "audio": [
          {
            "text": "One day the hunter caught a baby fox and brought him home to his son as a gift.",
            "x": 48.4,
            "y": 88.8,
            "box": {
              "x": 11,
              "y": 84.5,
              "w": 75.4,
              "h": 6
            }
          },
          {
            "text": "The boy liked him very much.",
            "x": 88.8,
            "y": 88.6,
            "box": {
              "x": 44.1,
              "y": 87.1,
              "w": 41.8,
              "h": 3.4
            }
          }
        ],
        "titleBox": {
          "x": 42.9,
          "y": 4.4,
          "w": 14.1,
          "h": 3.6
        }
      },
      {
        "title": "Quick and Playful",
        "audio": [
          {
            "text": "The little fox was very quick and mischievous.",
            "x": 78.8,
            "y": 85.9,
            "box": {
              "x": 11,
              "y": 84.4,
              "w": 64.8,
              "h": 3.5
            }
          },
          {
            "text": "The boy liked him very much.",
            "x": 45.1,
            "y": 88.6,
            "box": {
              "x": 11,
              "y": 84.5,
              "w": 76.8,
              "h": 6.1
            }
          },
          {
            "text": "They played together.",
            "x": 75.6,
            "y": 88.9,
            "box": {
              "x": 40.7,
              "y": 87.2,
              "w": 32,
              "h": 3.4
            }
          }
        ],
        "titleBox": {
          "x": 33.3,
          "y": 4.4,
          "w": 33.3,
          "h": 4.1
        }
      },
      {
        "title": "At the Door",
        "audio": [
          {
            "text": "But one day she returned at midday.",
            "x": 59.7,
            "y": 86.2,
            "box": {
              "x": 11,
              "y": 84.6,
              "w": 45.7,
              "h": 3.1
            }
          },
          {
            "text": "The little fox did not run to meet her.",
            "x": 30.4,
            "y": 88.4,
            "box": {
              "x": 11,
              "y": 84.5,
              "w": 75.7,
              "h": 5.2
            }
          },
          {
            "text": "Instead, he sat near the door and whined sadly.",
            "x": 87.1,
            "y": 88.6,
            "box": {
              "x": 25.9,
              "y": 87,
              "w": 58.3,
              "h": 3.2
            }
          },
          {
            "text": "The woman saw that the fox was covered with blood.",
            "x": 78.9,
            "y": 90.8,
            "box": {
              "x": 11,
              "y": 89.5,
              "w": 65,
              "h": 2.7
            }
          }
        ],
        "titleBox": {
          "x": 38.5,
          "y": 4.4,
          "w": 23.0,
          "h": 3.6
        }
      },
      {
        "title": "A Mistake",
        "audio": [
          {
            "text": "Oh, oh, the fox has attacked my child!",
            "x": 65.6,
            "y": 85.9,
            "box": {
              "x": 11.2,
              "y": 84.5,
              "w": 51.5,
              "h": 3.2
            }
          },
          {
            "text": "The woman cried.",
            "x": 87.4,
            "y": 85.9,
            "box": {
              "x": 61.2,
              "y": 84.5,
              "w": 23.3,
              "h": 2.8
            }
          },
          {
            "text": "She grabbed a rock, hit the little fox, and, with a terrible howl, ran into the house.",
            "x": 46.2,
            "y": 90.9,
            "box": {
              "x": 11,
              "y": 86.7,
              "w": 71.1,
              "h": 6
            }
          }
        ],
        "titleBox": {
          "x": 39.6,
          "y": 4.4,
          "w": 20.7,
          "h": 3.6
        }
      },
      {
        "title": "The Child Was Safe",
        "audio": [
          {
            "text": "There was her little son.",
            "x": 46.7,
            "y": 86.1,
            "box": {
              "x": 11,
              "y": 84.5,
              "w": 33,
              "h": 3.2
            }
          },
          {
            "text": "He was laughing happily and playing.",
            "x": 26.3,
            "y": 88.7,
            "boxes": [
              {
                "x": 44,
                "y": 84.5,
                "w": 45,
                "h": 3.2
              },
              {
                "x": 11,
                "y": 87,
                "w": 35,
                "h": 3.2
              }
            ]
          },
          {
            "text": "Next to him was a large dead snake that had been torn to pieces.",
            "x": 33.9,
            "y": 91.3,
            "boxes": [
              {
                "x": 46,
                "y": 87,
                "w": 43,
                "h": 3.2
              },
              {
                "x": 11,
                "y": 89.5,
                "w": 76,
                "h": 3.2
              }
            ]
          }
        ],
        "titleBox": {
          "x": 31.9,
          "y": 4.4,
          "w": 36.3,
          "h": 3.6
        }
      },
      {
        "title": "What Have I Done?",
        "audio": [
          {
            "text": "Oh, oh, what have I done!",
            "x": 58,
            "y": 84,
            "box": {
              "x": 29.3,
              "y": 81.7,
              "w": 32.8,
              "h": 5.4
            }
          },
          {
            "text": "The woman wept.",
            "x": 52,
            "y": 86.2,
            "box": {
              "x": 24.8,
              "y": 84.5,
              "w": 24.3,
              "h": 3.3
            }
          },
          {
            "text": "She was angry at herself for having been so quick to blame the fox.",
            "x": 91.8,
            "y": 88.6,
            "box": {
              "x": 11,
              "y": 84.5,
              "w": 77.8,
              "h": 6
            }
          }
        ],
        "titleBox": {
          "x": 31.9,
          "y": 4.4,
          "w": 36.0,
          "h": 3.6
        }
      }
    ]
  }
];

if (Array.isArray(globalThis.YAW_PICTURE_BOOKS)) {
  books.push(...globalThis.YAW_PICTURE_BOOKS);
}

if (Array.isArray(globalThis.ECCR_A4_BOOKS)) {
  books.splice(0, books.length, ...globalThis.ECCR_A4_BOOKS);
}

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
  if (window.lucide) {
    window.lucide.createIcons();
  }
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
  if (item.audioSrc && item.audioSrc.startsWith("audio/book3/")) {
    return [getBook3A4HotspotBox()];
  }
  return item.boxes || [item.box || estimateHotspotBox(item)];
}

function getBook3A4HotspotBox() {
  if (state.pageIndex === 29) {
    return { x: 27, y: 78, w: 38, h: 8 };
  }
  if (state.pageIndex >= 21 && state.pageIndex <= 28) {
    return { x: 14, y: 77, w: 72, h: 13 };
  }
  return { x: 28, y: 77, w: 44, h: 11 };
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
