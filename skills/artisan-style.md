# Skill: Artisan style

Read when: changing the look of, or adding a section to, a shop started from the Artisan template.

Artisan: a small-batch workshop. Fraunces for display, Lora for reading, paper tones, pill buttons, soft paper cards and an arch as each page's picture.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #faf4ea`, `--shop-ink: #3a2a1e`, `--shop-font-body: 'Lora', serif`, `--shop-font-display: 'Fraunces', serif`, `--shop-radius-button: 999px`, `--shop-radius-card: 18px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- Copy stays generic for the vertical (Food, crafts, cosmetics and handmade goods) and promises nothing the merchant may not keep: no delivery times, return windows, warranties, discounts, scarcity or ratings.
