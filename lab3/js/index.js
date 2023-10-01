import {
  renderItemsList,
  clearInputs,
  stones,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.querySelector(".slider.round");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");

let descendingSort = false;

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

sortSwitch.addEventListener("change", () => {
  descendingSort = sortSwitch.checked;
  const sortedStones = descendingSort
    ? sortStonesByPriceDescending(stones)
    : sortStonesByPriceAscending(stones);

  renderItemsList(sortedStones);
});

function sortStonesByPrice(stonesList) {
  return stonesList.slice().sort((a, b) => {
    if (ascendingSort) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}

countButton.addEventListener("click", () => {
  const total = calculateTotalPrice();
  totalPriceLabel.textContent = total + "$";
});

function calculateTotalPrice() {
  return stones.reduce((total, stone) => total + parseInt(stone.price), 0);
}






