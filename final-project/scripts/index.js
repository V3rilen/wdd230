document.querySelector("#page-logo").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.querySelector("#order-count").textContent =
  "Orders: " + localStorage.getItem("order-count");
