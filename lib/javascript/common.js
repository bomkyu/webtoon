const header_event = document.querySelector('header');
const list_toon_item = document.querySelectorAll('.swipe_wrap');

window.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 80) {
        header_event.style.transform = 'translateY(-42px)'
    }else{
        header_event.style.transform = 'translateY(0px)'
    }
});

list_toon_item.forEach((p_el, p_index)=>{
    let c_items_ul = p_el.querySelector('ul');
    let c_items_li = c_items_ul.querySelectorAll('li');
    let c_items_li_width = c_items_li[0].offsetWidth + 9;
    if(c_items_ul.classList.contains('list_toon') || c_items_ul.classList.contains('tab_list')){
        c_items_ul.style.width = c_items_li_width * (c_items_li.length)+'px';
    }
    
});
