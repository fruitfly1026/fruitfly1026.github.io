document.addEventListener("DOMContentLoaded", () => {
  const foldables = document.querySelectorAll(".foldable");
  foldables.forEach((el, index) => {
    if (index === 0 && el.dataset.defaultOpen === "true") {
      el.open = true;
    }
  });
});
