(() => {
  const rows = document.querySelectorAll('.article-list-card .article-taxonomies');
  const fit = (row) => {
    const links = [...row.querySelectorAll('a')];
    links.forEach(link => { link.hidden = false; });
    const available = row.clientWidth;
    const widths = links.map(link => {
      const style = getComputedStyle(link);
      return link.getBoundingClientRect().width
        + (parseFloat(style.marginLeft) || 0)
        + (parseFloat(style.marginRight) || 0);
    });
    let used = 0;
    links.forEach((link, index) => {
      const fits = used + widths[index] <= available;
      link.hidden = !fits;
      if (fits) used += widths[index];
    });
  };
  const observer = new ResizeObserver(entries => entries.forEach(entry => fit(entry.target)));
  rows.forEach(row => { fit(row); observer.observe(row); });
  window.addEventListener('resize', () => rows.forEach(fit));
  document.fonts.ready.then(() => rows.forEach(fit));
})();
