const openModal = document.querySelector('.redesBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-cerrar');
const closeModal_CloseIcon = document.querySelector('.close-icon');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});

closeModal_CloseIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});

