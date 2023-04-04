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
    let isDown = false; //터치가 이뤄지고 있는지 여부의 플래그
    let startX;
    let scrollLeft;
    

    //스와이프 로직 이제 다시 터치했을때 기존 값에서 스와이프 되게 구현해야함
    if(c_items_ul.classList.contains('list_toon') || c_items_ul.classList.contains('tab_list')){
        c_items_ul.style.width = c_items_li_width * (c_items_li.length)+'px'; //부모에 width 지정해줍니다.
        const c_items_ul_parent = c_items_ul.parentElement;
        
        c_items_ul_parent.addEventListener('touchstart', (event)=>{
            isDown = true;
            startX = event.touches[0].clientX;
            scrollLeft = c_items_ul.scrollLeft;
            console.log(scrollLeft);
        });

        c_items_ul_parent.addEventListener('touchmove', (event)=>{
            if(!isDown) return;
            event.preventDefault();
            const x = startX - event.touches[0].clientX; //스크롤했을때의 값
            c_items_ul.style.transform = `translate(${x}px, 0)`

        });

        c_items_ul_parent.addEventListener('touchend', (event)=>{
            isDown = false;
            
        });
    }
    
});