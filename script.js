
    let mysong = document.getElementById("music");
    let icon = document.getElementById("icon");
    let progress = document.getElementById("progress")
    mysong.onloadedmetadata = function(){
         progress.max = mysong.duration;
         progress.value = mysong.currentTime;
    }
    progress.onchange = function(){
        mysong.play();
        mysong.currentTime = progress.value;
        icon.src = "Images/pause.png";
    }
    if((mysong.play)){
        setInterval(()=>{
            progress.value = mysong.currentTime
        },500);
    }
    icon.onclick = function(){
        if (mysong.paused){
            mysong.play();
            icon.src = "Images/pause.png";
        }
        else{
            mysong.pause();
            icon.src ="Images/play.png";
        }
    }
   

    function like(){
        let like = document.getElementById("like");
        if(like.className=='fa-regular fa-heart icon')
        {
            like.className='fa-solid fa-heart icon'
        }
        else{
            like.className='fa-regular fa-heart icon'
        }
    }