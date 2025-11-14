import { recipes } from "./recipes.mjs";

const recipeSection = document.querySelector("#recipes");
const form = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");

function displayRecipes(list) {
  recipeSection.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>

      <span class="rating" role="img" aria-label="Rating: ${item.rating} out of 5 stars">
        ${renderStars(item.rating)}
      </span>

      <p class="description">${item.description}</p>
    `;

    recipeSection.appendChild(card);
  });
}

function renderStars(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
  }
  for (let i = rating; i < 5; i++) {
    stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  return stars;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.toLowerCase().trim();

  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(searchValue)
  );

  displayRecipes(filtered);
});

// Initial load
displayRecipes(recipes);