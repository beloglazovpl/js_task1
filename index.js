
let n = Math.floor(Math.random() * 1000);

console.log(n);

while (true) {
    const userGuess = prompt('Отгадайте загаданное число (от 0 до 999)');

    if (userGuess === 'q') {
        break;
    } else if (isNaN(userGuess) || Math.sign(userGuess) == -1 || Math.sign(userGuess) == -0 || userGuess.length > 3) {
        alert('Недопустимое значение')
    } else if (userGuess == n) {
        alert('Вы угадали! Чтобы сыграть еще раз перезагрузите страницу');
        break;
    } else if (userGuess > n) {
        alert('Загаданное число меньше');
    } else if (userGuess < n) {
        alert('Загаданное число больше');
    }
}
