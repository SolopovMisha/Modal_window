const openBtn = document.querySelector('.open-btn');
const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.modal_button');
const closeBtn = document.querySelector('.close-btn');
const nameInput = document.querySelector('.modal_name');
const surnameInput = document.querySelector('.modal_surname');

openBtn.addEventListener('click', () => {
    container.classList.add('active');
    modal.classList.add('active');
    submitBtn.disabled = false;
});

function closeModal() {
    container.classList.remove('active');
    modal.classList.remove('active');
    submitBtn.disabled = true;

    let name = nameInput.value;
    let surname = surnameInput.value;
    nameInput.value = '';
    surnameInput.value = '';
}

closeBtn.addEventListener('click', closeModal);

container.addEventListener('click', (event) => {
    if (event.target === container) closeModal();
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (nameInput.value && surnameInput.value) {
        closeModal();
    } else {
        if (!confirm('Заполните все поля. Продолжить?')) {
            closeModal();
        }
    }
});