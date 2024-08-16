const burger = document.querySelector('#burger');
const navBar = document.querySelector('.nav');
const gallery = document.querySelector('.gallery');
const galleryItems = [...gallery.children];
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const carousel = document.querySelector('.carousel');





burger.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

window.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY;
    const triggerPoint = 500; // Change this value to the scroll point you want

    if (scrollPosition >= triggerPoint) {
        galleryItems.forEach(item => {
            item.classList.add('visible');
        });
    }
   });


  