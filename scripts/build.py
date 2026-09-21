"""Build the GitHub Pages artifact from an explicit public-file allowlist."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_site'
OUT.mkdir(exist_ok=True)
for name in ('index.html', 'styles.css', 'script.js', 'citation.bib', '.nojekyll'):
    shutil.copy2(ROOT / name, OUT / name)
for name in ('assets', 'pdf'):
    shutil.copytree(ROOT / name, OUT / name, dirs_exist_ok=True)
print(f'Static site ready: {OUT}')
