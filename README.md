# Farhan Portfolio — VS Code Version

Portfolio website for **Muhammad Farhan Al Ridho — IoT & Embedded Systems**.

## Project structure

```text
Farhan-Portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

The portfolio keeps the project/certificate/profile images embedded in `index.html` as Base64 data so the site does not depend on separate image files.

## Run in VS Code

1. Open this folder in VS Code.
2. Install the **Live Server** extension if you want live preview.
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser will open the portfolio locally.

You can also open `index.html` directly in a browser, but Live Server is recommended while editing.

## Main technologies

- HTML5 — page structure/content
- CSS3 — layout, responsive design, animations, styling
- JavaScript — navigation, project detail accordion, image lightbox, scroll effects
- Google Fonts — Space Grotesk, Inter, IBM Plex Mono

## GitHub Pages

For GitHub Pages, keep `index.html` in the repository root. The `css` and `js` folders must stay beside it so these relative paths continue to work:

- `css/style.css`
- `js/script.js`

Then enable **Settings → Pages → Deploy from a branch**, select your `main` branch and `/ (root)`.
