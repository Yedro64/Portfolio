const openModal1 = document.querySelector('.verMasBtn1');
const openModal2 = document.querySelector('.verMasBtn2');
const openModal3 = document.querySelector('.verMasBtn3');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const closeModal1 = document.querySelector('.modal-cerrar1');
const closeModal1X = document.querySelector('.x');
const closeModal2X = document.querySelector('.x2');
const closeModal3X = document.querySelector('.x3');
const closeModal2 = document.querySelector('.modal-cerrar2');
const closeModal3 = document.querySelector('.modal-cerrar3');

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal-show-proyect');
});
closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal-show-proyect');
});
closeModal1X.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal-show-proyect');
});

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal-show2');
});
closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal-show2');
});
closeModal2X.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal-show2');
});

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal-show3');
});
closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal-show3')
});
closeModal3X.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal-show3');
});
