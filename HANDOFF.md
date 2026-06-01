# 30 LAWS — Project Handoff
> Last updated: 2026-05-29  
> Author: Anar-Erdene G.  
> Stack: Next.js 14 · Tailwind CSS · Framer Motion · TypeScript  
> Repo: https://github.com/AnrErdn/30laws  
> Run: `cd C:\Users\ganar\dev\30laws` → `npm run dev` → http://localhost:3000

---

## What this is

A virtual book that teaches all 30 Laws of UX, written in Mongolian. It looks and feels like a premium physical design book (Phaidon/Taschen level). The digital format is used as an advantage — each law has an interactive demo. Built as a design class assignment but intentionally crafted to look like a serious published work.

---

## What is fully built right now

### The book itself
- **Physical book object** centered on pure black background with drop shadow. Not fullscreen — you see it as an object.
- **CSS 3D page flip** — right page physically peels and rotates 180° around the spine axis. Backward flip mirrors on the left.
- **Paper textures** — `paper-cover.jpg` (Texturelabs 360M) on cover, `paper-page.jpg` (Texturelabs 374M) on interior. Dark tint overlay so grain is visible but not distracting.
- **Keyboard navigation** — `←` `→` arrow keys flip pages. `T` opens/closes TOC. `Esc` closes TOC.
- **Click navigation arrows** — subtle arrows on left/right edges of the viewport.
- **TOC overlay** (press `T` or the icon bottom-right) — full-screen dark overlay, all 30 laws grouped by category with accent color dots. Click any law to jump directly to it.
- **Back cover** — author name, quote, year.
- **Cover** — visually reads as a single front cover (left page is pure black, invisible against background).

### Law 01 — Aesthetic-Usability Effect (fully built, 4 spreads)
| Spread | Left page | Right page |
|---|---|---|
| 1 | Abstract SVG illustration (rough vs refined shape) | Law title, definition, principle, category tag |
| 2 | Apple packaging line-art SVG diagram | Physical example text + pull quote |
| 3 | Stripe dashboard wireframe SVG | Digital example text + before/after contrast panel |
| 4 | "FEEL THE LAW" header + context | Interactive demo: ugly vs beautiful button, CSS glass card |

### Laws 02–10 (fully built, 4 spreads each) ← Session 3
Each law has the full 4-spread treatment matching Law 01:

| Spread | Left | Right |
|---|---|---|
| 1 | Custom SVG illustration | Title + definition + principle |
| 2 | Physical example diagram | Physical example text + pull quote |
| 3 | Digital example diagram | Digital example text + before/after panel |
| 4 | "FEEL THE LAW" + takeaway | Interactive demo |

| Law | Illustration | Demo |
|---|---|---|
| 02 Choice Overload | Branching tree → chaos | Toggle 3 vs 12 options |
| 03 Chunking | Scattered vs grouped dots | Memorize chunked vs raw digits |
| 04 Cognitive Bias | Anchoring bars (same bar, different context) | Anchoring bias — high/low anchor → estimate |
| 05 Cognitive Load | Multiple streams vs single clean path | Find ⚙️ in 15 icons vs 3 icons, timed |
| 06 Doherty Threshold | 400ms timeline bar | Feel 100ms / 400ms / 800ms response delay |
| 07 Fitts's Law | Bullseye concentric circles | Click 3 target sizes, timing shown |
| 08 Flow | Diagonal flow channel diagram | Skill + challenge sliders → flow zone indicator |
| 09 Goal-Gradient Effect | Accelerating dots toward goal | Two loyalty cards: 0% vs 20% pre-filled |
| 10 Hick's Law | Log curve (options vs time) | Add menu options, decision complexity grows |

### Laws 11–30 (content ready, design incomplete)
- All 30 laws are loaded from `data/laws.json` in Mongolian — every field is populated.
- Laws 11–30 each show as **1 spread** using `DefaultLawSpread`: placeholder circle left, all text right.
- **Next session: Laws 11–20 get the same 4-spread treatment.**

### UI layer — Session 3 additions
- **Cover open hint** — "OPEN →" pulsing in DM Mono, bottom-right of cover, auto-hides on first flip.
- **Page count indicator** — `1 / 36` bottom-center in DM Mono, hidden on cover and back cover.
- **Loading screen** — font changed to Bebas Neue (same as cover), `scaleX` squish removed to match cover proportions. "Laws of UX" moved below as small DM Sans with wide tracking.
- **Cover texture** — `Texturelabs_Paper_305M.jpg` added to `public/textures/`. Applied to front + back cover via `.texture-cover::after` with `mix-blend-mode: screen` at `opacity: 0.12`. Cover tint eased from 0.72 → 0.64.

### UI layer (ambient/chrome)
- **Loading screen** — Mac/Figma style entry screen. Black background, Playfair Display serif wordmark ("Laws of UX" italic + "30 / Laws" bold), thin 1px progress bar, minimal corner bracket frames. JS-animated via `requestAnimationFrame`. Fades out after ~1.9s. Unmounts completely after fade.
- **Music player** — compact vinyl record widget top-left corner. Spinning animation while playing. Track name + artist. Prev / play-pause / next controls. Click vinyl or track name to expand playlist. 4 tracks loaded from `public/music/`. Auto-advances on track end.
- **Page flip sound** — user-supplied MP3 (`public/sounds/page-flip.mp3`), played via `<Audio>` element on every page turn.
- **UI click sounds** — smooth synthesized click (bandpass-filtered noise + descending sine, ~55ms). Fires on: TOC button, every law item in the TOC overlay. Not snappy — warm and keyboard-like.

---

## File structure (active files only)

```
app/
  layout.tsx          → fonts (Bebas Neue, Playfair Display, DM Sans, DM Mono), metadata
  page.tsx            → renders <BookEngine laws={laws} />
  globals.css         → CSS variables, texture classes, glass card, vinyl-spin keyframe,
                        loading-progress keyframe, scrollbar

components/
  BookEngine.tsx      → MAIN ORCHESTRATOR. Spread index, flip state, flip direction,
                        TOC open/close, keyboard events, arrow buttons, sound hooks.
                        Renders: LoadingScreen + SpreadLayout + FlippingPage + MusicPlayer + TocOverlay

  LoadingScreen.tsx   → Entry loading screen. Playfair Display font. Corner bracket frames.
                        JS progress bar animation. Fades and unmounts automatically.

  MusicPlayer.tsx     → Vinyl record UI player. Top-left corner. Playlist panel on click.
                        Uses useMusicPlayer hook.

  TocOverlay.tsx      → Full-screen TOC overlay. Framer Motion fade. Laws grouped by category.
                        Click sound on each law item.

  book/
    SpreadLayout.tsx  → Left page + spine + right page layout. Page-edge depth shadows.
    FlippingPage.tsx  → CSS 3D flip animation. frontContent + backContent, direction,
                        isFlipping bool, onComplete callback. backface-visibility + rotateY.

  spreads/
    CoverSpread.tsx         → Cover (left = pure black, right = "30 LAWS" title)
    BackCoverSpread.tsx     → Back cover (author info, quote) + right endpaper
    TocSpread.tsx           → Table of contents spread
    DefaultLawSpread.tsx    → Template for laws 11–30 (placeholder circle + all text)

    law01/                  → 4 spreads (fully built)
    law02/                  → 4 spreads (fully built) — Choice Overload
    law03/                  → 4 spreads (fully built) — Chunking
    law04/                  → 4 spreads (fully built) — Cognitive Bias
    law05/                  → 4 spreads (fully built) — Cognitive Load
    law06/                  → 4 spreads (fully built) — Doherty Threshold
    law07/                  → 4 spreads (fully built) — Fitts's Law
    law08/                  → 4 spreads (fully built) — Flow
    law09/                  → 4 spreads (fully built) — Goal-Gradient Effect
    law10/                  → 4 spreads (fully built) — Hick's Law

  illustrations/
    AestheticUsabilityIllustration.tsx  → Abstract SVG (rough vs refined)
    ApplePackagingDiagram.tsx           → iPhone box line-art
    StripeUIDiagram.tsx                 → Wireframe dashboard sketch

hooks/
  useFlipSound.ts     → Page flip sound. Plays public/sounds/page-flip.mp3 via HTMLAudioElement.
  useClickSound.ts    → UI click sound. Synthesized via Web Audio API (bandpass noise + sine).
  useMusicPlayer.ts   → Background music state. Audio element, track list, play/pause,
                        track switching, auto-advance on end.

lib/
  laws.ts             → getLawBySlug(), getLawById(), getAdjacentLaws(), getLawsByCategory()

types/
  law.ts              → Law interface, LawCategory type

data/
  laws.json           → All 30 laws in Mongolian. Every field populated.

public/
  sounds/
    page-flip.mp3     → Page turn sound effect (user-supplied)
  music/
    starry-night.mp3       → Starry Night — Jordan Critz
    idea-25.mp3            → Idea 25 — Gibran Alcocer & Andrea Vanzo
    drive-me-crazy.mp3     → Drive Me Crazy — Myles Lloyd
    time-and-trust.mp3     → Time And Trust — Naomi Sharon
  textures/
    paper-cover.jpg          → Texturelabs_Paper_360M (cover base grain)
    paper-page.jpg           → Texturelabs_Paper_374M (interior grain)
    Texturelabs_Paper_305M.jpg → kraft paper, blended over front+back cover via ::after
```

### Dead code — deleted in Session 3 ✅
- `components/BookClient.tsx` — gone
- `components/CoverPage.tsx` — gone
- `components/ContentsPage.tsx` — gone
- `components/LawPage.tsx` — gone
- `components/demos/AestheticUsabilityDemo.tsx` — gone

---

## Design system

### Colors
```
--color-cover-bg:      #000000     pure black — cover + loading screen
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

### Fonts (Google Fonts via next/font, loaded in layout.tsx)
- **Bebas Neue** (`--font-bebas`) — law numbers, TOC header, large display elements
- **Playfair Display** (`--font-playfair`) — law titles, body serif, pull quotes, loading screen wordmark
- **DM Sans** (`--font-dm-sans`) — body text, labels, category tags, UI chrome
- **DM Mono** (`--font-dm-mono`) — page numbers, figure captions, music player artist name

### Book dimensions (CSS variables in globals.css)
```css
--page-h: min(78vh, 640px)
--page-w: calc(var(--page-h) * 0.714)   /* portrait page ratio */
--spine-w: 14px
--book-w: calc(var(--page-w) * 2 + var(--spine-w))
```

### Spread navigation order
| Index | ID | Content | Pages |
|---|---|---|---|
| 0 | `cover` | Front cover | — |
| 1 | `toc` | Table of contents | — |
| 2–5 | `law01-s1` … `law01-s4` | Law 01 (4 spreads) | 1–8 |
| 6–9 | `law02-s1` … `law02-s4` | Law 02 (4 spreads) | 9–16 |
| 10–13 | `law03-s1` … `law03-s4` | Law 03 (4 spreads) | 17–24 |
| 14–17 | `law04-s1` … `law04-s4` | Law 04 (4 spreads) | 25–32 |
| 18–21 | `law05-s1` … `law05-s4` | Law 05 (4 spreads) | 33–40 |
| 22–25 | `law06-s1` … `law06-s4` | Law 06 (4 spreads) | 41–48 |
| 26–29 | `law07-s1` … `law07-s4` | Law 07 (4 spreads) | 49–56 |
| 30–33 | `law08-s1` … `law08-s4` | Law 08 (4 spreads) | 57–64 |
| 34–37 | `law09-s1` … `law09-s4` | Law 09 (4 spreads) | 65–72 |
| 38–41 | `law10-s1` … `law10-s4` | Law 10 (4 spreads) | 73–80 |
| 42–61 | `law-11` … `law-30` | Laws 11–30 (1 spread each) | 81–120 |
| 62 | `back-cover` | Back cover | — |

---

## What needs to be done — in priority order

### 1. Laws 11–20 — 4-spread treatment ← next session
Same pattern as Laws 02–10. Create `components/spreads/law{11–20}/Spread{1–4}.tsx`, wire into `buildSpreads()` in `BookEngine.tsx` before the `law-{n}` loop.

Page numbers continue from 81 (Laws 11–20 will be pages 81–160, then Laws 21–30 start at 161).

### 2. Laws 21–30 — 4-spread treatment ← session after
Same as above.

### 3. Interactive demos for Laws 11–30
Each law's Spread4 right page needs a demo. Follow the exact pattern from Laws 02–10.

### 4. Multi-spread wiring — note on BookEngine
`buildSpreads()` in `BookEngine.tsx` currently:
- Laws 01–10: 4 spreads each (inline, not a loop)
- Laws 11–30: `DefaultLawSpread` 1 spread each (loop `for i = 10; i < laws.length`)

When adding Laws 11–20, add them to the `fullLawSpreads` array (same pattern as laws 02–10), or extract each batch into its own block.

### 5. Deploy to Vercel
`npm run build` passes clean. Ready to deploy.
```bash
npx vercel          # first deploy, follow prompts
npx vercel --prod   # after that
```
Or connect GitHub repo at vercel.com for auto-deploy on push to main.

### 6. Cover "open book" hint
The cover just sits. First arrow press flips to TOC. Consider adding a subtle "OPEN →" or pulsing arrow hint on the cover so new visitors know to click/press.

### 7. Mobile (if in scope)
Currently desktop-only. `--page-w` is viewport-relative so it scales down, but:
- No swipe gesture for page flip. Need `touchstart`/`touchend` in `BookEngine.tsx`.
- On mobile, first flip has no sound — Web Audio requires a prior user gesture. Need a tap-to-unlock.
- Consider a vertical single-page layout below ~640px breakpoint.

---

## Polish items (do last, nice-to-have)

- **Spine title**: the 14px spine strip could show "30 LAWS" rotated 90° — very premium detail
- **Dynamic flip shadow**: the shadow on the flipping page is static. A gradient that tracks `rotateY` angle would look more physical
- **Chapter divider spreads**: a full-bleed editorial spread each time the category changes (Behavior & Emotion → Cognitive Load etc.) — like editorial chapter openers
- **Page count indicator**: small "6 / 36" or dot progress somewhere minimal
- **Back cover**: confirm author name and quote are final

---

## Known decisions and why

**Cover is always two-page width, left page is black**: making the cover a true single-page (half-width) would require animating the container from single to double width on first flip — awkward and complex. Black left page = visually reads as single page, zero complexity.

**CSS glass card instead of liquid-glass-js**: `liquid-glass-js` is a vanilla JS library that uses `document.createElement` directly. React's reconciler will unmount/remount it and orphan the WebGL canvas. Would need a `useRef` + portal wrapper to work safely. Punted. CSS `backdrop-filter: blur(18px) saturate(1.6)` + gradient border looks equivalent on dark backgrounds anyway.

**Texture blend via `::before` pseudo-element**: the textures are near-black paper. `mix-blend-mode: overlay` is invisible on near-black backgrounds. `::before` with `rgba()` overlay is reliable regardless of base color.

**Loading screen uses `requestAnimationFrame` for progress bar**: CSS `@keyframes` can miss its first-render trigger if the stylesheet hasn't fully parsed when the element mounts. `requestAnimationFrame` runs in the browser paint loop — always fires.

**Page flip sound is an `<Audio>` element, not Web Audio API**: simpler code, real recorded sound, reusable across flips via `currentTime = 0` reset. The synthesized approach was replaced when a real audio file was available.

---

## How to run

```bash
cd C:\Users\ganar\dev\30laws
npm run dev         # http://localhost:3000
npm run build       # check production build
```

## How to deploy (Vercel)

```bash
npx vercel          # first time — follow prompts, connects to GitHub
npx vercel --prod   # subsequent deploys
```
Or push to `main` with auto-deploy enabled in Vercel dashboard.

---

## Source material

- Law definitions: https://lawsofux.com — written in Mongolian in `data/laws.json`
- Textures: https://texturelabs.org — Paper series 360M (cover) + 374M (pages)
- Music: Jordan Critz · Gibran Alcocer & Andrea Vanzo · Myles Lloyd · Naomi Sharon
- Visual references: ZIP provided by Anar-Erdene (refs 1–22, used during illustration design)
