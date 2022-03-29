const sounds = ['title1', 'title2', 'title3', 'title4', 'title5']


//get all sound and then create a new elemnet with the song title,
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    btn.innerText = sound
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}