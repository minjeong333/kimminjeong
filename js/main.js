let pick = document.querySelector(".pick");
let moved = false;

window.addEventListener("scroll", function(){
    let value = window.scroll.scrollY;
    console.log("scrollY", value); //콘솔창 확인

    if(value > 750) {
        pick.computedStyleMap.animation = 'unPick 1s ease-out forwards'
    // forwards 상태 유지 0.5s 딜레이
    } else {
        pick.computedStyleMap.animation = 'pick 1s ease-out'
    }
})