const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 800) {
    sidebar.classList.remove("show-sidebar");
  }
});

const products = document.querySelectorAll(".product");
const modals = document.querySelectorAll(".modal-overlay");

products.forEach(function (product) {
  let image = product.querySelector(".btn-img");
  image.addEventListener("click", function () {
    let itemName = product.dataset.name;
    modals.forEach(function (modal) {
      let modalName = modal.dataset.name;
      if (itemName === modalName) {
        modal.classList.add("show-modal");
      }
      closeBtn = modal.querySelector(".close-btn");
      closeBtn.addEventListener("click", function () {
        modal.classList.remove("show-modal");
      });
    });
  });
});
