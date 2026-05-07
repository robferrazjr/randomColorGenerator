const colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "black", "white", "grey", "orange", "purple", "pink", "brown"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let lastIndex = -1;

btn.addEventListener('click', function(){
    let randomNumber;

    do {
        randomNumber = getRandomNumber();
    } while (randomNumber === lastIndex);

    lastIndex = randomNumber;

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}