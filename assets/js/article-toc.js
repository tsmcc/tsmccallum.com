(() => {
  const scrollToc = document.querySelector("[data-scroll-toc]");
  if (!scrollToc) return;

  const updateTocVisibility = () => {
    scrollToc.classList.toggle("toc--visible", window.scrollY > 0);
  };

  window.addEventListener("scroll", updateTocVisibility, { passive: true });
  updateTocVisibility();
})();
