import {
  renderItemsList,
  clearInputs,
  stones,
  addItemToPage,
} from "./dom_util.js"

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
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
  const displayedStones = document.querySelectorAll(".first_stone");

  const displayedStonesData = Array.from(displayedStones).map((stoneElement) => {
    const stoneTitle = stoneElement.querySelector(".stone_title")?.textContent.trim();
    const stoneDescription = stoneElement.querySelector(".stone_description")?.textContent.trim();
    const stonePriceElement = stoneElement.querySelector(".stone_price");
    const stonePriceText = stonePriceElement ? stonePriceElement.textContent.trim() : "0";
    const stonePrice = parseFloat(stonePriceText.replace("$", ""));

    return {
      title: stoneTitle || "",
      description: stoneDescription || "",
      price: stonePrice || 0,
    };
  });

  const sortedStones = displayedStonesData.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
  renderItemsList(sortedStones);
});

window.addEventListener("DOMContentLoaded", () => {
  renderItemsList(stones);
});

const submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click", () => {
  // Отримайте значення з полів вводу
  const titleInput = document.getElementById("stone-select");
  const descriptionInput = document.getElementById("description_input");
  const expensesInput = document.getElementById("expenses_input");

  const title = titleInput.value;
  const description = descriptionInput.value;
  const price = expensesInput.value;

  // Перевірка на заповненість всіх полів
  if (title && description && price) {
    // Створення нового об'єкта для нового каменя
    const newStone = {
      title,
      description,
      price,
    };

    // Додавання нового каменя до масиву stones
    stones.push(newStone);

    // Оновлення відображення списку каменів на сторінці "My Stones"
    renderItemsList(stones);

    // Очистка полів вводу
    titleInput.value = "";
    descriptionInput.value = "";
    expensesInput.value = "";

    // Тут ви також можете виконати збереження даних на сервері або в локальному сховищі.

  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// Виклик функції для початкового відображення списку каменів
renderItemsList(stones);
