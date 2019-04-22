function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = ()=>{
    this.sound.play();
  }
  this.stop = ()=>{
    this.sound.pause();
  }
}

playLose=()=>{
  let lose = new sound("./material/lose.mp3");
  lose.play();
}

playImpact=()=>{
  let impact= new sound("./material/impact.mp3");
  impact.play();
}

playStar=()=>{
  let star = new sound("./material/star.mp3");
  star.play();
}

playWin=()=>{
  let win= new sound("./material/win.mp3");
  win.play();
}

playSong=()=>{
  let song = new sound("./material/song.mp3");
  song.play();
}


