// Efeito de mudança no Header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = '#ffffff';
    } else {
        header.style.padding = '20px 0';
    }
});

// Smooth Scroll (Rolagem Suave) para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logica simples para Menu Mobile (opcional)
const menuToggle = document.getElementById('mobile-menu');
if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        alert('Menu Mobile ativado! (Aqui você pode expandir a lista de navegação)');
    });
}
