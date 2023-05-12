import './src/estilos.css'
import {songComponent, currentSongComponent} from './src/components'
import {getData} from './src/services'
import { removeAllChild, useLocalstorage } from './src/utils';

const tracklist = document.querySelector('#lista');
const currentSong = document.getElementById('current_song');

const storage = useLocalstorage('current_song');

getData(data => {

  removeAllChild(tracklist);

  data.map(song => {
    const songElement = songComponent(song);
    songElement.addEventListener('click', () => {
      const element = song
      storage.setItem(song)
      setCurrentSong(
        currentSongComponent(
          storage.getItem(element)
        )
      )
    }),
    tracklist.appendChild(songElement)
  });
});

const setCurrentSong = (child) => {
  removeAllChild(currentSong);
  currentSong.appendChild(child);
}

if (storage.getItem('current_song')) { 

  const data = storage.getItem('current_song');
  setCurrentSong(currentSongComponent(data));
}

else {
  getData(data => storage.setItem(data[0]))
}

