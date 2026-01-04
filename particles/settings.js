 var bg = document.querySelector('.bg');
function change() {
    if (bg.id === 'underwater') {
        bg.id = 'particles-js';
    }
    else if (bg.id === 'particles-js') {
        bg.id = 'underwater';
    }
}