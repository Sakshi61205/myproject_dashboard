let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            document.querySelector('.input').value = string;
        } else if (value === 'C') {
            string = "";
            document.querySelector('.input').value = string;
        } else {
            string += value;
            document.querySelector('.input').value = string;
        }
    });
});
