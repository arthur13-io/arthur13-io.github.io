const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const navItems = document.querySelector('.nav-items');

//Open and nav menu
menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);

function showMenu(){
    navItems.style.display = 'block';
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
}

function closeMenu(){
    navItems.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

//Toggling for FAQs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq-icon ion-icon');
        if(icon.className ==='add-outline') {
            icon.className  = 'remove-outline';
        }
        else{
            icon.className = 'add-outline';
        }
    })
})

//add background style to navbar
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0);
})


