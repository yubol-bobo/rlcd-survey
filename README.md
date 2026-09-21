# Calibration-Aware RL for Large Language Models

Project website for **Calibration-Aware Reinforcement Learning for Large Language Models: A Survey of Objectives, Optimization, and Decision-Making**.

**Yubo Li, Yidi Miao, Ramayya Krishnan, and Rema Padman**  
Carnegie Mellon University · 21 September 2026

- [Project website](https://yubol-bobo.github.io/rlcd-survey/)
- [Read the manuscript](pdf/calibration-aware-rl-survey.pdf)
- [BibTeX](citation.bib)

The single-page site presents the organizing framework, eight representative learning families from Table 2, and Figures 2 and 6. The manuscript contains the full comparison and appendices. The decision example is an exact analytic construction, not an LLM experiment. Literature snapshot: 20 September 2026.

## Website files

The site uses plain HTML, CSS, and a small JavaScript file. It has no runtime dependencies, analytics, or external font requests.

| Path | Purpose |
| --- | --- |
| `index.html` | English project page and method comparison |
| `styles.css` | Responsive page styling |
| `script.js` | Citation copy and navigation state |
| `assets/` | Figures, favicon, and bundled font with its license |
| `pdf/calibration-aware-rl-survey.pdf` | Complete manuscript, including references and appendices |
| `citation.bib` | Downloadable citation |
| `scripts/build.py` | Copies an explicit public-file allowlist to `_site/` |
| `.github/workflows/pages.yml` | GitHub Pages deployment on pushes to `main` |

## Preview locally

With Python 3 installed:

```sh
python scripts/build.py
python -m http.server 8000 --directory _site
```

Open `http://localhost:8000/`. The site also works under the GitHub Pages project path `/rlcd-survey/`; local assets use relative URLs.

## Publish and update

In repository **Settings → Pages**, select **GitHub Actions** as the source. A push to `main` runs the included deployment workflow. It publishes only the allowlisted site files, figures, font license, citation, and paper.

To update the manuscript, replace `pdf/calibration-aware-rl-survey.pdf` and update the visible date, page count, citation, and section/page links in `index.html` as needed. Keep `citation.bib` and the on-page BibTeX synchronized. The website summaries are curated from Table 2; preserve the distinction between probability targets, ranking, and action likelihoods when editing them.

Deployment follows [GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Paper and figure rights remain with their authors. The bundled Caladea font is distributed under its included Apache 2.0 license.
