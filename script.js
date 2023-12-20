document.addEventListener('DOMContentLoaded', function (){
<<<<<<< HEAD
    const character = document.getElementById('character');
    const controls = document.getElementById('controls');
    const audio = new Audio('audio/trame.mp3');
    const proche = document.getElementById('proche');
    const centre = document.getElementById('centre');
    const loin = document.getElementById('loin');
=======
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





>>>>>>> 9477016dd9fd1e736245d965777887326cb7e932


    function start() {
        character.style.backgroundImage = 'url("images/personnage/Run.png")';
    function stop(){
        character.style.backgroundImage = 'url("images/personnage/Idle.png")';
        proche.style.animation = '';
        centre.style.animation = '';
        loin.style.animation = '';
         }

         function handleKeyPress(event) {
            if(event.key === 'd') {
                start();
            }
         }

         function handleKeyRelease(event) {
            if(event.key === 'd') 
            stop();
          }
         

         function handleButtonClick() {
            controls.display = 'none';
            audio.play();
         }
          }

         start();

         document.addEventListener('keydown', handleKeyPress);
         document.addEventListener('keyup', handleKeyRelease);
         document.querySelector('#controls button').addEventListener('click', handleButtonClick);
});
