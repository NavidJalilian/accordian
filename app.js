const section = document.querySelector("section");
let previosTab = null;
section.addEventListener("click", function (e) {
  const cellText = document.getSelection();
  if (cellText.type === "Range") return;
  const article = e.target.closest("article");
  const tabIcon = article.querySelector(".tab>.accordion-icon");
  const content = article.querySelector(".acordian-content");

  if (previosTab) {
    previosTab.querySelector(".tab>.accordion-icon").classList.remove("rotate");
    previosTab.querySelector(".acordian-content").classList.remove("visible");
  } 
   previosTab = article;
   
  tabIcon.classList.toggle("rotate");
  content.classList.toggle("visible");
});
