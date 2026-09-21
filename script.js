const copyButton = document.querySelector('#copy-citation');
const status = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#citation-text').textContent.trim();
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    status.textContent = 'Citation copied';
    copyButton.firstChild.textContent = 'Copied ';
    window.setTimeout(() => { copyButton.firstChild.textContent = 'Copy BibTeX '; }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#citation-text'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Text selected — copy or download .bib';
  }
});
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  sections.forEach(section => observer.observe(section));
}
