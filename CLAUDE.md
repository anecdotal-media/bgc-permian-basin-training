# BGC Permian Basin — Staff Social Media Training

A 1-hour live training deck for Boys & Girls Clubs of the Permian Basin staff. Co-presented by Ryan (Anecdotal Media) and Al. Generated via the `training-deck` skill at `~/.claude/skills/training-deck/training-deck.md` — this is the canonical instance for that skill.

## Where this lives
- **Repo:** `github.com/anecdotal-media/bgc-permian-basin-training` (auto-deploys to GitHub Pages on push to `main`)
- **Live:** https://anecdotal-media.github.io/bgc-permian-basin-training/
- **Local working copy:** `~/bgc-permian-basin-training/` (this directory)

## Stack
- Single-file `index.html` (~1700 lines) with inline CSS + JS
- Snap-scroll, side-dot nav, keyboard nav (↑↓→← Space PgUp PgDn 1-9), `data-reveal` + IntersectionObserver fade-up
- `@media print` for 11×8.5 landscape PDF (run `node build-pdf.mjs`)
- OG image rendered from `og.html` via Puppeteer (run `node build-og.mjs`)
- `npm install` after fresh clone to get Puppeteer

## Design system
- **BGC blue:** `#0076BA` (extracted from BGCA logo) — primary accent + statement.blue background
- **Cream:** `#F8F6F1` — slide background
- **Deep ink:** `#0F1F36` — text + statement.dark background
- **Ink-soft:** `#4A5970` — body text
- **Gold accent:** `#FFC72C` — `<em>` highlights on solid-color statement slides + closing eyebrow
- **Fonts:** DM Sans (300/400/500/700), Playfair Display (italic accents), Anton (display)
- **Anecdotal favicon** + Anecdotal horizontal logo on slide 3 (no Hallpass co-branding — solo Anecdotal engagement)

## Slide structure (27 total)

| # | Slide | Notes |
|---|-------|-------|
| 1 | Cover — *"Stop the scroll."* | image1 hero, then jump to Mentimeter |
| 2 | What we'll cover today | Strategy + Tactics + Pareto reassurance baked in |
| 3 | Authority — *We're Anecdotal Media* | 8-logo brand wall + 260K / 13M stats |
| 4 | Why this matters | "You're doing amazing work. Midland & Odessa just needs to see it." + 3 bullets (parents/donors/community) |
| 5 | You are the camera crew now | Opens with "You're already there." |
| 6 | E/E/I framework | 3-card. Cards step in one-at-a-time on forward keypress (`[data-step]`) |
| 7 | Magic Venn | All three labels inside their circles. Callout outside on right with curved SVG arrow into centroid |
| 8 | Pay attention to your scroll | "The next time you scroll social media, pay attention to what stops your scroll." — Start tonight. |
| 9 | **Hooks — defined** | Strategy 02. Four-column concept slide: Visual / Curiosity / Statement / Question, each with a one-line description + 3 tactic bullets. NO embeds — they live on slide 10. |
| 10 | **Hooks — in the wild** | Strategy 02 · In practice. Just the two Instagram reel embeds side-by-side with `.hooks-grid.showcase` (iframe height 640px). Reels: DXHpi8tjJEr (visual), DWZKSdDDl6F (curiosity). |
| 11 | *"See it coming."* — train the reflex | Strategy 03 · Planned vs Unplanned moments. Sets up slide 12. |
| 12 | Four signals to spot a story | Strategy 04. First / surprise / contrast / real relationship |
| 13 | Beyond posed photos | Tactics 01. Yearbook photos vs real moments |
| 14 | **Candid > posed** | Three-up gallery (`.candid-grid`): skateboarder at sunset, kids painting sidewalk, sprinkler jump. Headline is the full thesis: "Candid, un-staged photos capture authenticity in a way that posed photos do not." Photos: `img/candid-1.jpg`, `candid-2.jpg`, `candid-3.jpg` |
| 15 | Outsider lens | "The question to ask yourself is this…" + "If you didn't know this kid — would you stop scrolling?" Lives after the candid gallery to land the reframe. |
| 16 | Get close | Tighter than feels comfortable. Photo: `img/get-close.jpg` (sports huddle) |
| 17 | **Step away from the wall** | Tactics 03 · Background depth. Bad-example photo: kid against blank wall (`img/wall-bad.jpg`). Lesson: stepping subjects out of the wall adds depth and lets the background tell more of the story. |
| 18 | Shoot vertical | (almost) always — YouTube long-form is the exception |
| 19 | Lighting | content-2col · silhouette example (`img/lighting-bad.jpg`) |
| 20 | Audio | |
| 21 | Pair testimonial with b-roll | (Mug-shot-vs-conversation slide above it was removed in earlier revision) |
| 22 | Capture more than you need | Two-line statement: capture more / edit ruthlessly |
| 23 | After you capture — *"Make every second count."* | Sits right after Capture More so the capture/edit pair lands as a unit. Two moves: Cut the wind-up + One CTA per post. (Captions intentionally dropped — Al's A/B testing showed they don't move the needle.) |
| 24 | Thumb-stop test | "Would I stop scrolling for this?" |
| 25 | Recap card | 3 columns with big Anton numerals + distilled tag-lines (no bullet lists). Strategy / Tactics / Filters. Strategy column is now two questions (E/E/I + emotion-evoke) rather than three abstract pillars. |
| 26 | Homework | Capture 3 moments / save 3 thumb-stoppers / post one |
| 27 | Closing — *"These skills don't stay at the club."* | Q&A |

## Imagery in `img/`
- `cover-hero.jpg` — cinematic close-up (slide 1)
- `cooking.jpg` — kids in kitchen (slide 4)
- `club-group.jpg` — group of kids (slide 5)
- `posed.jpg` — staged staff group with logo wall (slide 22 weak-example anchor; was on slide 9 before reorder)
- `strong-example.jpg` — beaded-braids close-up. **Currently unused** — was on the old slide 9 example before it became the Hooks slide. Keep on disk in case the example slide returns.
- `avoid-backlit.jpg` — awkward backlit selfie (slide 22)
- `bgc-logo.png` — BGC Permian Basin lockup
- `anecdotal-logo.png` — Anecdotal horizontal mark (slide 3)
- `brands/*.svg/png` — 8 brand logos (Nike, Google, USOPC, Jaguars, Deadliest Catch, Sea Cadets, United Way, Texas Hearing Institute), grayscale-treated via CSS

## Key client context
- BGC Permian Basin is at or near capacity — kids aren't the bottleneck. **Awareness** is the goal.
- Three audience targets: parents (want to see what kids do here), donors (want to see transformations), wider community (still doesn't know what BGC really is)
- Co-presenter Al runs/has run social media for many brands
- BGC posts to its own channels — Anecdotal does NOT run their accounts. They're consultants advising.
- Audience: BGC staff who scroll social but rarely post — beginner-accessible

## Live polling (not in deck)
Between slides 1 and 2, presenter switches to Mentimeter for 5 warm-up polls:
1. Word cloud — "In one word, how do you feel about posting on social media?"
2. Multiple choice — "Which platform do you scroll the most?" (FB / IG / TikTok / YouTube / All — way too much)
3. Multiple choice — "How comfortable are you taking photos and video on your phone?" (4 options, scaled)
4. Multiple choice — "How about actually hitting 'post'?" (4 options, scaled)
5. Multiple choice — "When you think about posting for BGC, what's the biggest thing holding you back?" (5 options diagnostic)

Optional 6th: "When was the last time a social-media post made you stop mid-scroll?"

## How to ship a change
1. Edit `index.html` (or imagery in `img/`)
2. `node build-pdf.mjs` — rebuilds 26-page `proposal.pdf` (commit it)
3. `node build-og.mjs` — only if cover or OG content changed
4. Spot-check via Puppeteer screenshot helper (see git history for `check.mjs` patterns; use `[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}` style override to kill mid-flight reveals)
5. `git add -A && git commit -m "…"` — atomic commits per logical change
6. **Push:** `git push origin main` from interactive shell (Mac keychain has anecdotal-media creds), or `git -c credential.helper='!gh auth git-credential' push origin main` from non-TTY (gh must be active as anecdotal-media: `gh auth switch -u anecdotal-media`)
7. GitHub Pages deploys in 1–2 min

## Renumbering after slide moves
When inserting/removing/reordering slides, use the bottom-up Python script pattern documented in the training-deck skill. Don't try to renumber by hand — the script extracts slide blocks via regex (`<!-- N TITLE -->\n<section ... id="slide-N">…</section>`), reorders by old IDs, renumbers sequentially. Reference commits in git history for working scripts.

## Recent gotchas / load-bearing decisions
- **Statement-slide `<em>` treatment** on solid blue uses `color: var(--gold); font-weight: 700` — NOT `border-bottom` (wraps awkwardly across line breaks)
- **Anecdotal logo CSS** needs explicit `width: auto; max-width: 200px; object-fit: contain` to fight the global `img { max-width: 100% }` rule that warps aspect ratio
- **Venn labels** all sit INSIDE their respective circles. Callout sits outside on right in dark ink with a curved SVG arrow into the centroid (~310, 220 in viewBox 820×460). Gold inside the colored overlap is unreadable.
- **"Why this matters" headline** must stay short enough to wrap in 4 lines max alongside the 3 bullets + image, otherwise it cuts off. Current size: `clamp(34px, 4.2vw, 60px)` — slightly smaller than other content headlines.
- **Soft rules > hard rules** for beginner audiences. "Shoot vertical." not "Always shoot vertical. Always."
- **"We" framing > per-presenter** on the authority slide. The deck uses one consolidated voice rather than separate Ryan + Al intros.
- **Slide 9 (Hooks) iframe height** is capped at 460px so the slide fits inside a 900px viewport. Don't push it taller without reducing the headline/body intro.
- **Stepped reveals** use `[data-step]` + `data-step-order`. Cards stay hidden on slide entrance and reveal one per forward keypress; reset when the slide leaves view (replay-friendly). Used on slide 6 today.

## Outstanding considerations
- Slide 22 "What to avoid" currently has 4 dashed-text-only placeholder cards (super-wide / slow-start / far-away mic / dim room). User may want to swap these for actual stock images of bad examples.
- Live training session date TBD with BGC.
- Al's brand list / track record on slide 6 was dropped when slides 5+6 were consolidated — the current authority slide speaks for both presenters as "we." If a future revision wants per-presenter detail back, it'd need its own slide.

## Latest state
25 slides total. PDF: 25 pages. OG image: 1200×630.
