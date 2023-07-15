const btn = document.querySelector('[data-form-btn]');

// arrow function
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}

// listener
btn.addEventListener("click", createTask);