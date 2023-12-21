document.addEventListener('DOMContentLoaded', function () {
    const character = document.getElementById('character');
    const audio = new Audio('audio/trame.mp3');
    const controls = document.getElementById('controls');
    const parallaxImages = document.querySelectorAll('.parallax-image');
    const parallaxContainer = document.querySelector('.parallax-container');

    document.querySelector('#controls button').addEventListener('click', startBouton);
    function startBouton() {
        controls.style.display = 'none';
        audio.loop = true;
        audio.play();
        startAnimation();
    };

    function startAnimation() {

        character.style.backgroundImage = 'url("images/personnage/Idle.png")';
        character.classList.add('IdleAnimation');
    }


    document.addEventListener('keydown', startD);
    function startD(event) {
        if (event.key === 'D' || event.key === 'd') {
            character.style.backgroundImage = 'url("images/personnage/Run.png")';
            character.classList.add('runAnimation');
            parallaxContainer.classList.add('parallaxAnimation');
            parallaxImages.forEach((image) => {
                image.classList.add('parallaxAnimation');
            });
        }
    }

    document.addEventListener('keyup', stopD);
    function stopD(event) {
        if (event.key === 'D' || event.key === 'd') {
            character.style.backgroundImage = 'url("images/personnage/Run.png")';
            character.classList.remove('runAnimation');
            character.style.backgroundImage = 'url("images/personnage/Idle.png")';
            character.classList.add('IdleAnimation');
            parallaxContainer.classList.remove('parallaxAnimation');
            parallaxImages.forEach((image) => {
                image.classList.remove('parallaxAnimation');
            });
        }
    }
});








