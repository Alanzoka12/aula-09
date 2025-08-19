const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nascer do sol ou pôr do sol?",
        alternativas: [
            {
                texto: "Nascer do sol",
                afirmacao: "Você valoriza novos começos, "
            },
            {
                texto: "Pôr do sol",
                afirmacao: "Você aprecia encerramentos tranquilos,"
            }
        ]
    },
    {
        enunciado: "Floresta ou praia?",
        alternativas: [
            {
                texto: "Floresta",
                afirmacao: " gosta de estar cercado pela natureza,"
            },
            {
                texto: "Praia",
                afirmacao: " encontra paz no som do mar,"
            }
        ]
    },
    {
        enunciado: ". Estrelas ou aves?",
        alternativas: [
            {
                texto: "Estrelas",
                afirmacao: " é reflexivo e sonhador,"
            },
            {
                texto: "Aves",
                afirmacao: " observa e valoriza os detalhes,"
            }
        ]
    },
    {
        enunciado: "Trilha na montanha ou passeio no campo?",
        alternativas: [
            {   texto: "Trilha na montanha",
                afirmacao: "você busca desafios,"
            },
            {
                texto: "Passeio no campo",
                afirmacao: "você prefere calma e simplicidade,"
            }
        ]
    },
    {
        enunciado: "Tempestade ou neve caindo? ",
        alternativas: [
            {
                texto: "Tempestade",
                afirmacao: "você tem energia intensa."
            },
            {
                texto: "Neve caindo",
                afirmacao: "você valoriza a suavidade e o silêncio. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();