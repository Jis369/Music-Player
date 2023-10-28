// console.log("Welcome to Spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
//     {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
//     {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
// ]

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })


// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// // const makeAllPlays = ()=>{
// //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
// //         element.classList.remove('fa-pause-circle');
// //         element.classList.add('fa-play-circle');
// //     })

//     // Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
//     //     element.classList.remove('songName1');
//     //     element.classList.add('animation-off');
//     // })
//     // Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
//     //     songIndex = parseInt(e.target.id);
//     //     document.getElementById('e.target')
//     //     e.target.classList.remove('animation1');
//     //     e.target.classList.add('songName1');
//     //     // element.classList.remove('animation1');
//     //     // element.classList.add('songName1');
//     // })

// //}


// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //     element.addEventListener('click', (e) => {
// //         // makeAllPlays();
// //         songIndex = parseInt(e.target.id);

// //         // Select the parent div of the clicked element
// //         const songItem = e.target.closest('.songItem');

// //         // Change class name from "animation1" to "songName1" for the clicked song
// //         const songNameElement = songItem.querySelector('.animation1');
// //         songNameElement.classList.remove('animation1');
// //         songNameElement.classList.add('songName1');
// //         // songNameElement.classList.remove('fa-pause-circle');
// //         // songNameElement.classList.add('fa-play-circle');

// //         e.target.classList.remove('fa-play-circle');
// //         e.target.classList.add('fa-pause-circle');
// //         audioElement.src = `songs/${songIndex + 1}.mp3`;
// //         masterSongName.innerText = songs[songIndex].songName;
// //         audioElement.currentTime = 0;
// //         audioElement.play();
// //         gif.style.opacity = 1;
// //         masterPlay.classList.remove('fa-play-circle');
// //         masterPlay.classList.add('fa-pause-circle');
// //     });
// // });


// // Your existing code for playing the audio and animation
// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //     element.addEventListener('click', (e) => {
// //         // Check if the audio is currently playing
// //         if (!audioElement.paused) {
// //             audioElement.pause();  // Pause the audio
// //             gif.style.opacity = 0;  // Hide the animation (change opacity to 0)
// //             e.target.classList.remove('fa-pause-circle');  // Change back the icon
// //             e.target.classList.add('fa-play-circle');
// //         } else {
// //             // Audio is paused, so play it
// //             songIndex = parseInt(e.target.id);
// //             const songItem = e.target.closest('.songItem');
// //             const songNameElement = songItem.querySelector('.animation1');
// //             songNameElement.classList.remove('animation1');
// //             songNameElement.classList.add('songName1');
// //             e.target.classList.remove('fa-play-circle');
// //             e.target.classList.add('fa-pause-circle');
// //             audioElement.src = `songs/${songIndex + 1}.mp3`;
// //             masterSongName.innerText = songs[songIndex].songName;
// //             audioElement.currentTime = 0;
// //             audioElement.play();
// //             gif.style.opacity = 1;
// //             masterPlay.classList.remove('fa-play-circle');
// //             masterPlay.classList.add('fa-pause-circle');
// //         }
// //     });
// // });

// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //     element.addEventListener('click', (e) => {
// //         // Check if the audio is currently playing
// //         if (audioElement.src.endsWith(`songs/${songIndex + 1}.mp3`)) {
// //             if (audioElement.paused) {
// //                 // Resume playback
// //                 audioElement.play();
// //                 gif.style.opacity = 1;
// //                 e.target.classList.remove('fa-play-circle');
// //                 e.target.classList.add('fa-pause-circle');
// //             } else {
// //                 // Pause playback
// //                 audioElement.pause();
// //                 gif.style.opacity = 0;
// //                 e.target.classList.remove('fa-pause-circle');
// //                 e.target.classList.add('fa-play-circle');
// //             }
// //         } else {
// //             // Start playing a new song
// //             songIndex = parseInt(e.target.id);
// //             const songItem = e.target.closest('.songItem');
// //             const songNameElement = songItem.querySelector('.animation1');
// //             songNameElement.classList.remove('animation1');
// //             songNameElement.classList.add('songName1');
// //             e.target.classList.remove('fa-play-circle');
// //             e.target.classList.add('fa-pause-circle');
// //             audioElement.src = `songs/${songIndex + 1}.mp3`;
// //             masterSongName.innerText = songs[songIndex].songName;
// //             audioElement.currentTime = 0;
// //             audioElement.play();
// //             gif.style.opacity = 1;
// //             masterPlay.classList.remove('fa-play-circle');
// //             masterPlay.classList.add('fa-pause-circle');
// //         }
// //     });
// // });

// // let currentSongElement = null; // Track the currently playing song element

// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //     element.addEventListener('click', (e) => {
// //         if (currentSongElement !== null && currentSongElement !== e.target) {
// //             // Stop the currently playing song
// //             currentSongElement.classList.remove('fa-pause-circle');
// //             currentSongElement.classList.add('fa-play-circle');
// //             audioElement.pause();
// //             gif.style.opacity = 0;
// //         }

// //         if (audioElement.src.endsWith(`songs/${songIndex + 1}.mp3`)) {
// //             if (audioElement.paused) {
// //                 // Resume playback
// //                 audioElement.play();
// //                 gif.style.opacity = 1;
// //                 e.target.classList.remove('fa-play-circle');
// //                 e.target.classList.add('fa-pause-circle');
// //             } else {
// //                 // Pause playback
// //                 audioElement.pause();
// //                 gif.style.opacity = 0;
// //                 e.target.classList.remove('fa-pause-circle');
// //                 e.target.classList.add('fa-play-circle');
// //             }
// //         } else {
// //             // Start playing a new song
// //             songIndex = parseInt(e.target.id);
// //             const songItem = e.target.closest('.songItem');
// //             const songNameElement = songItem.querySelector('.animation1');
// //             songNameElement.classList.remove('animation1');
// //             songNameElement.classList.add('songName1');
// //             e.target.classList.remove('fa-play-circle');
// //             e.target.classList.add('fa-pause-circle');
// //             audioElement.src = `songs/${songIndex + 1}.mp3`;
// //             masterSongName.innerText = songs[songIndex].songName;
// //             audioElement.currentTime = 0;
// //             audioElement.play();
// //             gif.style.opacity = 1;
// //             masterPlay.classList.remove('fa-play-circle');
// //             masterPlay.classList.add('fa-pause-circle');
// //         }

// //         // Update the currently playing song element
// //         currentSongElement = e.target;
// //     });
// // });

// let currentSongElement = null; // Track the currently playing song element

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         if (currentSongElement !== null && currentSongElement !== e.target) {
//             // Stop the currently playing song
//             currentSongElement.classList.remove('fa-pause-circle');
//             currentSongElement.classList.add('fa-play-circle');
//             audioElement.pause();
//             gif.style.opacity = 0;
//         }

//         if (audioElement.paused || audioElement.src !== `songs/${songIndex + 1}.mp3`) {
//             // Start playing a new song
//             songIndex = parseInt(e.target.id);
//             const songItem = e.target.closest('.songItem');
//             const songNameElement = songItem.querySelector('.animation1');
//             songNameElement.classList.remove('animation1');
//             songNameElement.classList.add('songName1');
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElement.src = `songs/${songIndex + 1}.mp3`;
//             masterSongName.innerText = songs[songIndex].songName;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             gif.style.opacity = 1;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//         }

//         // Update the currently playing song element
//         currentSongElement = e.target;
//     });
// });


// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let previousSongIndex = -1;
let currentTime=0;
let audioElement = new Audio();
audioElement.autoplay = false;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
const songItemHeight = 45; 

let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven- My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Function to play the selected song
// const playSong = (index) => {
//     audioElement.src = songs[index].filePath;
//     masterSongName.innerText = songs[index].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 1;
//     songIndex = index;

//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     });

// };


function CheckSong (index)  {
    if (previousSongIndex === index) {
        return audioElement.currentTime; // If it's the same song, return the current time
    } else {
        // If it's a different song, return 0
        previousSongIndex = index; // Update the previousSongIndex
        return 0;
    }
}



const playSong = (index) => {
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;

  

    audioElement.currentTime = CheckSong(index);
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    songIndex = index;
   

    // Update the icon classes for songItemPlay elements
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
        if (i === index) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
        } else {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        }
    });
    Array.from(document.getElementsByClassName('songName')).forEach((element, i) => {
        if (i === index) {
            element.classList.remove('animation1');
            element.classList.add('songName1');
        } 
        else {
            element.classList.remove('songName1');
            element.classList.add('animation1');
        }
    });
    const container = document.querySelector('.songItemContainer');
    const scrollTop = songIndex * songItemHeight-100;
    const scrollDuration = 9000;
    // Scroll the container to bring the currently playing song into view
    container.scrollTop = scrollTop ;
    container.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
        duration: scrollDuration,
    });
};

const pauseSong = (index) => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {


        if (i === index) {
             element.classList.remove('fa-pause-circle');
             element.classList.add('fa-play-circle');}
             
      
        // } else {
        //     element.classList.remove('fa-play-circle');
        //     element.classList.add(' fa-pause-circle');
        // }
    });
    Array.from(document.getElementsByClassName('songName')).forEach((element, i) => {
        if (i === index) {
            element.classList.remove(' songName1');
            element.classList.add('animation1');
        }
        //  else {
        //     element.classList.remove('animation1');
        //     element.classList.add('songName1');
        // }
    });

}


// Event listener for the master play/pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        playSong(songIndex);
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

        pauseSong(songIndex);
    }
});

// Event listener for the progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    currentTime = audioElement.currentTime;
});

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

// Event listener for the next song button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songIndex);
});

// Event listener for the previous song button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});

// Event listener for individual song play buttons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index !== songIndex) {
            playSong(index);
        }

    });
});

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            playSong(songIndex);
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
        } else {
            audioElement.pause();
            // element.classList.remove('fa-pause-circle');
            // element.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            pauseSong(songIndex);
        }

    });
});
const volumeControl = document.getElementById('volume');
audioElement.volume = volumeControl.value;
volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value;
});