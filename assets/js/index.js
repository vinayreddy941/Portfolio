/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'), // Changed modalBotton to modalButtons
      modalClose = document.querySelectorAll('.services__modal-close');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal'); // Removed the dot (.) before active-modal
};

modalButton.forEach((modalButton, i) => { // Changed modalButton to modalButtons
    modalButton.addEventListener('click', () => {
        activeModal(i);
    });
});


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)