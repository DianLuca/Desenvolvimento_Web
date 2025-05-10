document.addEventListener('DOMContentLoaded', function () {
    const corpoPag = document.querySelector('body');

    const alternar = document.querySelector('#alternar');

    let corpo = corpoPag.classList;

    alternar.addEventListener('click', ()=> {
        
        if ((corpo.value == '') | (corpo.value == 'white')) {
            // .toggle remove ou adicionar um classe no elemento
            corpo.toggle('black');
            // alternar.toggle('background-image', '../img/light_mode.svg');
        } else {
            corpo.toggle('white');
        }
    })

})