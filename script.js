console.log("Hello");
let songIndex = 0;
let masterPlay = document.getElementById('masterButton');
let song = new Audio('songs/NCS.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let songloc = [
    {songname: "NCS", filePath:"songs/NCS.mp3", coverPath:"cover/1.jpg"},
    {songname: "Diviners", filePath:"songs/Diviners.mp3", coverPath: "cover/2.jpg"},
]
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay');
let songdisplay = document.getElementById('songdisplay');

songItem.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songloc[i].coverPath;
    console.log(songloc[i].coverPath);
    element.getElementsByClassName('songnamee')[0].innerText = songloc[i].songname;
});


// Play/pause
masterPlay.addEventListener('click', () =>{
    console.log("Hello There");
    if(song.paused || song.currentTime<=0){
        song.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        giff.style.opacity = 1;
    } else{
        song.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        giff.style.opacity = 0;
    }
})

// progress bar

song.addEventListener('timeupdate', () =>{
    //Update seeker
    progress = parseInt((song.currentTime/song.duration)*100);
    myProgressBar.value = progress;
})

// Song and progressbar Manually

myProgressBar.addEventListener('change', ()=>{
    song.currentTime = (myProgressBar.value*song.duration/100);
})


//pause all function

const pauseAll = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}


// Change logo alongside song name

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        pauseAll();
        if (song.paused || song.currentTime<=0) {
            songIndex = e.target.id;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            song.src = `songs/${songIndex}.mp3`;                          
            // song.currentTime = 0;
            song.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        } else {
            console.log(song.play());
            song.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        }
    })

})

document.getElementsByClassName('fa-solid fa-3x fa-forward-step')[0].addEventListener('click', ()=>{
    console.log("inside Forword listner")
    if (songIndex>=1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    if (songIndex == 0) {
        song.src = 'songs/NCS.mp3'
        song.currentTime = 0;
        song.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        songdisplay.innerText = songloc[songIndex].songname;
        giff.style.opacity = 1;
    } else {
        song.src = 'songs/Diviners.mp3'
        song.currentTime = 0;
        song.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        songdisplay.innerText = songloc[songIndex].songname;
        giff.style.opacity = 1;
    }
})

document.getElementsByClassName('fa-solid fa-3x fa-backward-step')[0].addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }

    if (songIndex == 0) {
        song.src = 'songs/NCS.mp3'
        song.currentTime = 0;
        song.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        songdisplay.innerText = songloc[songIndex].songname;
        giff.style.opacity = 1;
    } else {
        song.src = 'songs/Diviners.mp3'
        song.currentTime = 0;
        song.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        songdisplay.innerText = songloc[songIndex].songname;
        giff.style.opacity = 1;
    }
})