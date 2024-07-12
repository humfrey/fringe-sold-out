document.addEventListener('DOMContentLoaded', () => {
    const colors = ['yellow', 'pink', 'red', 'green', 'magenta', 'orange', 'cyan', 'blue'];
    const showItems = document.querySelectorAll('.sold-out-shows .show-item');

    showItems.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.color = color;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});