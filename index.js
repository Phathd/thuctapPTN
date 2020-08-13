document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.button-a');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('click');
    })

    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    })

    var scrollInterval = setInterval(function() {
        window.scrollBy(0, 100);
    }, 1000);

    // addEventListener
    // classList 

    // function nameF(param) {

    // }

    // const nameF = (param) => {

    // }

    // click, scroll, mousemove, mouseup, mouseenter
})