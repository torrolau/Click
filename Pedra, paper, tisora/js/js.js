// Referencias a los botones y al resultado
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");
const rankingList = document.getElementById('ranking');

// Variables globales para el nombre y la puntuación del jugador
let playerName = "";
let playerScore = 0;

// Condición de victoria (puedes ajustar esto según tus preferencias)
const winningScore = 3;

// Inicia el juego
function startGame() {
    const name = document.getElementById('seleccionar').value;
    if (!name) {
        alert('You should enter your name before starting');
        return;
    }
    playerName = name;
    document.querySelector('.seccionom').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    addPlayer();
}

// Jugar una ronda
function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "There has been a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result.textContent = "You win! :)";
        playerScore++;
        checkVictory(); // Verifica si el jugador ha ganado
    } else {
        result.textContent = "You have lost :(";
        playerScore--;
    }
    document.getElementById('result').textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${result.textContent}!`;
    addPlayer();
}

// Verifica si el jugador ha ganado
function checkVictory() {
    if (playerScore >= winningScore) {
        // Si el jugador ha ganado, deshabilita los botones
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        result.textContent += " Game over! You have won!";
    }
}

// Eventos de clic para los botones
rockButton.addEventListener("click", () => {
    play("rock", computerPlay());
});

paperButton.addEventListener("click", () => {
    play("paper", computerPlay());
});

scissorsButton.addEventListener("click", () => {
    play("scissors", computerPlay());
});

// Función para la jugada de la computadora
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Función para agregar un jugador
function addPlayer() {
    let playerListItem = null;
    rankingList.querySelectorAll('li').forEach((elemento) => {
        if (elemento.textContent.startsWith(playerName)) {
            playerListItem = elemento;
            return;
        }
    });
    
    if (playerListItem === null) {
        playerListItem = document.createElement('li');
        rankingList.appendChild(playerListItem);
        playerScore = 0;
    }
    playerListItem.textContent = `${playerName}: ${playerScore}`;
}

      


    
