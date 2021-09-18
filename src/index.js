const $section = document.querySelectorAll("section");

window.addEventListener("resize", ({ target }) => {
  const width = target.innerWidth;

  if (width > 752) {
    $section.forEach((section) => (section.innerText = "큰 이미지"));
  } else {
    $section.forEach((section) => (section.innerText = "작은 이미지"));
  }
});
