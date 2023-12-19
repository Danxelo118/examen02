document.addEventListener('DOMContentLoaded', function (){
    const controlsBouton = document.querySelector('#controls button');
    const controls = document.getElementById('controls');
    const audio = new Audio('audio/trame.mp3');
    const character = document.getElementById('character');
    const parallaxContainer = document.querySelector('.parallax-container');

    function commencer() {
        controls.style.display = 'none';
        controlsBouton.style.display = 'none';
        audio.loop = true;
        audio.play();

    character.classList.add('running');

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyRelease);
    }
    function handleKeyPress (event) {
        if (event.key === 'D' || event.key === 'd') {
            character.classList.add('running');
            parallaxContainer.classList.add('running');
        }
    };

    function handleKeyRelease (event) {
        if (event.key === 'D' || event.key === 'd') {
            character.classList.remove('running');
            parallaxContainer.classList.remove('running');
        }
    }
});






