   
   const video = document.querySelector("video");
    const playPauseBtn = document.querySelector(".playPause");
    const volumeBtn = document.querySelector("#volume");
    const muteBtn = document.querySelector(".mute");
    const replayBtn = document.querySelector(".replay");
    const remainSlider = document.querySelector(".remain");
    const curtimetext = document.getElementById("curtimetext");
	  const durtimetext = document.getElementById("durtimetext");
    const nextBtn = document.querySelector(".nextTen");
    const prevBtn = document.querySelector(".prevTen");
    const fullscreenBtn = document.querySelector(".fullscreen");

    playPauseBtn.addEventListener('click',function(){
      playPauseVideo();
    });

    function playPauseVideo() {

      if (video.paused || video.ended) {
        playPauseBtn.innerHTML = '<img src="assets/icons/pause.svg" alt="pause" class="icons">';
        video.play();
      } else {
        playPauseBtn.innerHTML = '<img src="assets/icons/play.svg" alt="play" class="icons">';
        video.pause();
      }

      muteBtn.addEventListener('click',function() {
        muteUnmute();
      });

    }

    function muteUnmute() {

      if (video.muted)  {
        muteBtn.innerHTML = '<img src="assets/icons/unmute.svg" alt="play" class="icons">';
        video.muted = false;
      } else  {
        muteBtn.innerHTML = '<img src="assets/icons/mute.svg" alt="mute" class="icons">';
        video.muted = true;
      }

    }

    replayBtn.addEventListener('click',function() {
      replayVideo();
    });

    function replayVideo() {

      video.currentTime = 0;
      video.play();
    }

    volumeBtn.addEventListener('change', function() {
		  video.volume = this.value /100;
	  });


    remainSlider.addEventListener('change',function() {
      vidSeek();
    });

    function vidSeek()  {

      var seekto = video.duration * (remainSlider.value / 100);
      video.currentTime = seekto;
      
    }

    video.addEventListener('timeupdate',function() {
      videoTimeUpdate();
    })
    
    function videoTimeUpdate() {

      var remain = video.currentTime * (100 / video.duration);
      remainSlider.value = remain;

      var currentMinutes = Math.floor(video.currentTime / 60);
      var currentSecond = Math.floor(video.currentTime - currentMinutes * 60);
      var durationMinute = Math.floor(video.duration / 60);
      var durationSecond = Math.floor(video.duration - durationMinute * 60);

      if(currentSecond < 10)  { 
        currentSecond = "0" +currentSecond; 
      }
      if(durationSecond < 10)  {
         durationSecond = "0" +durationSecond; 
      }
      if(currentMinutes < 10)  { 
        currentMinutes = "0" +currentMinutes; 
      }
      if(durationMinute < 10)  { 
        durationMinute = "0" +durationMinute;
      }

      curtimetext.innerHTML = currentMinutes + ":" + currentSecond;
      durtimetext.innerHTML = durationMinute + ":" + durationSecond;

    }

    nextBtn.addEventListener('click',function() {
      nextTenSecond();
    });

    function nextTenSecond() {

      var durationVideo = video.duration;
      var currentTimeNow = video.currentTime;

      var currentNextTenSecond = currentTimeNow + 10;
      video.currentTime = currentNextTenSecond;
    }

    prevBtn.addEventListener('click',function() {
      prevTenSecond();
    });

    function prevTenSecond() {

      var durationVideo = video.duration;
      var currentTimeNow = video.currentTime;

      var currentPrevTenSecond = currentTimeNow - 10;
      video.currentTime = currentPrevTenSecond;
    }

    fullscreenBtn.addEventListener('click',function()  {
      fullscreen();
    });

    function fullscreen() {
      console.log('fullscreen is not support');
    }