Para deixar a sua página do Agrinho 2026 no GitHub Pages bonita, moderna e com a cara da sustentabilidade, criei um arquivo style.css.

Esse código usa cores que remetem à natureza (tons de verde e terra) e uma tipografia limpa, garantindo que o site fique organizado e leve para ler.

Aqui está o código pronto para você copiar e colar no seu arquivo:

CSS
/* ==========================================================================
   Configurações Gerais (Reset e Fontes)
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    background-color: #f4f7f4;
}

/* ==========================================================================
   Cabeçalho (Header)
   ========================================================================== */
header {
    background: linear-gradient(rgba(46, 125, 50, 0.85), rgba(27, 94, 32, 0.9)), url('caminho-da-sua-imagem.jpg') no-repeat center center/cover;
    color: #ffffff;
    text-align: center;
    padding: 80px 20px;
}

header h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1px;
}

header p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
}

/* ==========================================================================
   Container Principal e Seções
   ========================================================================== */
.container {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
}

section {
    background: #ffffff;
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h2 {
    color: #1b5e20;
    font-size: 1.8rem;
    margin-bottom: 20px;
    border-bottom: 2px solid #81c784;
    padding-bottom: 10px;
}

/* Destaque / Blockquote */
.destaque {
    background-color: #e8f5e9;
    border-left: 5px solid #2e7d32;
    padding: 20px;
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 30px;
    border-radius: 0 8px 8px 0;
}

/* ==========================================================================
   Grid dos Pilares (Cards)
   ========================================================================== */
.pilares-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card {
    background: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-color: #81c784;
}

.card h3 {
    color: #2e7d32;
    margin-bottom: 10px;
    font-size: 1.2rem;
}

/* ==========================================================================
   Responsividade da Imagem
   ========================================================================== */
.imagem-destaque {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* ==========================================================================
   Rodapé (Footer)
   ========================================================================== */
footer {
    background-color: #1b5e20;
    color: #ffffff;
    text-align: center;
    padding: 20px;
    margin-top: 60px;
    font-size: 0.9rem;
}

footer a {
    color: #81c784;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
