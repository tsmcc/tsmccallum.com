(() => {
  const fallbackCopy = (url) => {
    const textArea = document.createElement("textarea");
    textArea.value = url;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();
    if (!copied) throw new Error("Copy command failed");
  };

  document.querySelectorAll("[data-copy-link]").forEach((link) => {
    link.addEventListener("click", async (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();

      const container = link.closest("[data-copy-link-container]");
      const status = container?.querySelector("[data-copy-link-status]");
      const defaultLabel = link.dataset.copyDefaultLabel || "Copy link";
      const successMessage = link.dataset.copySuccessMessage || "Copied";

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(link.dataset.copyUrl);
        } else {
          fallbackCopy(link.dataset.copyUrl);
        }

        link.querySelector("[data-copy-link-icon]")?.classList.add("hidden");
        link.querySelector("[data-copy-link-success]")?.classList.remove("hidden");
        link.title = successMessage;
        link.setAttribute("aria-label", "Link copied");
        if (status) status.textContent = successMessage;

        window.setTimeout(() => {
          link.querySelector("[data-copy-link-icon]")?.classList.remove("hidden");
          link.querySelector("[data-copy-link-success]")?.classList.add("hidden");
          link.title = defaultLabel;
          link.setAttribute("aria-label", defaultLabel);
          if (status) status.textContent = "";
        }, 2000);
      } catch (_) {
        link.title = "Unable to copy link";
        link.setAttribute("aria-label", "Unable to copy link");
        if (status) status.textContent = "Unable to copy link";
      }
    });
  });
})();
