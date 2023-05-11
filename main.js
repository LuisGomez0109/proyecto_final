import './src/estilos.css'
import {songComponent, currentSongComponent} from './src/components'
import {getData} from './src/services'
import { removeAllChild, useLocalstorage } from './src/utils';

const tracklist = document.querySelector('#lista');
const currentSong = document.getElementById('current_song');
const storage = useLocalstorage('current_song');

getData((song) => {
  removeAllChild(tracklist);
  song.map((div) => {
    const songElement = songComponent(div);
    songElement.addEventListener('click', () => {
    });
    tracklist.appendChild(songElement);
  });
});

const setCurrentSong = (child) => {
  removeAllChild(currentSong);
  currentSong.appendChild(child);
}

if (storage.getItem('#current_song')) { // Asegurarse de proporcionar una clave para getItem
  const data = storage.getItem('#current_song'); // Utilizar la misma clave que en getItem
  setCurrentSong(currentSongComponent(data));
}
