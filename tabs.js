
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab]");
  const contents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      tab.classList.add("active");

      const selected = document.querySelector(
        `[data-tab-content="${target}"]`
      );

      if (selected) selected.classList.add("active");
    });
  });
});
