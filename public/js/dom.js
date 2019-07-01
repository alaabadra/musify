const songsContaner = document.querySelector('.songsContaner');
window.onload = () => {
    request('/getSongs', 'GET', null, (err, result) => {
        const songs = result.rows;
        songs.forEach(element => {
            const elementContaner = document.createElement('div');
            const songName = document.createElement('h2')
            const singerName = document.createElement('h2')
            songName.textContent = ` Singer:   ${element.singername}`;
            singerName.textContent = `Song:   ${element.songname}`;
            elementContaner.appendChild(songName);
            elementContaner.appendChild(singerName);
            songsContaner.appendChild(elementContaner);
            elementContaner.classList.add('elementContaner');
            songsContaner.classList.add('songContaner');
            singerName.classList.add('singerName');
        });
    })
}