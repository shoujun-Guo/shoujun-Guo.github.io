// 音乐列表数据
const songs = [
    {
        title: "青花",
        artist:"周传雄",
        url: "/music/周传雄-青花.mp3",
    },
    {
        title: "听妈妈的话",
        artist:"周杰伦",
        url: "/music/听妈妈的话.mp3",
    },
    {
        title: "夜的第七章",
        artist:"周杰伦",
        url: "/music/周杰伦&潘儿-夜的第七章.mp3",
    },
    {
        title: "周杰伦&张惠妹-不该",
        artist:"周杰伦",
        url: "/music/周杰伦&张惠妹-不该.mp3",
    },
    {
        title: "周杰伦&梁心颐-珊瑚海",
        artist:"周杰伦",
        url: "/music/周杰伦&梁心颐-珊瑚海.mp3",
    },
    {
        title: "周杰伦 - 上海一九四三",
        artist:"周杰伦",
        url: "/music/周杰伦 - 上海一九四三.mp3",
    },


];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playlistElement = document.getElementById('playlist');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const songCover = document.getElementById('current-song-img');

// 初始化播放器和列表
function loadPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${song.title} - ${song.artist}`;
        // li.dataset.index = index;
        li.addEventListener('click', () => playSong(index));
        playlistElement.appendChild(li);
    });
}

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    // songCover.src = song.cover;
    audioPlayer.src = song.url;
}

function playSong(songIndex) {
    currentSongIndex = songIndex;
    loadSong(currentSongIndex);

    // 播放选中的歌曲
    audioPlayer.play();
    updatePlaylistUI();
}

// 更新UI状态（高亮当前歌曲）
function updatePlaylistUI() {
    const listItems = playlistElement.getElementsByTagName('li');
    Array.from(listItems).forEach(item => item.classList.remove('selected'));
    listItems[currentSongIndex].classList.add('selected');
}

// 播放和暂停
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "⏸️"; // 切换为暂停按钮
    } else {
        audioPlayer.pause();
        playBtn.textContent = "▶️"; // 切换为播放按钮
    }
});

// 上一首
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    playSong(currentSongIndex);
});

// 下一首
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    playSong(currentSongIndex);
});

// 初始化
loadPlaylist();
loadSong(currentSongIndex);
updatePlaylistUI();
