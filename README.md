# Miau’s Cream

A responsive, English-language website for the student entrepreneurship project. Content is based on the supplied `CODEX_CONTEXT_MIAUS_CREAM.md`: natural ingredients, no artificial sugars, guava with raspberry, strawberry, choco-banana, Peruvian ingredients, and recyclable packaging.

## Run locally

Requires Python 3. No dependency installation or build step is needed.

```bash
cd /workspace/English
python3 -m http.server 3000 --bind 0.0.0.0
```

The website is static and can also be hosted on GitHub Pages or any static hosting service. The relative asset paths support hosting beneath a repository subpath. No credentials, database, or external API are required.

## Files

- `index.html`: English content and accessible page structure.
- `styles.css`: responsive pink, cream, burgundy, and blue design.
- `script.js`: flavor detail dialogs with keyboard support.
- `assets/website-qr.svg`: scannable QR code in the home section linking to `https://honguito04.github.io/English/`. It is bundled locally and needs no QR service or runtime dependency. Regenerate the code and update both links in `.hero-qr` if the public website address changes.
- `assets/`: editable SVG illustrations and an AI-generated product image based on the brochure supplied in chat. These are visual interpretations, not extracted original logo or product photographs. Replace with original brand assets when available; update alt text as needed.

Typography is bundled locally from @fontsource/dm-sans 5.3.0 and @fontsource/dm-serif-display 5.3.0 (SIL Open Font License; licenses in assets/fonts). The site makes no external requests.

This is an informational school project website. It does not accept orders or collect personal information. Prices, location, social profiles, and a contact address were not supplied and have not been invented.

## Validation

Check desktop and mobile layouts, all three flavor dialogs, Escape and close buttons, navigation anchors, image loading, and absence of horizontal overflow. Ingredient and allergy details should be confirmed with the project team; the site does not claim sugar-free, dairy-free, vegan, or allergen-free recipes.
