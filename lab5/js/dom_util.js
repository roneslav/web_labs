let initialItemBlocks = [];

export function toggleSort() {
    const itemsContainer = document.getElementById('items_container');
    const sortSwitch = document.getElementById('sort_switch');
    let itemBlocks = Array.from(itemsContainer.querySelectorAll('.item__block'));

    if (initialItemBlocks.length === 0) {
        initialItemBlocks = [...itemBlocks];
    }

    if (sortSwitch.checked) {
        itemBlocks.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.item__price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.item__price').textContent.replace('$', ''));
            return priceB - priceA;
        });
    } else {
        itemBlocks = [...initialItemBlocks];
    }

    itemsContainer.innerHTML = '';
    itemBlocks.forEach((item) => itemsContainer.appendChild(item));
}

export function searchItems() {
    const searchInput = document.getElementById('search_input').value.toLowerCase();
    const itemBlocks = Array.from(document.querySelectorAll('.item__block'));

    itemBlocks.forEach((item) => {
        const itemName = item.querySelector('.item__paragraph').textContent.toLowerCase();
        const itemDescription = item.querySelector('.item__description').textContent.toLowerCase();

        item.style.display = (itemName.includes(searchInput) || itemDescription.includes(searchInput)) ? 'block' : 'none';
    });
}

let isCountButtonClicked = false;

export function countTotalExpenses() {
    const searchInput = document.getElementById('search_input');
    const isSearching = searchInput.value.trim() !== '';

    const itemBlocks = Array.from(document.querySelectorAll('.item__block'));
    let totalExpenses = 0;

    itemBlocks.forEach((item) => {
        if (!isSearching || item.style.display !== 'none') {
            const price = parseFloat(item.querySelector('.item__price').textContent.replace('$', ''));
            totalExpenses += price;
        }
    });

    if (isCountButtonClicked) {
        const countResultLabel = document.getElementById('count_result_label');
        countResultLabel.textContent = `Total expenses: $${totalExpenses.toFixed(2)}`;
    }
}

export function setCountButtonClicked() {
    isCountButtonClicked = true;
}