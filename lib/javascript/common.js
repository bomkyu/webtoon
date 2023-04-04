let header_event = document.querySelector('header');

window.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 80) {
        header_event.style.transform = 'translateY(-42px)'
    }else{
        header_event.style.transform = 'translateY(0px)'
    }
});
