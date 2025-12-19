function toggleMenu() {
    const nav = document.querySelector('.nav-center');
    nav.classList.toggle('active');
}

document.querySelectorAll('.nav-center ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-center');
        nav.classList.remove('active');
    });
});
