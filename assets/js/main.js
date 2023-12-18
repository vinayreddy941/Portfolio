/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')




if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')

    })
}

if(navClose){
    navClose.addEventListener('click' , ()=> {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

}

window.addEventListener('scroll', bgHeader)
/*=============== DARK LIGHT THEME ===============*/ 
