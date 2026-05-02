const APP_LINK_PLACEHOLDER = "[INSERT APP LINK]";

function initReveal() {
  const card = document.querySelector(".card");
  if (!card) return;

  if (!("IntersectionObserver" in window)) {
    card.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          card.classList.add("is-visible");
          observer.disconnect();
          break;
        }
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(card);
}

function initAppLink() {
  const appLink = document.querySelector("[data-app-link]");
  if (!appLink) return;

  const href = appLink.getAttribute("href") ?? "";
  const isPlaceholder = href.trim() === APP_LINK_PLACEHOLDER;

  if (!isPlaceholder) {
    appLink.setAttribute("target", "_blank");
    appLink.setAttribute("rel", "noreferrer");
    return;
  }

  appLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert("Project app link will be added soon.");
  });
}

initReveal();
initAppLink();
