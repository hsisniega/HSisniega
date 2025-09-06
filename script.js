const container = document.querySelector('.container');
container.addEventListener('click', () => {
    container.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    setTimeout(() => {
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    }, 300);
});