# 30 LAWS — Project Handoff
> Last updated: 2026-05-28  
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

### Laws 02–30 (content ready, design incomplete)
- All 30 laws are loaded from `data/laws.json` in Mongolian — every field is populated (title, definition, principle, physical example, digital example, pull quote, category).
- Each law shows as **1 spread** using `DefaultLawSpread`: left page has law number + a placeholder circle, right page has all the text content.
- The content displays correctly. **The only missing piece is custom illustrations.**

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
    DefaultLawSpread.tsx    → Template for laws 02–30

    law01/
      Spread1.tsx     → Intro illustration + title + definition + principle
      Spread2.tsx     → Physical example: Apple packaging + text + pull quote
      Spread3.tsx     → Digital example: Stripe dashboard + text + contrast panel
      Spread4.tsx     → Interactive demo: glass card, ugly vs beautiful button

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
    paper-cover.jpg   → Texturelabs_Paper_360M (cover grain)
    paper-page.jpg    → Texturelabs_Paper_374M (interior grain)
```

### Dead code — delete these (from first build, replaced but not cleaned up)
- `components/BookClient.tsx`
- `components/CoverPage.tsx`
- `components/ContentsPage.tsx`
- `components/LawPage.tsx`
- `components/demos/AestheticUsabilityDemo.tsx`

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
| Index | ID | Content |
|---|---|---|
| 0 | `cover` | Front cover |
| 1 | `toc` | Table of contents |
| 2 | `law01-s1` | Law 01 · Spread 1 (intro) |
| 3 | `law01-s2` | Law 01 · Spread 2 (physical example) |
| 4 | `law01-s3` | Law 01 · Spread 3 (digital example) |
| 5 | `law01-s4` | Law 01 · Spread 4 (interactive demo) |
| 6 | `law-2` | Law 02 (1 spread) |
| 7 | `law-3` | Law 03 (1 spread) |
| … | … | … |
| 35 | `law-30` | Law 30 (1 spread) |
| 36 | `back-cover` | Back cover |

---

## What needs to be done — in priority order

### 1. Custom SVG illustrations for Laws 02–30 ← biggest visual gap
Every law's left page currently shows a generic placeholder circle. Each needs a law-specific abstract geometric illustration — same style as `AestheticUsabilityIllustration.tsx` (clean SVG, abstract, conceptual, no color except page tones).

The illustration goes in `components/illustrations/` as a `.tsx` file, then referenced in `DefaultLawSpread.tsx` (or in a per-law spread if you go multi-spread).

Each illustration should visually encode the law's core idea. Examples:
- **Hick's Law** → many small diverging paths from one point → decision paralysis
- **Fitts's Law** → concentric circles, closer/larger = easier to hit
- **Miller's Law** → 7 dots grouped vs 12 scattered
- **Gestalt Proximity** → dots clustered into implied shapes
- **Zeigarnik Effect** → incomplete circle / interrupted line

### 2. Delete dead code
Delete these 5 files — they are never imported anywhere:
- `components/BookClient.tsx`
- `components/CoverPage.tsx`
- `components/ContentsPage.tsx`
- `components/LawPage.tsx`
- `components/demos/AestheticUsabilityDemo.tsx`

### 3. Interactive demos for key laws
Law 01 has the ugly/beautiful button demo. The other high-priority laws for demos:

| Law | Demo idea |
|---|---|
| Hick's Law | Menu that adds options — watch decision time increase |
| Miller's Law | Memory test: remember 5 items vs 12 items |
| Fitts's Law | Click targets at different sizes and distances |
| Zeigarnik Effect | Task you start but can't finish — shows incomplete tasks stay in memory |
| Jakob's Law | Familiar vs unfamiliar UI pattern comparison |

Each demo lives in `components/spreads/law{XX}/Spread4.tsx` following the Law 01 pattern.

### 4. Multi-spread treatment for select laws
Right now only Law 01 gets 4 spreads. The rest get 1. Two options:
- **Option A**: Give all laws 4 spreads (consistent, most work)
- **Option B**: Give only the "hero" laws (top 8-10) the full treatment, keep others at 1 spread

Recommendation: Option B. Pick the laws with the most visual potential or the most important to the subject matter, build them out fully, keep the rest at 1 spread.

To add spreads for a law: add spread components in `components/spreads/law{XX}/`, then add entries in `buildSpreads()` in `BookEngine.tsx` before the `law-{n}` entry.

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
