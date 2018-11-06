function startGame() {
    // starting a new game

    let playerName: string ;
    logPlayer(playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame').addEventListener('click', startGame);