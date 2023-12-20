  document.addEventListener('DOMContentLoaded', function (){
    const character = document.getElementById('character');
    const audio = new Audio('audio/trame.mp3');
    const controls = document.getElementById('controls');

    document.querySelector('#controls button').addEventListener('click', startBouton);
    function startBouton(){
    controls.style.display = 'none';
    audio.play();
  };
    
  function startAnimation() {
    character.style.backgroundImage = 'url("images/personnage/Idle.png")';
    character.classList.add('idle-animation');
  }
  function startD(event) {
    if ((event.key === 'D') || (event.key === 'd')) {
        startAnimation();
    }
  }

});


