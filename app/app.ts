function startGame() {
    // starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    let messagesElement: HTMLElement | null = document.getElementById('messages');

    if (messagesElement === null) {
        return messagesElement;
    }
    else {
        console.log(messagesElement);
        messagesElement = document.getElementById('messages');
        messagesElement = 5;
    }
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame);