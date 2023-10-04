import {
  renderItemsList,
  clearInputs,
  stones, addItemToPage,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");
const addElement = document.getElementsByClassName("items_container");

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

function calculateTotalPrice() {
  const displayedStones = document.querySelectorAll(".first_stone");
  let total = 0;
  displayedStones.forEach((stone) => {
    const stonePriceElement = stone.querySelector(".stone_price");
    if (stonePriceElement) {
      const stonePriceText = stonePriceElement.textContent.trim();
      const stonePrice = parseFloat(stonePriceText.replace("$", ""));
      if (!isNaN(stonePrice)) {
        total += stonePrice;
      }
    }
  });
  return total;
}

countButton.addEventListener("click", () => {
  const total = calculateTotalPrice();
  totalPriceLabel.textContent = total + "$";
});

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

window.addEventListener("DOMContentLoaded", () => {
  renderItemsList(stones);

});


