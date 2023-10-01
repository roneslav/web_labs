import {
  renderItemsList,
  clearInputs,
  stones,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.querySelector(".slider.round");

let ascendingSort = true;

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
  ascendingSort = !sortSwitch.checked;
  const sortedStones = sortSwitch.checked
    ? sortStonesByPrice(stones)
    : stones;

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






