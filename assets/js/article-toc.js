(() => {
  const scrollToc = document.querySelector("[data-scroll-toc]");
  if (!scrollToc) return;

  const tocLinks = Array.from(
    scrollToc.querySelectorAll('#TableOfContents a[href^="#"]'),
  );
  const sections = tocLinks
    .map((link) => {
      const id = decodeURIComponent(link.hash.slice(1));
      const heading = document.getElementById(id);
      return heading ? { heading, link } : null;
    })
    .filter(Boolean);

  let activeLink = null;
  let updateQueued = false;

  const setActiveLink = (link) => {
    if (link === activeLink) return;

    if (activeLink) {
      activeLink.removeAttribute("aria-current");
    }
    if (link) {
      link.setAttribute("aria-current", "location");
    }

    activeLink = link;
  };

  const updateToc = () => {
    updateQueued = false;
    scrollToc.classList.toggle("toc--visible", window.scrollY > 0);

    if (!sections.length) return;

    const readingThreshold = Math.min(160, window.innerHeight * 0.25);
    const pageBottom = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    let current = null;

    for (const section of sections) {
      if (section.heading.getBoundingClientRect().top <= readingThreshold) {
        current = section.link;
      } else {
        break;
      }
    }

    // The final heading may never reach the reading threshold on short endings.
    // Select it as the reader reaches the end of the page instead of leaving the
    // preceding section highlighted.
    if (documentHeight - pageBottom <= 24) {
      current = sections[sections.length - 1].link;
    }

    setActiveLink(current);
  };

  const queueUpdate = () => {
    if (updateQueued) return;
    updateQueued = true;
    window.requestAnimationFrame(updateToc);
  };

  window.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", queueUpdate, { passive: true });
  updateToc();
})();
