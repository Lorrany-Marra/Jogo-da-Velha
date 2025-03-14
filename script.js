let jogadorAtual = "";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogoAtivo = false;

// Função para escolher X ou O
function escolherSimbolo(simbolo) {
    jogadorAtual = simbolo;
    document.getElementById("escolha-container").classList.add("hidden");
    document.getElementById("jogo-container").classList.remove("hidden");
    jogoAtivo = true;
}

// Função para fazer uma jogada
function fazerJogada(posicao) {
    if (tabuleiro[posicao] === "" && jogoAtivo) {
        tabuleiro[posicao] = jogadorAtual;
        document.getElementsByClassName("celula")[posicao].textContent = jogadorAtual;

        if (verificarVitoria(jogadorAtual)) {
            document.getElementById("mensagem").textContent = `Parabéns! ${jogadorAtual} venceu!`;
            jogoAtivo = false;
            return;
        }

        if (!tabuleiro.includes("")) {
            document.getElementById("mensagem").textContent = "Empate!";
            jogoAtivo = false;
            return;
        }

        // Alterna o jogador
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
}

// Função para verificar a vitória
function verificarVitoria(simbolo) {
    const combinacoesVencedoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    return combinacoesVencedoras.some(combinacao => 
        combinacao.every(index => tabuleiro[index] === simbolo)
    );
}

// Reiniciar o jogo
function reiniciarJogo() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogoAtivo = false;
    document.getElementById("escolha-container").classList.remove("hidden");
    document.getElementById("jogo-container").classList.add("hidden");
    Array.from(document.getElementsByClassName("celula")).forEach(c => c.textContent = "");
    document.getElementById("mensagem").textContent = "";
}
