# chandraramanujan.com

Chandra Ramanujan's portfolio. Hand-built static HTML and CSS — no JavaScript,
no framework, no build step, no tracking. Just files. Set in Geist.

## Run it

Open `index.html` in a browser, or serve the folder root with any static
server (e.g. `npx serve .`). There is nothing to build.

## Structure

```
├── index.html                        home: thesis + work index
├── work.html                         case studies, ordered by strength
├── wayground-content-moderation.html ┐
├── wayground-game-settings.html      │
├── gojek-masthead-ads.html           │ six case studies
├── gojek-banner-ctr.html             │
├── wayground-usage-analytics.html    │
├── gojek-ads-design-system.html      ┘
├── gojek-consumer-ads.html           stub (old combined URL, kept alive)
├── wayground-enterprise.html         stub (old combined URL, kept alive)
├── fortnite-vs-fortnight.html        ┐
├── the-ratings-we-didnt-show.html    │
├── the-deliberately-annoying-toggle.html │ five essays
├── copy-paste-beats-csv.html         │
├── very-smooth-very-powerful.html    ┘
├── writing.html                      essays + articles/talks/podcasts/policy
├── in-the-news.html                  press
├── side-projects.html
├── about.html                        the arc + how I work (Person JSON-LD)
├── case-study-sample.html            template
├── 404.html                          not-found page (absolute asset paths)
├── llms.txt                          hand-curated index for agents
├── robots.txt · sitemap.xml · rss.xml   generated — see tools/
├── style.css                         the entire design system, one file
├── images/                           all media, self-contained
│   └── og/                           social cards, generated — see tools/
├── tools/                            generators + check.sh (start at its README)
└── docs/
    ├── AGENT-GUIDE.md                start here: working patterns, gotchas, ideas backlog
    ├── design.md                     the design system rules
    ├── DECISIONS.md                  why things are the way they are
    ├── TODO.md                       open items (deploy is #1)
    ├── CHANGELOG.md                  full history, by round
    ├── CHAT-LOG.md                   the original design conversation (2026-07-02)
    ├── CHAT-LOG-2026-07-04-to-09.md  the second push: content, essays, About, splits, the move
    └── drafts/                       essay + positioning drafts (shipped)
```

## Working on this site

Read `docs/AGENT-GUIDE.md` first, then `docs/design.md` — the rules are few
but strict (zero JS, grayscale, one-line figcaptions, first-person voice, no
invented facts). `docs/DECISIONS.md` has the reasoning; argue with that, not
the HTML. After any change, run `bash tools/check.sh`.
