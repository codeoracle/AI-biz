import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// import ScrollReveal
import ScrollReveal from 'scrollreveal';


Alpine.plugin(intersect);
window.Alpine = Alpine;

Alpine.start();

/*========== SCROLL REVEAL ANIMATION ==========*/
window.sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: false,
});

sr.reveal(`.animate_top`, {
  origin: 'top',
  interval: 100,
});

sr.reveal(`.animate_left`, {
  origin: 'left',
  interval: 100,
});

sr.reveal(`.animate_right`, {
  origin: 'right',
  interval: 100,
});

/*========== SCROLL SECTIONS ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('!ud-text-primary')
          }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('!ud-text-primary')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {});
