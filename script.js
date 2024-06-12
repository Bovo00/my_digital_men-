// script.js

document.getElementById('primi-btn').addEventListener('click', function() {
    displayMenuSection('Primi Piatti');
});

document.getElementById('secondi-btn').addEventListener('click', function() {
    displayMenuSection('Secondi Piatti');
});

document.getElementById('pizze-btn').addEventListener('click', function() {
    displayMenuSection('Pizze');
});

document.getElementById('dolci-btn').addEventListener('click', function() {
    displayMenuSection('Dolci');
});

document.getElementById('bar-btn').addEventListener('click', function() {
    displayMenuSection('Bar');
});

function displayMenuSection(sectionName) {
    // Simulazione di aggiunta dinamica dei contenuti del menu
    var menuContent = document.getElementById('menu-content');
    menuContent.innerHTML = '';

    var section = document.createElement('section');
    section.className = 'menu-section';

    var title = document.createElement('h2');
    title.textContent = sectionName;
    section.appendChild(title);

    // Simulazione di aggiunta di piatti
    for (var i = 1; i <= 5; i++) {
        var menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        var itemName = document.createElement('h3');
        itemName.textContent = sectionName + ' ' + i;
        menuItem.appendChild(itemName);

        var itemImage = document.createElement('img');
        itemImage.src = 'images/' + sectionName.toLowerCase() + i + '.jpg'; // Esempio per immagini
        itemImage.alt = itemName.textContent;
        itemImage.loading = 'lazy';
        menuItem.appendChild(itemImage);

        var itemDescription = document.createElement('p');
        itemDescription.textContent = 'Descrizione del piatto ' + sectionName.toLowerCase() + i;
        menuItem.appendChild(itemDescription);

        var itemPrice = document.createElement('p');
        itemPrice.className = 'price';
        itemPrice.textContent = 'Prezzo: €' + (i * 2).toFixed(2); // Esempio per prezzo
        menuItem.appendChild(itemPrice);

        section.appendChild(menuItem);
    }

    menuContent.appendChild(section);
}
