const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", function (event) {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${clickedImage.src.split('-')[0]}-full.jpeg" alt="${clickedImage.alt}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-viewer");

  modal.showModal();

  closeButton.addEventListener("click", () => {
    modal.close();
    modal.remove();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
      modal.remove();
    }
  });
});
