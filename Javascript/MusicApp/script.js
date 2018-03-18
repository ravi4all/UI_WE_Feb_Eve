window.addEventListener("load", initEvent);

var audio;
var audioPlayer;
var songTag;
var playBtn;
var pauseBtn;

function initEvent(){
    audio = document.getElementById("audio");
    slider = document.getElementById("slider");
    songTag = document.getElementsByTagName("a");
    playBtn = document.getElementById("playSong");
    pauseBtn = document.getElementById("pauseSong");
    for(var i = 0; i < songTag.length; i++){
        songTag[i].addEventListener("click", playSong);
    }

    playBtn.addEventListener("click", resumeSong);
    pauseBtn.addEventListener("click", pauseSong);
    // slider.addEventListener("keyup", pauseSong2);
    slider.addEventListener("change",seekSong);
}

function playSong(){
    var songName = event.srcElement.innerHTML.trim();
    console.log(songName);
    audio.src = 'songs/'+songName+'.mp3';
    audio.play();
    setInterval(function(){
        // console.log("Hello")
        slider.value = audio.currentTime;
    },1000);
    setTimeout(function(){
        slider.max = audio.duration;
    },1000);
    // console.log(slider.max);
}

function seekSong(){
    audio.currentTime = slider.value;
}

function resumeSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}

function pauseSong2(){
    // console.log("Focus in audioplayer div");
    key = event.keyCode;
    if (key == 32){
        audio.pause();
    }
    console.log(key);
}