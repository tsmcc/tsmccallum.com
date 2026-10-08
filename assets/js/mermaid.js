(() => {
  const root = document.documentElement;
  const diagrams = Array.from(document.querySelectorAll(".mermaid"), (element) => ({
    element,
    source: element.textContent,
  }));
  let isDark = root.classList.contains("dark");
  let ready = false;
  let rendering = false;
  let pending = false;

  function css(name) {
    const channels = getComputedStyle(root).getPropertyValue(name).match(/\d+(?:\.\d+)?/g);
    return "#" + channels.slice(0, 3).map(channel =>
      Math.round(Number(channel)).toString(16).padStart(2, "0")
    ).join("");
  }

  function configure() {
    const isDark = root.classList.contains("dark");
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    darkMode: isDark,
    background: isDark ? css("--color-neutral-800") : css("--color-neutral"),
    clusterBkg: isDark ? css("--color-neutral-700") : css("--color-neutral-100"),
    clusterBorder: isDark ? css("--color-neutral-500") : css("--color-neutral-300"),
    titleColor: isDark ? css("--color-neutral-200") : css("--color-neutral-700"),
    primaryTextColor: isDark ? css("--color-neutral-200") : css("--color-neutral-700"),
    primaryColor: isDark ? css("--color-primary-700") : css("--color-primary-200"),
    secondaryColor: isDark ? css("--color-secondary-700") : css("--color-secondary-200"),
    tertiaryColor: isDark ? css("--color-neutral-700") : css("--color-neutral-100"),
    primaryBorderColor: isDark ? css("--color-primary-500") : css("--color-primary-400"),
    secondaryBorderColor: css("--color-secondary-400"),
    tertiaryBorderColor: isDark ? css("--color-neutral-300") : css("--color-neutral-400"),
    lineColor: isDark ? css("--color-neutral-300") : css("--color-neutral-600"),
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
    fontSize: "16px",
    pieTitleTextSize: "19px",
    pieSectionTextSize: "16px",
    pieLegendTextSize: "16px",
    pieStrokeWidth: "1px",
    pieOuterStrokeWidth: "0.5px",
    pieStrokeColor: isDark ? css("--color-neutral-300") : css("--color-neutral-400"),
    pieOpacity: "1",
  },
});

  }

  async function renderDiagrams() {
    pending = true;
    if (!ready || rendering) return;
    rendering = true;
    try {
      // Serialize renders so rapid appearance changes cannot leave an old theme behind.
      while (pending) {
        pending = false;
        configure();
        for (const { element, source } of diagrams) {
          element.removeAttribute("data-processed");
          element.textContent = source;
        }
        await mermaid.run({ nodes: diagrams.map(({ element }) => element) });
      }
    } catch (error) {
      console.error("Unable to render Mermaid diagrams:", error);
    } finally {
      rendering = false;
    }
  }

  // Disable Mermaid's automatic render; preserve the source before SVG replaces it.
  configure();
  new MutationObserver(() => {
    const nextIsDark = root.classList.contains("dark");
    if (nextIsDark === isDark) return;
    isDark = nextIsDark;
    void renderDiagrams();
  }).observe(root, { attributes: true, attributeFilter: ["class"] });

  function start() {
    ready = true;
    void renderDiagrams();
  }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
})();
