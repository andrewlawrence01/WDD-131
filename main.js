// main.js
// Dynamically generates blog article content from the articles array in blog.js

document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Get reference to the container where articles will go
  const articleList = document.querySelector("#articleList");

  // 2️⃣ Create a function that builds and outputs the HTML for all articles
  function displayArticles(articlesArray) {
    // Clear any existing content
    articleList.innerHTML = "";

    // 3️⃣ Loop through each article object in the array
    articlesArray.forEach((item) => {
      // Create a new <article> element
      const article = document.createElement("article");
      article.classList.add("post");

      // 4️⃣ Use a template literal for the article's HTML structure
      const articleHTML = `
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <div class="article-content">
          <h2>${item.title}</h2>
          <p class="meta">${item.date}</p>
          <p>${item.description}</p>
          <p><strong>Ages:</strong> ${item.ages}</p>
          <p><strong>Genre:</strong> ${item.genre}</p>
          <p><strong>Rating:</strong> ${item.stars}</p>
        </div>
      `;

      // 5️⃣ Add the HTML content to the article
      article.innerHTML = articleHTML;

      // 6️⃣ Append the new article to the main container
      articleList.appendChild(article);
    });
  }

  // 7️⃣ Call the function once the page loads
  displayArticles(articles);

  // 8️⃣ Bonus: Add filtering functionality
  const searchBar = document.querySelector("#searchBar");
  const genreFilter = document.querySelector("#genreFilter");

  function filterArticles() {
    const searchTerm = searchBar.value.toLowerCase();
    const selectedGenre = genreFilter.value;

    const filtered = articles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm);
      const matchesGenre =
        selectedGenre === "all" || article.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });

    displayArticles(filtered);
  }

  searchBar.addEventListener("input", filterArticles);
  genreFilter.addEventListener("change", filterArticles);
});