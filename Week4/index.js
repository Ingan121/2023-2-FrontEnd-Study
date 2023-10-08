let expression = '';

const display = document.getElementById('display');
const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener('click', () => {
        calc(button.textContent);
    });
}

document.addEventListener('keydown', (event) => {
    calc(event.key);
});

function calc(key) {
    console.log(key);
    switch (key) {
        case 'C': case 'AC': case 'Escape':
            expression = '';
            display.value = '0';
            buttons[0].textContent = 'AC';
            return;
        case '=': case 'Enter':
            if (expression == '') return;
            display.value = eval(expression);
            expression = display.value;
            return;
        case '+/-':
            display.value = -display.value;
            expression = display.value;
            return;
        case '%':
            display.value = eval(expression) / 100;
            expression = display.value;
            return;
        case 'x':
            key = '*';
            break;
        case '÷':
            key = '/';
    }
    if (isNaN(key) && !['+', '-', '*', '/', '.'].includes(key)) return;

    const lastKey = expression[expression.length - 1];
    if (isNaN(lastKey) && lastKey != '.' && display.value != '-')
        display.value = '';

    if (display.value == '' && key == '-')
        display.value = '-';
    if (!isNaN(key) || key == '.')
        display.value += key;
    if (display.value == '')
        display.value = '0';

    expression += key;
    buttons[0].textContent = 'C';
}