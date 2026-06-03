/* ==========================================================================
   Agrinho 2026 - Scripts de Interatividade
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Executa as funções assim que a página carrega
    animarCardsAoRolar();
    criarBotaoVoltarAoTopo();
});

/**
 * 1. Animação de Surgimento (Fade-in)
 * Faz os cards dos pilares surgirem suavemente conforme o usuário rola a página.
 */
function animarCardsAoRolar() {
    const cards = document.querySelectorAll('.card');
    
    const configuracao = {
        threshold: 0.15, // Porcentagem do card visível para ativar a animação
        rootMargin: "0px 0px -50px 0px"
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Adiciona o efeito visual
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                observador.unobserve(entrada.target); // Para de observar após animar
            }
        });
    }, configuracao);

    cards.forEach(card => {
        // Estado inicial de cada card antes da animação
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        observador.observe(card);
    });
}

/**
 * 2. Botão Voltar ao Topo (Smooth Scroll)
 * Cria dinamicamente um botão discreto que aparece após rolar a página para baixo.
 */
function criarBotaoVoltarAoTopo() {
    // Cria o elemento do botão
    const botao = document.createElement('button');
    botao.innerHTML = '⬆️';
    botao.title = 'Voltar ao topo';
    
    // Estilização rápida via JS para não precisar mexer no CSS antigo
    Object.assign(botao.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'none',
        backgroundColor: '#2e7d32',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '20px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: '1000',
        transition: 'background-color 0.3s'
    });

    // Efeito hover no botão
    botao.addEventListener('mouseover', () => botao.style.backgroundColor = '#1b5e20');
    botao.addEventListener('mouseout', () => botao.style.backgroundColor = '#2e7d32');

    document.body.appendChild(botao);

    // Mostra/esconde o botão dependendo do scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            botao.style.display = 'block';
        } else {
            botao.style.display = 'none';
        }
    });

    // Ação de clique para subir suavemente
    botao.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
