// getting all of acordian-content divs
const tabs = [...document.querySelectorAll(".tab")];
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) =>
    e.target.nextElementSibling.classList.toggle("visible")
  );
});
