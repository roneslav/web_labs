export const stones = [
  {
    title: "Diamond",
    description: "It is a beautiful jewelry stone",
    price: "1000",
  },
  {
    title: "Rubin",
    description: "It is a beautiful jewelry stone",
    price: "800",

  },
  {
    title: "Smaragd",
    description: "It is a beautiful jewelry stone",
    price: "900",
  },
];

export const renderItemsList = (stones) => {
  const itemsContainer = document.getElementById("items_container");
  itemsContainer.innerHTML = "";

  stones.forEach((stone) => {
    addItemToPage(stone);
  });
};

export const clearInputs = () => {
  const searchInput = document.getElementById("search_input");
  searchInput.value = "";
};

export const addItemToPage = (stone) => {
  const listItem = document.createElement("li");
  listItem.classList.add("first_stone", "col-md-2.5", "mt-2");
  listItem.innerHTML = `
    <div class="first_stone_item">
      <img class="first_stone_photo ml-1 mt-1" src="img/${stone.title}.jpg" height="130" width="185" alt="${stone.title}">
      <h5 class="stone_title">${stone.title} </h5>
      <div class="stone_description">${stone.description} </div>
      <div class="stone_price ml-2 mt-2">${stone.price} $</div>
      <div class="edit-remove-buttons mt-3">
        <input class="edit-button" type="button" value="Edit"> <input class="remove-button" type="button" value="Remove">
      </div>
    </div>
  `;
  const itemsContainer = document.getElementById("items_container");
  itemsContainer.appendChild(listItem);
};