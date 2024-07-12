document.addEventListener('DOMContentLoaded', () => {
    const colors = ['yellow', 'pink', 'red', 'green', 'magenta', 'orange', 'cyan', 'blue'];
    const showItems = document.querySelectorAll('.show-item');

    showItems.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.color = color;
    });
});
