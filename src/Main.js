
const mainElement = document.querySelector('main');

function build(elementAdd){
  mainElement.innerHTML = elementAdd;
  return mainElement;
}


function buildIntroScreen(){
  const introScreen =  build( 
    `<section id = "Intro" >
    <h1 id = "title">A-Void</h1> 
    <p><span>Your star has left you because she apparently needs more Space. Travel to find a new one!</span></p>
    <div id = "buttonsIntro">
      <button id = "startButton"><span>START JOURNEY<span> </button>
      <button id = "instructions"><span>INSTRUCTIONS</span></button>
    </div>
  </section>`);
  const StartButton = document.getElementById("startButton");
  StartButton.addEventListener("click", buildGameScreen);
  const instructionsButton = document.getElementById("instructions");
  instructionsButton.addEventListener("click", buildInstructionsScreen);
  document.getElementById("title").animate([
    {transform: 'translateY(-50px)'},
    {transform: 'translateX( 50px)'},
    {transform: 'translateY( 50px)'},
    {transform: 'translateX(-50px)'},
    {transform: 'translateY(-50px)'}
  ], {
    duration: 2000,
    iterations: Infinity
  })

}

function buildInstructionsScreen(){
 const instructionScreen = build(
   `<section id = "instructions">
      <div>
        <button id = "back"><span>BACK</span></button>
      </div>
      <div>
        <p>Move in all directions</p>
        <img src = "./material/arrows.png" width= "80px" height = "80px">
        <p> Collect stars to regain health</p>
        <img src = "./material/star.png" width = "80px" height = "80px">
        <p>Survive one minute to win<p>
      </div>
      <div>
        <button id = "go"><span>GO</span></button>
      <div>
    </section>`)
 const goButton = document.getElementById("go");
 goButton.addEventListener("click", buildGameScreen);
 const goBack = document.getElementById("back");
 goBack.addEventListener("click", buildIntroScreen);
}

function buildGameScreen(){
 
  const  gameScreen = build(`<canvas id="canvas" width="1100" height="800" ></canvas>`)
  const canvas = document.getElementById("canvas");
   
   let game = new Game(canvas);
   
   game.startLoop();
   game.planet.song.play()
   document.addEventListener("keydown", function(event){
    switch (event.keyCode){
      case 37:
        game.planet.speedX = -10;
      break;
      case 38:
        game.planet.speedY = -10;
      break;
      case 39:
      game.planet.speedX = 10;
      break;
      case 40:
      game.planet.speedY = 10;
      break;
    } 
    })

  document.addEventListener("keyup", function(event){
    if (event.keyCode === 37 || event.keyCode === 39){
      game.planet.speedX = 0;
    }else if(event.keyCode === 38 || event.keyCode === 40)
      game.planet.speedY = 0;
    }) 
   }


function buildDeathScreen(game){
  
  playLose();
  const deathScreen =  build(
    `<section id = "Death">
      <h1>YOU LOST</h1>
      <div>
       <button id = "retryButton"><span>RETRY<span> </button>
      <div>
    </section>`);
    const retryButton = document.getElementById("retryButton");
  retryButton.addEventListener("click", buildGameScreen);
  

}
function buildWinScreen(game){
  
  playWin();
  const  winScreen = build(`
  <section id = "win">
    <h1>YOU SURVIVED!</h1>
    <p><span>You have found a new star! Shinier and bigger than the old one</span></p>
    <div>
      <button id = "main-menu"><span>MENU<span> </button>
    </div>
  </section`);
  const mainMenuButton = document.getElementById("main-menu");
 mainMenuButton.addEventListener("click", buildIntroScreen);
}

buildIntroScreen()