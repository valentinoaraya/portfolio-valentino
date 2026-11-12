---
name: Valentino Araya — Portfolio
description: A developer portfolio set like a studio poster on pale paper, with cobalt for action on light and hot pink for action on night.
colors:
  paper: "#f8f8f7"
  ink: "#0c0c0c"
  ink-soft: "#3a3a3a"
  cobalt: "#0836f3"
  cobalt-deep: "#0628c4"
  night: "#111111"
  night-line: "#2c2c2c"
  night-text: "#f2f2f0"
  night-soft: "#b9b7b4"
  hot-pink: "#ff8fd0"
  hot-pink-deep: "#ff6cc0"
  white: "#ffffff"
typography:
  display-grotesk:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "calc(117 * 100vw / 1280)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  display-serif:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "calc(97 * 100vw / 1280)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline-grotesk:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "max(46px, calc(84 * 100vw / 1280))"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline-serif:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "max(42px, calc(74 * 100vw / 1280))"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "max(52px, calc(92 * 100vw / 1280))"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "max(21px, calc(25 * 100vw / 1280))"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 85"
  wordmark:
    fontFamily: "Yellowtail, cursive"
    fontSize: "max(30px, calc(41 * 100vw / 1280))"
    fontWeight: 400
    lineHeight: 1.1
rounded:
  none: "0px"
  sticker: "0.5em"
  dot: "50%"
spacing:
  tile-gap: "2px"
  section-x: "calc(56 * 100vw / 1280)"
  section-x-tablet: "24px"
  section-x-mobile: "20px"
  section-top: "max(96px, calc(140 * 100vw / 1280))"
  project-row: "max(36px, calc(52 * 100vw / 1280))"
components:
  tile-button:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "45px"
    padding: "0 19px"
  tile-button-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.white}"
  tile-button-pink:
    backgroundColor: "{colors.hot-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "45px"
    padding: "0 19px"
  tile-button-pink-hover:
    backgroundColor: "{colors.hot-pink-deep}"
    textColor: "{colors.ink}"
  nav-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "33px"
    padding: "0 13px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "28px"
    padding: "0 10px"
  status-tag:
    backgroundColor: "{colors.hot-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.55rem"
  sticker:
    backgroundColor: "{colors.hot-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.display-grotesk}"
    rounded: "{rounded.sticker}"
---

# Design System: Valentino Araya — Portfolio

## Overview

**Creative North Star: "The Studio Poster"**

The site is a printed poster that happens to scroll. Each section opens with one loud two-voice headline set huge and centered or flush-left, then drops to quiet reading text. The ground is pale paper on light sections and near-black night on the closing sections. Exactly one action colour lives on each ground: cobalt on paper, hot pink on night. Everything else is ink, greys and white.

Density is low and the scale contrast is extreme. Headlines run at roughly 9vw while reading text stays at 16px. Corners are square, surfaces are flat, and depth appears only where a physical object is being depicted, such as the polaroids and the sticker. Controls are built from joined square tiles rather than rounded buttons. The header floats over the content and switches tone when a dark section passes beneath it.

The site is bilingual. Spanish is the default and English is the alternate; the choice persists in `localStorage` under `va-lang`. Both languages carry identical facts, so every headline must hold up in both lengths.

**Key Characteristics:**
- Two-voice headlines: Anton caps over Instrument Serif caps in the same heading.
- One action colour per ground: cobalt on paper, hot pink on night.
- Square, flat, joined tiles for controls; white blocks for nav and chips.
- Fluid scale pinned to a 1280px comp (`1 comp px = 100vw / 1280`), with `max()` floors for legibility.
- Physical objects (polaroids, die-cut sticker) are the only things allowed to cast shadows.

## Colors

A near-monochrome paper-and-ink palette with two saturated action colours, each owning one ground.

### Primary
- **Cobalt** (`cobalt`): the only action colour on paper. Used for tile buttons, the wordmark, hero project-strip links, nav underline on hover, the contact chip dot, the about facts labels, text selection, and the focus ring on light ground.
- **Deep Cobalt** (`cobalt-deep`): hover state of cobalt tiles only.

### Secondary
- **Hot Pink** (`hot-pink`): the action colour on night. Used for the pink tile button, project status tags, highlight bullets, repo links, project-name hover, footer link hover, the back-to-top hover, the sticker, selection and focus ring inside dark sections.
- **Deep Hot Pink** (`hot-pink-deep`): hover state of pink tiles only.

### Neutral
- **Paper** (`paper`): page ground for the hero and about sections.
- **Ink** (`ink`): primary text on paper, and text on pink surfaces.
- **Soft Ink** (`ink-soft`): long-form body copy on paper.
- **Night** (`night`): ground of the projects and contact sections, marked `data-tone="dark"`.
- **Night Line** (`night-line`): 1px dividers between project rows and above the footer; back-to-top tile at rest.
- **Night Text** (`night-text`): headlines and stack lines on night.
- **Night Soft** (`night-soft`): reading text, meta and footer links on night.
- **White** (`white`): nav pill, chips, polaroid frames, sticker border, text on cobalt, wordmark over dark sections.

### Named Rules
**The One Action Colour Per Ground Rule.** Cobalt never appears on night, and hot pink never acts on paper. The only pink on paper is the sticker, which is a depicted object, not a control.

**The Ground Flip Rule.** Any section on night carries `data-tone="dark"`, which flips the header wordmark to white, and re-scopes text selection and the focus ring to hot pink. The white nav pill and chips stay white on both grounds.

## Typography

**Display Font:** Anton (with Arial Narrow)
**Display Partner:** Instrument Serif (with Times New Roman)
**Body Font:** Archivo Variable, width axis (with Helvetica Neue, Arial)
**Wordmark:** Yellowtail
**Voice faces (project names only):** Zilla Slab 700, JetBrains Mono Variable

**Character:** A heavy condensed sans shouting in caps, answered on the next line by a soft high-contrast serif in caps. Archivo at a narrowed width carries reading text and every label, so the loud pair always has a calm neutral to land on.

All faces are self-hosted through `@fontsource`. Anton is a recorded concession: it stands in for the ultra-heavy condensed grotesk of the reference because measured font-matching of the headline region was not reliable enough to justify a closer pick.

### Hierarchy
- **Display** (Anton 400 at ~117 comp px over Instrument Serif 400 at ~97 comp px, line-height 0.86, uppercase): hero headline only. On mobile it switches to viewport units (19vw over 13.5vw).
- **Headline** (Anton 84 comp px, floor 46px, over Instrument Serif 74 comp px, floor 42px, line-height 0.88, uppercase, balanced wrap): every section title. The about section scales this up to 118/104 comp px.
- **Title** (Anton or Instrument Serif at ~92–96 comp px, line-height 0.9, uppercase): project names, alternating voice per entry.
- **Lead** (Instrument Serif 400, 21–26px, line-height 1.22–1.25): about lead paragraph and project summaries.
- **Body** (Archivo 400, 16px, line-height 1.5–1.6; 15–17px for section intros): reading copy, capped at 30–40rem.
- **Label** (Archivo 700, wdth 85, 10.5–13px, letter-spacing 0.01–0.04em, uppercase): nav, chips, tile buttons, status tags, fact labels, stack lines.
- **Byline** (Instrument Serif 400, 19–28px, sentence case): the name-and-place line above the hero headline. It is a byline, not a kicker.

### Named Rules
**The Two Voices Rule.** A section headline is always two lines: grotesk first, serif second, both in caps. Never set a headline in one voice alone, and never in Archivo.

**The Product Voice Rule.** In the hero project strip, each product name speaks in its own typeface: Bookify in Archivo 900 at wide width (112%), Tu Repe in Yellowtail tilted -6°, Liga Gestión in Zilla Slab 700, Cursada in JetBrains Mono, Don Fortunato in Instrument Serif. Zilla Slab and JetBrains Mono exist only for this strip; do not reach for them elsewhere.

## Layout

The page is a single column of full-bleed sections. Sizes are fluid against a 1280px comp: one comp pixel is `100vw / 1280`, and most values use `max(<floor>px, calc(N * comp px))` so they never drop below a legible size.

- **Header:** fixed, three-column grid (`1fr auto 1fr`): wordmark left, nav pill centered, chips right. The header itself ignores pointer events; only its children receive them.
- **Hero:** centered statement column at least one viewport tall, top padding ~163 comp px. A five-column project strip is pinned to the bottom edge (40 comp px inset, 38 comp px from the bottom).
- **About:** two columns at 5fr / 6fr with an 80 comp px gap. The photo stack is sticky beside the text.
- **Projects:** a centered head, then an ordered list of full-width rows. Each row is a 5fr / 6fr grid (identity left, body right), divided by 1px night-line rules.
- **Contact:** a centered call to action, then a footer grid (1.6fr plus three equal columns) under a night-line rule.
- **Section padding:** 140 comp px top (floor 96px), 56 comp px sides, 96–160 comp px bottom.

**Breakpoints:** at 980px about and projects collapse to one column and side padding becomes 24px. At 760px the nav pill drops to a second header row and the hero strip becomes a wrapped, centered flex row. At 560px side padding becomes 20px and the about facts become one column.

`scroll-padding-top` is 72px, or 104px on mobile, so anchored sections clear the fixed header.

## Elevation & Depth

The interface is flat. Panels, buttons, nav and chips carry no shadows; depth between grounds comes from the paper/night switch and from 1px rules. Shadows are reserved for depicted physical objects in the about section.

### Shadow Vocabulary
- **Print lift** (`box-shadow: 0 2px 4px rgb(12 12 12 / 0.06), 0 18px 40px -12px rgb(12 12 12 / 0.28)`): polaroid frames.
- **Sticker lift** (`box-shadow: 0 10px 22px -10px rgb(12 12 12 / 0.45)`): the die-cut sticker.

### Named Rules
**The Objects Cast Shadows Rule.** Only things that would be physical (a photo print, a sticker) get a shadow, and it is always soft and diffuse. Controls and containers stay flat.

## Shapes

Corners are square: tiles, pills, chips, status tags, project rows and the back-to-top button all have 0 radius. The "pill" nav is a white rectangle; the name describes its role, not its shape. Two exceptions: the sticker uses a die-cut 0.5em radius with a 5 comp px white border, and the contact chip dot is a 6px circle. Tilt is part of the form language. The wordmark sits at -7°, Tu Repe at -6°, the polaroids at -3.5° and 4°, and the sticker at -9°. Icons are 16px-grid SVG arrows with square line caps and a 1.75 stroke.

## Components

### Buttons
Tile buttons are the signature control: a square icon tile joined to a label tile by a 2px gap.
- **Shape:** square tiles (0 radius), 45px tall (44px floor); the icon tile is square.
- **Primary (cobalt):** cobalt tiles, white label text, Archivo 700 at width 85, 13px, uppercase, label padding 0 19px. Used for the primary action on paper ("Descargar CV").
- **Pink:** hot-pink tiles with ink text. This is the primary action on night.
- **Hover:** both tiles shift to their deep variant over 0.25s. The arrow moves 15% in its own direction (down for download, right for forward) over 0.45s on `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Focus:** 2px outline in the ground's action colour, offset 4px.
- **Text link action:** the secondary contact action (the CV link on night) is an underlined uppercase label with a 0.3em underline offset and a trailing arrow icon.

### Chips
- **Style:** white rectangles, 28px tall, ink uppercase label text, no border.
- **Language chip:** `ES / EN`, with the inactive language at 45% opacity. Hovering brings both to full opacity.
- **Contact chip:** a 6px cobalt dot before the label.

### Status Tag
Hot-pink block with ink uppercase label text (0.72rem, letter-spacing 0.03em), placed under each project name on night. It states a product's status; it is content, not a section kicker.

### Navigation
- **Nav pill:** a white bar, 33px tall, holding three uppercase labels with a 16 comp px gap. On hover or focus, a 1.5px cobalt underline grows in from the left over 0.35s.
- **Wordmark:** Yellowtail script in cobalt, rotated -7°. It turns white while a `data-tone="dark"` section sits under the header, detected by an IntersectionObserver on the top 6% of the viewport.
- **Mobile (≤760px):** the nav pill moves to a centered second row below the wordmark and chips.

### Project Row
The projects index is a list of editorial rows, never a grid of cards. The left column holds the name (alternating Anton or Instrument Serif per entry), status tag and meta. The right column holds the serif summary, highlights with 0.4rem square pink bullets, an uppercase stack line, and either a pink underlined repo link with an up-right arrow or a muted private note. Hovering or focusing within a row turns the name hot pink over 0.35s.

### Polaroid Pair and Sticker
White-framed prints (12 comp px frame, 40 comp px bottom lip) overlap at opposite tilts inside a sticky 1 / 1.12 box. A pink die-cut sticker in Anton caps with a serif ampersand sits on top. On entry they rise from 28px and 56px offsets and fade in over 1.1s, and the sticker scales up from 0. This is disabled under `prefers-reduced-motion`.

### Hero Project Strip
Five product names along the bottom of the hero, cobalt, each in its own voice (see The Product Voice Rule). Each links to its project row. On hover or focus a name turns ink and lifts 4px over 0.4s.

## Do's and Don'ts

### Do:
- **Do** set every section headline as two caps lines: Anton over Instrument Serif, using the headline scale (84/74 comp px, floors 46/42px).
- **Do** use cobalt as the only action colour on paper and hot pink as the only action colour on night, including selection and focus ring.
- **Do** mark every night section with `data-tone="dark"` so the header wordmark flips to white.
- **Do** build actions as joined square tiles (icon tile + label tile, 2px gap, 45px tall).
- **Do** size against the 1280px comp with `max()` floors, and keep reading text at 16px with measure capped near 30–40rem.
- **Do** ease motion on `cubic-bezier(0.16, 1, 0.3, 1)` and honour `prefers-reduced-motion`.
- **Do** keep Spanish and English copy factually identical, and check headlines at both lengths.

### Don't:
- **Don't** round controls or containers; 0 radius is the rule, with the sticker and the dot as the only exceptions.
- **Don't** put shadows on buttons, nav, chips or panels; only depicted objects cast soft shadows.
- **Don't** present projects as a grid of equal cards; use the divided editorial row.
- **Don't** use Zilla Slab, JetBrains Mono or wide Archivo 900 outside the hero project strip.
- **Don't** put cobalt on night or use hot pink as a control on paper.
- **Don't** add uppercase eyebrow labels above headlines; the serif byline in the hero is the only line that precedes a headline.
