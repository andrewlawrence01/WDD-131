// ===============================
// Redwing Enterprises - main.js
// Dynamic Elements, Arrays, Objects, DOM Interaction
// ===============================

// FEATURED VIDEO DATA
const videos = {
  intro: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
  latest: "https://www.youtube.com/embed/ysz5S6PUM-U", // placeholder
  popular: "https://www.youtube.com/embed/aqz-KE-bpKQ"  // placeholder
};

// FUNCTION: Load a featured video
function loadVideo(type) {
  const container = document.getElementById("featured-video-container");

  if (!videos[type]) {
    container.innerHTML = `<p>Video not found.</p>`;
    return;
  }

  container.innerHTML = `
    <iframe width="100%" height="100%" 
      src="${videos[type]}" 
      title="Featured Video"
      allowfullscreen></iframe>
  `;
}

// EVENT LISTENERS for Buttons
const videoButtons = document.querySelectorAll(".video-buttons button");
videoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.video;
    loadVideo(type);
  });
});

// Load default video
loadVideo("intro");

// ===============================
// MERCH STORE DYNAMIC DATA
// ===============================

const merchItems = [
  {
    id: 1,
    name: "Redwing Logo Tee",
    price: 20,
    img: "images/tee1.jpg",
    category: "shirts"
  },
  {
    id: 2,
    name: "Redwing Hoodie",
    price: 40,
    img: "images/hoodie1.jpg",
    category: "hoodies"
  },
  {
    id: 3,
    name: "Redwing Mug",
    price: 12,
    img: "images/mug1.jpg",
    category: "accessories"
  },
  {
    id: 4,
    name: "Redwing Cap",
    price: 18,
    img: "images/cap1.jpg",
    category: "accessories"
  }
];

// FUNCTION: Render limited merch preview
function renderMerchPreview() {
  const grid = document.getElementById("merch-grid");

  const previewItems = merchItems.slice(0, 3); // first 3 items only

  grid.innerHTML = previewItems
    .map(item => `
      <div class="merch-item">
        <img src="${item.img}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `)
    .join("");
}

renderMerchPreview();

// ===============================
// UTILITY FUNCTIONS EXAMPLES
// ===============================

// Example: Calculate average price using reduce
function calculateAveragePrice() {
  const total = merchItems.reduce((sum, item) => sum + item.price, 0);
  return (total / merchItems.length).toFixed(2);
}

// Example: Filter accessories
function getAccessories() {
  return merchItems.filter(item => item.category === "accessories");
}

console.log("Average price:", calculateAveragePrice());
console.log("Accessories:", getAccessories());