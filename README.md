# ECCR Picture Book and Audio Practice

Static deployment package for the ECCR reading tools.

## Apps

- `/picturebook/`: image-based Book1-Book7 reader. Learners tap text on the page.
- `/audio/`: list-based audio practice app using the same Book1-Book7 data.

The final book images and teacher recordings are packaged with the site. Twi and English body text in Book4 and Book5 use separate clips, so each language line plays its matching recording.

## Offline Build

After replacing a book image or recording, rebuild the service-worker asset list:

```sh
npm run build:offline
```

The Picture Book `Save offline` action downloads all seven books and recordings for later use without a network connection. Missing source recordings are tracked in `MISSING_VOICE_RECORDINGS.md`.

## TTS Backend

The static apps call the TTS API configured in:

```js
shared/config.js
```

Current default:

```js
window.ECCR_TTS_API_BASE = "https://breach-tennis-macintosh-query.trycloudflare.com";
```

That endpoint is still backed by Janet's local MacBook through Cloudflare Tunnel. To make the deployment fully independent, replace this value with a hosted TTS backend such as Hugging Face Spaces, Render, Fly.io, or a VPS that serves:

```text
/api/tts/audio?text=...&engine=...&voice=...&speed=...
```

## Local Check

```sh
npm run check
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173/
http://localhost:4173/picturebook/
http://localhost:4173/audio/
```
