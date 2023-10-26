function getImageFileName(title) {
    const titleImageMap = {
        "Diamond": "diamond.jpg",
        "Rubin": "rubin.jpg",
        "Smaragd": "smaragd.jpg",
        "Stone": "stone.jpg"
    };
    return titleImageMap[title] || "";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        errorMessage.textContent = "";

        if (!title || !description || !price) {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        const imageFileName = title.replace(/\s+/g, '').toLowerCase();

        const newItemData = {
            imageSrc: `/img/${getImageFileName(title)}`,
            title: title,
            description: description,
            price: price
        };

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItemData),
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = 'http://127.0.0.1:3000/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});