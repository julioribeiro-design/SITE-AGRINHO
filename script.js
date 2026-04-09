// Alterar estilo do cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.height = '60px';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.height = '80px';
        header.style.boxShadow = 'none';
    }
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mensagem de boas-vindas no console (Debug/Interação)
console.log("AgroForte: Equilíbrio e Sustentabilidade carregados com sucesso.");
