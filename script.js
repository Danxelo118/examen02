document.addEventListener('DOMContentLoaded', function (){
    const character = document.getElementById('character');
    const controls = document.getElementById('controls');
    const audio = new Audio('audio/trame.mp3');
    const proche = document.getElementById('proche');
    const centre = document.getElementById('centre');
    const loin = document.getElementById('loin');


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
