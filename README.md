# Calibration-Aware RL for Large Language Models

Project website for **Calibration-Aware Reinforcement Learning for Large Language Models: A Survey of Objectives, Optimization, and Decision-Making**.

**Yubo Li, Yidi Miao, Ramayya Krishnan, and Rema Padman**  
Carnegie Mellon University · 21 September 2026

- [Project website](https://yubol-bobo.github.io/rlcd-survey/)
- [Full abstract and paper details](https://yubol-bobo.github.io/rlcd-survey/paper.html)
- [Read the manuscript on CMU KiltHub](https://kilthub.cmu.edu/articles/preprint/Calibration-Aware_Reinforcement_Learning_for_Large_Language_Models_A_Survey_of_Objectives_Optimization_and_Decision-Making/33989641?file=69317431)
- [Original high-resolution PDF](pdf/calibration-aware-rl-survey-original.pdf)
- [BibTeX](citation.bib)

The project page presents the organizing framework, eight representative learning families from Table 2, and Figures 2 and 6. A compact article landing page exposes the full author-written abstract and bibliographic metadata without JavaScript or expandable panels. The manuscript contains the full comparison and appendices. The decision example is an exact analytic construction, not an LLM experiment. Literature snapshot: 20 September 2026.

## Website files

The site uses plain HTML, CSS, and a small JavaScript file. It has no runtime dependencies, analytics, or external font requests.

| Path | Purpose |
| --- | --- |
| `index.html` | English project page and method comparison |
| `paper.html` | Full abstract, bibliographic metadata, and KiltHub reading link |
| `styles.css` | Responsive page styling |
| `paper.css` | Compact article-page styling |
| `script.js` | Citation copy and navigation state |
| `assets/` | Figures, favicon, and bundled font with its license |
| `pdf/calibration-aware-rl-survey.pdf` | Complete searchable web PDF, below 5 MB, with references and appendices |
| `pdf/calibration-aware-rl-survey-original.pdf` | Preserved high-resolution original of the same manuscript |
| `sitemap.xml` | Project page, article landing page, and primary PDF URLs |
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

To update the manuscript, preserve its high-resolution original and prepare a searchable web PDF below 5,000,000 bytes. Retain the PDF's text and links; do not rasterize pages. Update the full abstract, date, page count, citation metadata and structured data in `paper.html`, together with the visible date, page count, citation, and manuscript links in `index.html`. Keep the KiltHub reading links synchronized across both pages and this README. Keep `citation.bib` and the on-page BibTeX synchronized. Update sitemap `lastmod` dates only when the corresponding resources change. The website summaries are curated from Table 2; preserve the distinction between probability targets, ranking, and action likelihoods when editing them.

## Search discovery

Visible manuscript links open the CMU KiltHub preprint file page. The article landing page supplies Highwire `citation_*` tags, a same-site absolute `citation_pdf_url`, and a visible full abstract. Machine-readable PDF metadata and the sitemap retain the actual searchable local PDF mirror; the KiltHub HTML preview URL is not labeled as a direct PDF. The primary PDF is below Google Scholar's documented 5 MB file limit. These changes improve eligibility for crawling and parsing; they do not guarantee indexing or a particular search ranking.

In Google Search Console, verify the URL-prefix property `https://yubol-bobo.github.io/rlcd-survey/` (or use an already verified parent property). The HTML meta-tag verification method can be added to `index.html` once the owner obtains their token. No verification token is fabricated or bundled. Then submit `https://yubol-bobo.github.io/rlcd-survey/sitemap.xml` and inspect/request indexing for the project and article pages and the PDF.

The effective robots file is at `https://yubol-bobo.github.io/robots.txt`; a `robots.txt` placed inside this project subdirectory would not control crawler access. The parent site currently permits crawling. Its root sitemap can additionally link this project's URLs or sitemap. If HTML-file verification is used instead of a meta tag, add the exact Google-provided filename to the explicit build allowlist so it is actually deployed.

References: [Google Scholar inclusion guidelines](https://scholar.google.com/intl/en/scholar/inclusion.html), [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

Deployment follows [GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Paper and figure rights remain with their authors. The bundled Caladea font is distributed under its included Apache 2.0 license.
