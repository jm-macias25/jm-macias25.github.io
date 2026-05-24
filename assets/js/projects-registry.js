/**
 * PROJECTS REGISTRY
 * ─────────────────────────────────────────────────────────────────
 * This is the only file you need to edit to add a new project.
 * Each object is one "lego block" — drop it in and the portfolio
 * renders the card automatically. No HTML changes needed.
 *
 * Fields
 * ──────
 *   id          — kebab-case slug, unique per project
 *   title       — headline shown on the card
 *   subtitle    — category / domain label (e.g. "NFL · Sports Analytics")
 *   description — 2-3 sentence summary of what the project does
 *   tags        — array of tools / languages used
 *   accent      — CSS colour for the card's top border (brand colour of the topic)
 *   reportUrl   — URL to the live report/notebook; set null if not yet published
 *   githubUrl   — GitHub repo URL; set null if the repo is private
 *
 * Example: add a new project
 * ──────────────────────────
 *   {
 *     id:          "my-new-project",
 *     title:       "Project Title",
 *     subtitle:    "Domain · Analysis Type",
 *     description: "What you did and why it's interesting.",
 *     tags:        ["Python", "SQL", "Tableau"],
 *     accent:      "#1a7f64",
 *     reportUrl:   "https://jm-macias25.github.io/my-new-project",
 *     githubUrl:   "https://github.com/jm-macias25/my-new-project",
 *   },
 */

const PROJECTS_REGISTRY = [

  {
    id:          "broncos",
    title:       "Fourth Quarter, Third and Long",
    subtitle:    "NFL · Sports Analytics",
    description:
      "A forensic look at the Denver Broncos' lost decade (2015–2024): " +
      "QB carousel analysis, draft-efficiency scoring, EPA modelling, and a " +
      "2025 win-projection for Bo Nix using full play-by-play data.",
    tags:       ["Python", "nfl_data_py", "Plotly", "scikit-learn"],
    accent:     "#e05a00",
    reportUrl:  null,   // set to live URL when report is published
    githubUrl:  null,
  },

  {
    id:          "world-cup",
    title:       "134 Years of Goals",
    subtitle:    "Soccer · Historical Analysis",
    description:
      "Goals-per-decade trends, host-nation advantage, upset rates, " +
      "and a composite dominance index ranking every World Cup nation " +
      "across 134 years of tournament history.",
    tags:       ["Python", "pandas", "Plotly", "scipy"],
    accent:     "#238636",
    reportUrl:  null,
    githubUrl:  null,
  },

  {
    id:          "rock-music",
    title:       "The Anatomy of a Hit",
    subtitle:    "Music · Machine Learning",
    description:
      "50+ years of rock via Spotify audio features: subgenre fingerprints, " +
      "the loudness war quantified, K-Means clustering of sonic eras, " +
      "and a logistic regression that predicts chart success.",
    tags:       ["Python", "scikit-learn", "Plotly", "K-Means"],
    accent:     "#8957e5",
    reportUrl:  null,
    githubUrl:  null,
  },

  // ── ADD NEW PROJECTS BELOW THIS LINE ─────────────────────────────

];
