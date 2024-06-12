/* script.js */

document.getElementById('search').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        let itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
