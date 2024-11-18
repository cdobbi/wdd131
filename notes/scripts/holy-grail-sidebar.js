document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const button = document.createElement('button');
    button.textContent = 'Change Background';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        main.style.backgroundColor = main.style.backgroundColor === 'lightblue' ? '#eee' : 'lightblue';
    });
});
