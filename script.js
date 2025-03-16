document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio('sons/trem.mp3'); // Substitua pelo caminho do seu arquivo de som
    audio.play();

    // Espera 4 segundos (tempo da animação) e então esconde a tela de carregamento
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('hidden');

        // Adiciona a classe "loaded" ao body para mostrar o conteúdo principal
        document.body.classList.add('loaded');
    }, 4000); // 4 segundos para combinar com a duração da animação
});

// Seleciona os elementos da galeria e do modal
const imagensGaleria = document.querySelectorAll('.imagem-galeria img');
const modal = document.querySelector('.modal-galeria');
const modalImg = document.querySelector('.modal-conteudo');
const fecharModal = document.querySelector('.fechar-modal');
const botaoVoltar = document.querySelector('.botao-voltar');

// Função para abrir o modal com a imagem clicada
imagensGaleria.forEach((imagem) => {
    imagem.addEventListener('click', () => {
        modal.classList.add('mostrar');
        modalImg.src = imagem.src;
    });
});

// Função para fechar o modal
fecharModal.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

botaoVoltar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

// Fechar o modal ao clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('mostrar');
    }
});