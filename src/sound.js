function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function playLose(){
  let lose = new sound("./material/lose.mp3");
  lose.play();
}

function playImpact(){
  let impact= new sound("./material/impact.mp3");
  impact.play();
}

function playStar(){
  let star = new sound("./material/star.mp3");
  star.play();
}

function playWin(){
  let win= new sound("./material/win.mp3");
  win.play();
}

function playSong(){
  let song = new sound("./material/song.mp3");
  song.play();
}


