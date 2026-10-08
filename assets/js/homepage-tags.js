(() => {
  const rows = document.querySelectorAll('.article-list-card .article-taxonomies');
  const fit = (row) => {
    const links = [...row.querySelectorAll('a')];
    links.forEach(link => { link.hidden = false; });
    const edge = row.getBoundingClientRect().right;
    let overflow = false;
    links.forEach(link => {
      const margin = parseFloat(getComputedStyle(link).marginRight) || 0;
      overflow = overflow || link.getBoundingClientRect().right + margin > edge;
      link.hidden = overflow;
    });
  };
  const observer = new ResizeObserver(entries => entries.forEach(entry => fit(entry.target)));
  rows.forEach(row => { fit(row); observer.observe(row); });
  document.fonts.ready.then(() => rows.forEach(fit));
})();
