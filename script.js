document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let input = e.target.innerHTML;

            if (input === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (input === 'AC') {
                display.value = '';
            } else if (input === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += input;
            }
        });
    });
});
