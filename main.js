let card = document.getElementById("menu-items");

const menu = [
    {
        category: 'fastfood',
        name: 'Burger',
        image: 'burger.jpg'
    },
    {
        category: 'fastfood',
        name: 'Cheese Burger',
        image: 'cheeseburger.jfif'
    },
    {
        category: 'Lunch/dinner',
        name: 'Aloo Paratha',
        image: 'aalooparatha.webp'
    },
    {
        category: 'Drinks',
        name: 'Coffee',
        image: 'cofee.webp'
    },
    {
        category: 'Drinks',
        name: 'Cool Drinks',
        image: 'colddrink.jpg'
    },
    {
        category: 'Lunch/dinner',
        name: 'Dal',
        image: 'dal.avif'
    },
    {
        category: 'fastfood',
        name: 'Egg Omelette',
        image: 'eggomelate.webp'
    },
    {
        category: 'fastfood',
        name: 'French Fries',
        image: 'frenchfries.avif'
    },
    {
        category: 'Lunch/dinner',
        name: 'Fruit Salad',
        image: 'fruitsalad.avif'
    },
    {
        category: 'Lunch/dinner',
        name: 'Rice',
        image: 'rice.avif'
    },
    {
        category: 'Lunch/dinner',
        name: 'Roti',
        image: 'roti.avif'
    },
    {
        category: 'Drinks',
        name: 'Tea',
        image: 'tea.jpg'
    }
];

function displayMenu(data) {
    card.innerHTML = '';

    data.forEach(function(e) {
        let cardCol = document.createElement("div");
        cardCol.classList.add("menu-item");

        let foodImage = document.createElement("img");
        foodImage.src = e.image;
        foodImage.alt = e.name;
        cardCol.appendChild(foodImage);

        let foodName = document.createElement("h3");
        foodName.innerHTML = e.name;
        cardCol.appendChild(foodName);

        card.appendChild(cardCol);
    });
}

function filterCategory(category) {
    const filteredItems = menu.filter(function(e) {
        return e.category.toLowerCase() === category.toLowerCase();
    });
    displayMenu(filteredItems);
}

function displayAll() {
    displayMenu(menu);
}
displayAll();
