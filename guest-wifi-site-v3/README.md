# Guest Wi‑Fi Landing Page (Windows 95 style, v2)

A tiny site to reveal your Wi‑Fi password after guests enter a secret code.

## Set your real password
1. Open `index.html`.
2. Find the element with id `wifi-password` and replace `SET_ME_AFTER_DEPLOY` with your actual Wi‑Fi password.
3. Commit and push.

> The password only appears after the correct secret code is entered.

## Change the secret code
Open `script.js` and update:
```js
const SECRET = "rooney red";
```

## Optional sound effect
Place a file you have rights to use at `assets/sfx/youve_got_mail.mp3`.
If you change the file name, also update the `<audio>` source in `index.html`.

## Deploy to GitHub Pages
1. Create a new repo on GitHub, e.g., `guest-wifi`.
2. Upload all files.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** (branch: `main`, folder: `/ (root)`).
5. Save and wait ~1–2 minutes.
6. Your site will be at: `https://<your-username>.github.io/<repo-name>/`

## QR code
Create a QR code pointing to that URL. Print and post it for guests.

## Accessibility
- Keyboard support for unlocking.
- `aria-live` for status text.
- Respects Reduced Motion for the veil animation.
