//  task1
let city;
city = 'Kyiv';
city = 'Lviv';
let address;
address = city;
console.log(address);
// task2
let number = parseInt(prompt('enter any number'));
console.log(number === 0 ? 'ви ввели 0' :
    number % 2 === 0 ? 'ви ввели парне число' :
        'ви ввели непарне число');
// task3
function showMax(...args) {
    let max = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    console.log(`Максимальне число: ${max}`);
}
showMax(20, -30, 80, 0, 120);
// task4
function Sqrt(number) {
    if (number === undefined) {
        console.log('Будь ласка, введіть число!');
    }
    else if (typeof number !== 'number' || isNaN(number)) {
        console.log('Повинно бути числове значення.');
    }
    else if (number < 0) {
        console.log('Введіть додатнє число.');
    }
    else {
        let rez = Math.sqrt(number);
        console.log(`Квадратний корінь з ${number} дорівнює ${rez}.`);
    }
}
Sqrt(91);
// task5
function add() {
    const wordInput = document.querySelector('#word');
    const wordsList = document.querySelector('.list');
    const add = document.querySelector('#btn-add');
    const reset = document.querySelector('#btn-reset');
    const cenzor = document.querySelector('#btn-cenzor');
    add.style.outline = '4px solid #dc8828a8';
    reset.style.outline = 'none';
    cenzor.style.outline = 'none';
    if (wordInput.value.trim() !== '') {
        const newWord = document.createElement('span');
        newWord.textContent = wordInput.value.trim();
        if (wordsList.children.length > 0) {
            const comma = document.createTextNode(', ');
            wordsList.appendChild(comma);
        }
        wordsList.appendChild(newWord);
        wordInput.value = '';
        wordInput.style.border = '1px solid black';
        wordInput.placeholder = 'word here';
    }
    else {
        wordInput.placeholder = 'Please write a word';
        wordInput.style.border = '3px solid red';
    }
}
function reset() {
    const reset = document.querySelector('#btn-reset');
    const wordsList = document.querySelector('.list');
    const add = document.querySelector('#btn-add');
    const wordInput = document.querySelector('#word');
    const textInput = document.querySelector('#text');
    const cenzor = document.querySelector('#btn-cenzor');
    textInput.style.outline = '1px solid black';
    reset.style.outline = '4px solid #dc284cbf';
    cenzor.style.outline = 'none';
    add.style.outline = 'none';
    wordsList.innerHTML = '';
    wordInput.value = '';
    textInput.value = '';
    wordInput.style.border = '1px solid black';
    wordInput.placeholder = 'word here';
}
function cenzor() {
    const wordsList = Array.from(document.querySelectorAll('.list span'));
    const textInput = document.querySelector('#text');
    const cenzor = document.querySelector('#btn-cenzor');
    let text = textInput.value;
    textInput.style.outline = '3px solid #19c76d';
    textInput.style.border = 'none';
    cenzor.style.outline = '4px solid #19c76d98';
    wordsList.forEach(wordSpan => {
        const badWord = wordSpan.textContent?.trim();
        if (badWord) {
            const regex = new RegExp(`\\b${badWord}\\b`, 'gi');
            text = text.replace(regex, '*'.repeat(badWord.length));
        }
    });
    textInput.value = text;
}
