
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.planet = null;
    this.asteroids= [];   
    this.timeLeft = 60; 
    this.gameEnd = false;
  }
  timerSetGameEnd(){
    const timerGame = setInterval(() => {
    --this.timeLeft;
    if(this.timeLeft<0){
        this.gameEnd = true;
        this.planet.song.stop();
        buildWinScreen();
        clearInterval(timerGame);
      }
    if(this.planet.lives<1){
      this.gameEnd = true;
      this.planet.song.stop();
        buildDeathScreen()
        clearInterval(timerGame);
      }
    },1000);
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  }
  updatePositions(){
    this.planet.move();
    this.asteroids.forEach(function (asteroid){
      asteroid.move();
    })
  }
  draw(){
    this.ctx.fillStyle = 'skyblue';
    this.ctx.font = "100px Arial";
    this.ctx.fillText(this.timeLeft , 10, 100);
    this.ctx.fillStyle = 'skyblue';
    this.ctx.font = "100px Arial";
    this.ctx.fillText("♥" + this.planet.lives , 10, 200);
    this.planet.draw();
    this.asteroids.forEach(function (asteroid){
      asteroid.draw(); 
    })
  }

  destroyAsteroids(){
    this.asteroids.forEach((e)=>{
      if(e.collision||e.lifeTime===0){
        let index = this.asteroids.indexOf(e);
        this.asteroids.splice(index,1);
        clearInterval(e.timer)
      }
    });
  }
   
  startLoop(){
      const spawnAsteroids = setInterval(() => {
      this.asteroids.push (new Asteroid (this.canvas));
    },250);
      const spawnPowerUps = setInterval(() => {
      this.asteroids.push (new PowerUp(this.canvas));
    },10000);

    this.planet = new Planet(canvas, this.asteroids);
    this.timerSetGameEnd(); 

    const loop =()=>{
      this.clear();
      this.updatePositions();
      this.planet.collision();
      this.draw();
      this.destroyAsteroids();
      if(!this.gameEnd){
        requestAnimationFrame(loop); 
      }
    }
     requestAnimationFrame(loop);
    } 
}
 

 
