/// ÁREA DE EXPANSÃO DA IMAGEM ///

document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio('src/metro.mp3'); // Substitua pelo caminho do seu arquivo de som
    audio.play();

    // Espera 4 segundos (tempo da animação) e então esconde a tela de carregamento
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('hidden');

        // Adiciona a classe "loaded" ao body para mostrar o conteúdo principal
        document.body.classList.add('loaded');
    }, 6000); // 4 segundos para combinar com a duração da animação
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

/// ÁREA DE SCROLL HORIZONTAL "NOSSA EQUIPE!" ///

document.addEventListener('DOMContentLoaded', function() {
    const scrollWrapper = document.querySelector('.equipe-scroll-wrapper');
    const equipe = document.querySelector('.equipe');
    const dots = document.querySelectorAll('.scroll-dot');
    
    if (scrollWrapper && dots.length > 0) {
        // Atualiza os dots conforme o scroll
        scrollWrapper.addEventListener('scroll', function() {
            const scrollPercentage = scrollWrapper.scrollLeft / (scrollWrapper.scrollWidth - scrollWrapper.clientWidth);
            const activeDot = Math.round(scrollPercentage * (dots.length - 1));
            
            dots.forEach((dot, index) => {
                if (index === activeDot) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
        
        // Adiciona clique nos dots para navegar
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                const scrollTo = index / (dots.length - 1) * (scrollWrapper.scrollWidth - scrollWrapper.clientWidth);
                scrollWrapper.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth'
                });
            });
        });
    }
});

/// SELEÇÃO DE LINGUAGEM - CABEÇALHO ///
document.addEventListener('DOMContentLoaded', function() {
    const selector = document.querySelector('.custom-language-selector');
    const button = selector.querySelector('.selector-button');
    const options = selector.querySelector('.language-options');
    const langLinks = options.querySelectorAll('a');
    
    // Abrir/fechar o dropdown
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      options.classList.toggle('show');
    });
    
    // Fechar o dropdown quando clicar em um item
    langLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Opcional: você pode adicionar um delay antes de redirecionar
        // para permitir que a animação/transição seja vista
        setTimeout(() => {
          options.classList.remove('show');
        }, 200);
        
        // Se quiser fazer algo antes de redirecionar, como salvar a preferência
        const lang = this.getAttribute('data-lang');
        console.log('Idioma selecionado:', lang);
        // Aqui você poderia salvar no localStorage, por exemplo
      });
    });
    
    // Fechar o dropdown quando clicar em qualquer lugar fora
    document.addEventListener('click', function() {
      options.classList.remove('show');
    });
  });

/// ATUALIZAÇÃO ANUAL DE COPYRIGHT ///
// Atualiza o ano automaticamente
document.getElementById('year').textContent = new Date().getFullYear();
        
// Efeitos adicionais (opcional)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});