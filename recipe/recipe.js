import recipes from './recipes.mjs';

// Random number function
function random(num) {
  return Math.floor(Math.random() * num);
}

// Pick random recipe
function getRandomListEntry(list) {
  return list[random(list.length)];
}

// TAGS template
function tagsTemplate(tags) {
  let html = "";
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

// RATING template
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

// MAIN RECIPE TEMPLATE
function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="Image of ${recipe.name}">
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2>${recipe.name}</h2>

        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>

        <p class="recipe__description">${recipe.description}</p>
      </figcaption>
    </figure>
  `;
}

// Render list of recipes
function renderRecipes(recipeList) {
  const output = document.getElementById("recipeOutput");
  output.innerHTML = recipeList.map(recipeTemplate).join("");
}

// Filter recipes
function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descMatch = recipe.description.toLowerCase().includes(query);

    const tagMatch = recipe.tags.find(tag =>
      tag.toLowerCase().includes(query)
    );

    const ingredientMatch = recipe.ingredients.find(item =>
      item.toLowerCase().includes(query)
    );

    return nameMatch || descMatch || tagMatch || ingredientMatch;
  });

  // sort alphabetically
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}

// Search Handler
function searchHandler(e) {
  e.preventDefault();

  const input = document.getElementById("searchInput");
  const query = input.value.toLowerCase();

  const results = filterRecipes(query);
  renderRecipes(results);
}

// Init on load
function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);

  document.getElementById("searchBtn")
    .addEventListener("click", searchHandler);
}

init();