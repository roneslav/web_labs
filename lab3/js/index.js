import {
  renderItemsList,
  clearInputs,
  stones,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");

let descendingSort = false;
let currentStones = stones.slice();

searchButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase();
  const foundStones = stones.filter((stone) => {
    const stoneTitle = stone.title.toLowerCase();
    return stoneTitle.includes(searchTerm);
  });
  const sortedStones = sortSwitch.checked
    ? sortStonesByPrice(foundStones)
    : foundStones;

  renderItemsList(sortedStones);
});

clearButton.addEventListener("click", () => {
  clearInputs();
  renderItemsList(stones);
});

countButton.addEventListener("click", () => {
  const total = calculateTotalPrice();
  totalPriceLabel.textContent = total + "$";
});

function calculateTotalPrice() {
  return stones.reduce((total, stone) => total + parseInt(stone.price), 0);
}

sortSwitch.addEventListener("change", () => {
  descendingSort = sortSwitch.checked;
  const sortedStones = sortStonesByPrice(currentStones);
  renderItemsList(sortedStones);
});

function sortStonesByPrice(stones) {
  return stones.slice().sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
}
