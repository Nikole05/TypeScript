function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
    
}

function logPlayer(name:string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName?: string): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === ''){
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);