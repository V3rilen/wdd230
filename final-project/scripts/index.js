const footer = document.querySelector("footer");
document.querySelector("#page-logo").addEventListener("click", () => {
  window.location.href = "./index.html";
});

const lastModifiedSpan = document.createElement("span");
lastModifiedSpan.textContent = "Last Modified: " + document.lastModified;
lastModifiedSpan.classList.add("last-modified");

footer.prepend(lastModifiedSpan);
