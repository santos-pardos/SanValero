let menu = document.getElementById('enlaces');
let hamburguesa = document.getElementsByClassName('menu-header')[0];

hamburguesa.addEventListener('click', function(){
    menu.classList.toggle('extra-clase');
})