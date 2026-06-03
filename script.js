document.addEventListener("DOMContentLoaded", () => {
    // Inicializa os recursos visuais dinâmicos
    configurarAnimacaoCards();
    configurarBotaoTopo();
});

/**
 * Faz os cards surgirem suavemente na tela conforme o usuário rola a página
 */
function configurarAnimacaoCards() {
    const cards = document.querySelectorAll('.card');
    
    // Adiciona a transição de CSS via JavaScript para evitar atrasos
    cards.forEach(card => {
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease';
    });

    const conferirScroll = () => {
        cards.forEach(card => {
            const posicaoCard = card.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.85; // Ativa quando o card atinge 85% da tela

            if (posicaoCard < alturaTela) {
                card.classList.add('visivel');
            }
        });
    };

    // Executa uma vez ao carregar e monitora o movimento do scroll
    conferirScroll();
    window.addEventListener('scroll', conferirScroll);
}

/**
 * Cria e gerencia o botão dinâmico de "Voltar ao Topo"
 */
function configurarBotaoTopo() {
    const botao = document.createElement('button');
    botao.innerHTML = '🌱'; // Ícone ecológico que combina com a página
    botao.title = 'Voltar ao topo';
    
    // Estilização direta para manter o arquivo CSS limpo e isolado
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
        fontSize: '22px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        zIndex: '1000',
        transition: 'background-color 0.3s, transform 0.2s'
    });

    // Efeitos visuais ao passar o mouse
    botao.addEventListener('mouseover', () => botao.style.backgroundColor = '#1b5e20');
    botao.addEventListener('mouseout', () => botao.style.backgroundColor = '#2e7d32');

    document.body.appendChild(botao);

    // Monitora a rolagem para exibir ou ocultar o botão
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botao.style.display = 'block';
        } else {
            botao.style.display = 'none';
        }
    });

    // Retorna suavemente ao topo ao ser clicado
    botao.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
