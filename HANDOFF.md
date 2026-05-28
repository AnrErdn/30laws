# 30 LAWS — Project Handoff
> Last updated: 2025-05-28  
> Author: Anar-Erdene G.  
> Stack: Next.js 14 · Tailwind CSS · Framer Motion · TypeScript

---

## What this is

A virtual book that teaches all 30 Laws of UX, written in Mongolian. It looks and feels like a premium physical design book (Phaidon/Taschen level). The digital format is used as an advantage — each law has an interactive demo. Built as a design class assignment but intentionally crafted to look like a serious published work.

---

## Current state (what is built)

### Commits so far
1. `85819e2` — Next.js scaffold
2. `1154ec4` — First full build: design system, cover, TOC, Law 01 template, illustration, demo
3. `5acbfba` — Real book layout: CSS 3D page flip, Law 01 as 4 spreads, texture, sound, back cover

### What works right now
- **Physical book** centered on black background. Not fullscreen — you see it as an object with a drop shadow.
- **CSS 3D page flip** — the right page physically peels and rotates 180° around the spine axis. Backward flip mirrors on the left. Looks like turning a real page.
- **Paper rustle sound** on every flip via Web Audio API (no audio files, synthesized from code).
- **Texture** — `Texturelabs_Paper_360M.jpg` on cover, `Texturelabs_Paper_374M.jpg` on interior pages. Applied as background with a dark tint overlay so grain is visible but not distracting.
- **Keyboard nav** — `←` `→` arrow keys flip pages. `T` opens/closes TOC overlay. `Esc` closes TOC.
- **TOC overlay** — dark full-screen overlay listing all 30 laws grouped by category with accent color dots.
- **Back cover** — author name (Anar-Erdene G.), quote, year.
- **Law 01 (Aesthetic-Usability Effect)** — fully built as 4 spreads:
  - Spread 1: Abstract SVG illustration + law title + definition + principle
  - Spread 2: Apple packaging diagrammatic SVG drawing + physical example text + pull quote
  - Spread 3: Stripe dashboard UI SVG sketch + digital example text + side-by-side contrast panel
  - Spread 4: "FEEL THE LAW" left page + interactive demo (ugly vs. beautiful button) with CSS glass card
- **Laws 02–30** — all content loaded from `data/laws.json`, shown as 1 spread each using `DefaultLawSpread`. Content exists and displays, illustrations are placeholder circles.
- **Glass card** — CSS `backdrop-filter: blur + gradient border + inner glow`. Used on Law 01 Spread 4 demo. (See note below about liquid-glass-js.)

### Dead code to delete (from first build, no longer used)
- `components/BookClient.tsx`
- `components/CoverPage.tsx`
- `components/ContentsPage.tsx`
- `components/LawPage.tsx`

---

## File structure (active files only)

```
app/
  layout.tsx          → fonts (Bebas Neue, Playfair Display, DM Sans, DM Mono), metadata
  page.tsx            → renders <BookEngine laws={laws} />
  globals.css         → CSS variables, texture classes, glass card, scrollbar

components/
  BookEngine.tsx      → THE MAIN ORCHESTRATOR. Manages spread index, flip state,
                        flip direction, TOC open/close, keyboard events, arrow buttons.
                        Builds the spread list from laws[] and renders SpreadLayout + FlippingPage.

  book/
    SpreadLayout.tsx  → Left page + spine + right page layout. Handles page-edge depth shadows.
    FlippingPage.tsx  → CSS 3D flip animation. Takes frontContent + backContent, direction,
                        isFlipping bool, onComplete callback. Uses backface-visibility + rotateY.

  spreads/
    CoverSpread.tsx         → Cover spread (left = decorative endpaper, right = 30 LAWS title)
    BackCoverSpread.tsx     → Back cover (author info, quote) + right endpaper
    TocSpread.tsx           → Table of contents (left = title/legend, right = full law list)
    DefaultLawSpread.tsx    → Template for laws 02–30 (left = number + placeholder, right = all content)

    law01/
      Spread1.tsx     → Intro: abstract SVG illustration, category tag, law title, definition, principle
      Spread2.tsx     → Physical example: Apple packaging diagram SVG + text + pull quote
      Spread3.tsx     → Digital example: Stripe dashboard SVG + text + contrast comparison
      Spread4.tsx     → Interactive demo: glass card, ugly vs beautiful button, reveal on click

  illustrations/
    AestheticUsabilityIllustration.tsx  → Abstract SVG (rough shape vs refined shape)
    ApplePackagingDiagram.tsx           → Line-art diagram of iPhone box unboxing
    StripeUIDiagram.tsx                 → Wireframe-style dashboard sketch

  demos/
    AestheticUsabilityDemo.tsx          → OLD demo component (not used in new spread system, can delete)

  TocOverlay.tsx      → Full-screen TOC overlay with category grouping

hooks/
  useFlipSound.ts     → Web Audio API page flip sound (white noise → bandpass filtered)

lib/
  laws.ts             → getLawBySlug(), getLawById(), getAdjacentLaws(), getLawsByCategory()

types/
  law.ts              → Law interface, LawCategory type

data/
  laws.json           → All 30 laws in Mongolian. Every field populated.

public/
  textures/
    paper-cover.jpg   → Texturelabs_Paper_360M (crumpled black paper → heavy grain for cover)
    paper-page.jpg    → Texturelabs_Paper_374M (fine velvety black paper → interior pages)
```

---

## Design system

### Colors
```
--color-cover-bg:      #000000     pure black — cover only
--color-page-bg:       #0E0E0C     near-black warm — interior pages
--color-text-primary:  #F0EDE6     warm off-white — all body text
--color-text-muted:    #6B6B65     muted warm gray — labels, page numbers
--color-rule:          #2A2A26     divider lines
--color-spine:         #080806     the center spine strip
```

### Category accent colors
| Category | Color | Hex |
|---|---|---|
| Behavior & Emotion | Dusty rose | `#B04A4A` |
| Cognitive Load | Slate blue | `#4A6FA5` |
| Decision Making | Warm amber | `#C4872A` |
| Perception & Gestalt | Muted teal | `#3D7A6F` |
| System & Engineering | Olive/moss | `#6B7A3A` |

### Fonts (Google Fonts, loaded in layout.tsx)
- **Bebas Neue** (`--font-bebas`) — law numbers, cover title, large display
- **Playfair Display** (`--font-playfair`) — law titles, body serif, pull quotes
- **DM Sans** (`--font-dm-sans`) — body text, labels, category tags, UI
- **DM Mono** (`--font-dm-mono`) — page numbers, figure captions, code-like labels

### Book dimensions (CSS variables in globals.css)
```css
--page-h: min(78vh, 640px)
--page-w: calc(var(--page-h) * 0.714)   /* portrait page ratio */
--spine-w: 14px
--book-w: calc(var(--page-w) * 2 + var(--spine-w))
```

---

## Spread navigation (how the book is ordered)

| Index | ID | Content |
|---|---|---|
| 0 | `cover` | Front cover spread |
| 1 | `toc` | Table of contents |
| 2 | `law01-s1` | Law 01 · Spread 1 (intro) |
| 3 | `law01-s2` | Law 01 · Spread 2 (physical example) |
| 4 | `law01-s3` | Law 01 · Spread 3 (digital example) |
| 5 | `law01-s4` | Law 01 · Spread 4 (interactive demo) |
| 6 | `law-2` | Law 02 (1 spread) |
| 7 | `law-3` | Law 03 (1 spread) |
| … | … | … |
| 35 | `law-30` | Law 30 (1 spread) |
| 36 | `back-cover` | Back cover spread |

---

## What still needs to be done

### Must-do before this is presentable
- [ ] **Back cover**: update author name display (currently "Anar-Erdene G." — check if this is right)
- [ ] **Delete dead code**: `BookClient.tsx`, `CoverPage.tsx`, `ContentsPage.tsx`, `LawPage.tsx`, `demos/AestheticUsabilityDemo.tsx`
- [ ] **Page flip backward bug**: the backward flip (left page flipping right) needs visual QA — confirm it looks correct in browser
- [ ] **Cover click to open**: currently the cover just sits. The first arrow press flips to TOC. May want a "click to open" hint on the cover spread.

### Next design session (laws 02–30)
- [ ] **Custom SVG illustration** for each law's left page. Currently laws 02–30 show a generic circle placeholder. Each one needs a law-specific abstract geometric illustration.
- [ ] **Multi-spread treatment for other laws**: right now only Law 01 gets 4 spreads. Decide if others also get multiple spreads, or if 1 spread each is fine.
- [ ] **Interactive demos** for other laws. Planned in the original handoff:
  - Hick's Law: menu that grows as options are added (decision time visible)
  - Miller's Law: memory test with 5 vs 12 items
  - Fitts's Law: click targets of different sizes
  - Zeigarnik Effect: interrupted task
- [ ] **Chapter opening pages**: original handoff mentioned alternating full-bleed spread for each category change (like an editorial chapter divider). Optional but would elevate the feel.

### Technical debt
- [ ] **liquid-glass-js** is not integrated. The library creates DOM nodes directly (vanilla JS) which conflicts with React's reconciler. To use it properly would need a `useEffect` + React portal wrapper that mounts the glass canvas behind React content. Currently using CSS `backdrop-filter` glass which looks similar on dark backgrounds. Decide if WebGL version is worth the complexity.
- [ ] **Sound on mobile**: Web Audio API requires a user gesture before the AudioContext can resume. The current implementation handles this silently, but on mobile the first flip won't have sound. Need to add a tap-to-unlock gesture if mobile is in scope.
- [ ] **Mobile layout**: the book is desktop-only right now. `--page-w` is viewport-relative so it scales down, but no swipe gesture is implemented for page flip on mobile.
- [ ] **Swipe to flip** on touch devices: add `touchstart`/`touchend` handler to BookEngine.
- [ ] **Vercel deployment**: not deployed yet. `npm run build` passes clean. Ready to deploy.

### Polish pass (do last)
- [ ] **Page flip shadow during turn**: a dynamic gradient that tracks the rotation angle would make the flip look more physical. Currently it's a static gradient on front/back faces.
- [ ] **Cover "opening" animation**: first load, the book fades in from black. Currently just appears.
- [ ] **Spine title**: the 14px spine strip could show "30 LAWS" rotated 90°. Very premium detail.
- [ ] **Page count indicator**: small "spread X of Y" progress somewhere — or leave minimal.

---

## Known issues / decisions made

**Why not liquid-glass-js**: vanilla JS library that uses `document.createElement` and WebGL canvas management. React reconciler will unmount/remount components and orphan the canvas. Needs a dedicated wrapper component with `useRef` + React portal to work safely. Punted for now.

**Why CSS glass instead**: `backdrop-filter: blur(18px) saturate(1.6)` + gradient border + inner glow. On dark backgrounds this is visually equivalent — the WebGL refraction mainly shows on light/colorful backgrounds where content bleeds through.

**Why always-open book format**: showing the book as a "closed" cover (portrait, single-page) and then animating it to "open" (landscape, two-page) required a complex CSS 3D keyframe that also changes the container width. The always-open format (both pages always visible) is how design books are displayed in stores — it's a valid and premium-feeling choice.

**Texture blend approach**: the textures are near-black paper, so a simple `background-image` + dark `rgba()` color overlay via `::before` pseudo-element. The grain shows through the tint. `mix-blend-mode: overlay` was tried first but is invisible on near-black backgrounds — the pseudo-element approach is more reliable.

---

## How to run

```bash
cd C:\Users\ganar\dev\30laws
npm run dev         # http://localhost:3000
npm run build       # production build (passes clean)
```

## How to deploy (Vercel)

```bash
npx vercel          # first time, follow prompts
npx vercel --prod   # subsequent deployments
```
Or connect the GitHub repo in vercel.com dashboard for auto-deploy.

---

## Source material

- All 30 law definitions: https://lawsofux.com (content written in Mongolian in data/laws.json)
- Textures: https://texturelabs.org (Paper series, 360M + 374M)
- Visual references: provided as ZIP by Anar-Erdene (refs 1–22, referenced in original handoff)
