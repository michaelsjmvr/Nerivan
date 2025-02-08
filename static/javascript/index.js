/* Efeito de digitação */

document.addEventListener("DOMContentLoaded", function () {
    const text = "Sua melhor escolha em rochas naturais";
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    // Garante que o h2 começa vazio antes de digitar
    typingElement.innerHTML = "";

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML += text[index];
            index++;
            setTimeout(typeEffect, 100); // Ajuste a velocidade da digitação aqui
        } else {
            typingElement.style.borderRight = "none"; // Remove o cursor no final
        }
    }

    setTimeout(typeEffect, 500); // Pequeno delay antes de começar
});

/* efeito do header */

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector("header").classList.add("show");
    }, 300); // Pequeno delay para suavizar
});

/* Lista de produtos */

// Abre o modal
function abrirModal(produto) {
    const modal = document.getElementById('modal-produto');
    const modalImagem = document.getElementById('modal-imagem');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescricao = document.getElementById('modal-descricao');

    const produtos = {
        produto1: {
            imagem: "/static/img/produtos/preto-via-lactea.jpg",
            titulo: "PRETO VIA LÁCTEA",
            descricao: "Uma opção sofisticada, com tons escuros e veios sutis que lembram a galáxia."
        },
        produto2: {
            imagem: "/static/img/produtos/azul-imperial.jpg",
            titulo: "AZUL IMPERIAL",
            descricao: "Um granito raro e exuberante, com tonalidades azuladas e detalhes dourados."
        },
        produto3: {
            imagem: "/static/img/produtos/titanium.jpg",
            titulo: "TITANIUM",
            descricao: "Moderno e impactante, o Titanium combina tons escuros e rajados metálicos."
        },
        produto4: {
            imagem: "/static/img/produtos/galaxy.jpg",
            titulo: "GALAXY",
            descricao: "Com um fundo negro e partículas brilhantes, remete ao universo estrelado."
        },
        produto5: {
            imagem: "/static/img/produtos/taj-mahal.jpg",
            titulo: "TAJ MAHAL",
            descricao: "Versatilidade e elegância são componentes presentes no Taj Mahal."
        },
        produto6: {
            imagem: "/static/img/produtos/black-river.jpg",
            titulo: "BLACK RIVER",
            descricao: "Tons escuros mesclados a veios ondulados que lembram a fluidez dos rios."
        },
        produto7: {
            imagem: "/static/img/produtos/patagonia.jpg",
            titulo: "PATAGONIA",
            descricao: "Uma pedra exótica com tons contrastantes e um visual verdadeiramente único."
        },
        produto8: {
            imagem: "/static/img/produtos/seal-pearl.jpg",
            titulo: "SEAL PEARL",
            descricao: "Sofisticação em cada detalhe, com nuances peroladas e suaves texturas."
        },
        produto9: {
            imagem: "/static/img/produtos/blue-mare.jpg",
            titulo: "BLUE MARE",
            descricao: "A tonalidade azul e os veios dinâmicos trazem um toque luxuoso aos ambientes."
        },
        produto10: {
            imagem: "/static/img/produtos/brown-shadow.jpg",
            titulo: "BROWN SHADOW",
            descricao: "Uma fusão perfeita entre tons terrosos e uma textura natural impressionante."
        },
        produto11: {
            imagem: "/static/img/produtos/branco-realeza.jpg",
            titulo: "BRANCO REALEZA",
            descricao: "Um clássico atemporal, perfeito para ambientes claros e sofisticados."
        },
        produto12: {
            imagem: "/static/img/produtos/blue-phantom.jpg",
            titulo: "BLUE PHANTOM",
            descricao: "Com um azul intenso e veios marcantes, transmite elegância e exclusividade."
        },
        produto13: {
            imagem: "/static/img/produtos/sienas.jpg",
            titulo: "BRANCO SIENA",
            descricao: "Um branco puro e sofisticado que transmite leveza e amplitude, ideal para quem busca um ambiente clean e elegante."
        },
        produto14: {
            imagem: "/static/img/produtos/dallas.jpg",
            titulo: "BRANCO DALLAS",
            descricao: "A combinação perfeita entre sutileza e resistência, proporcionando sofisticação atemporal aos seus projetos."
        },
        produto15: {
            imagem: "/static/img/produtos/itaunas.jpg",
            titulo: "BRANCO ITAUNAS",
            descricao: "Seu tom suave e textura única criam um ambiente acolhedor, perfeito para espaços modernos e sofisticados."
        },
        produto16: {
            imagem: "/static/img/produtos/Fortaleza.jpg",
            titulo: "FORTALEZA",
            descricao: "Inspirado na força e na resistência, esse granito traduz imponência e requinte para qualquer ambiente."
        }
    };
    

    modalImagem.src = produtos[produto].imagem;
    modalTitulo.textContent = produtos[produto].titulo;
    modalDescricao.textContent = produtos[produto].descricao;

    modal.style.display = "flex";
}

// Fecha o modal ao clicar no botão de fechar
function fecharModal() {
    document.getElementById('modal-produto').style.display = "none";
}

// Fecha ao clicar fora do conteúdo do modal
document.getElementById('modal-produto').addEventListener('click', function(event) {
    if (event.target === this) {
        fecharModal();
    }
});

// Fecha o modal ao pressionar a tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

/* Rolagem dá página */

// Espera o documento estar completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links âncoras
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Adiciona um evento de clique para cada link âncora
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link (rolagem instantânea)

            // Pega o destino do link (o id da seção)
            const targetId = anchor.getAttribute('href').substring(1); // Remove o '#' do href

            // Seleciona a seção alvo
            const targetElement = document.getElementById(targetId);

            // Se o elemento de destino existir, realiza a rolagem suave
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',  // Rolagem suave
                    block: 'start'       // A rolagem vai até o topo da seção
                });
            }
        });
    });
});

/* Toggle mobile */
document.getElementById("menu-mobile-botao").addEventListener("click", function() {
    document.getElementById("menu-mobile").classList.toggle("mostrar");
});

/* Indicador de menu */
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".menu-link").forEach(el => el.classList.remove("ativo"));
        this.classList.add("ativo");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function ajustarTexto() {
        let h2 = document.getElementById("typing-effect");
        if (window.innerWidth <= 480) {
            h2.innerHTML = h2.innerHTML.replace(" escolha ", " escolha<br>");
        } else {
            h2.innerHTML = "Sua melhor escolha em rochas naturais";
        }
    }

    // Chamar ao carregar e ao redimensionar a tela
    ajustarTexto();
    window.addEventListener("resize", ajustarTexto);
});