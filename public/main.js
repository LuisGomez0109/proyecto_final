import './src/estilos.css'
import {songComponent, currentSongComponent} from '../src/components'
import {getData} from '../src/services'
import { removeAllChild, useLocalstorage } from '../src/utils';

const tracklist = document.querySelector('#lista');
const currentSong = document.getElementById('current_song');

const storage = useLocalstorage('current_song');

getData(data => {

  removeAllChild(tracklist);

  data.map(song => {
    const songElement = songComponent(song);

    songElement.addEventListener('click', () => {

      const event = song


      // Observo que en este caso, tienes una addEventListener sin ninguna acción
      // Es un EventListener vacío
      // Agrega la funcionalidad


      // Le asigno el dato al local estorage para que se guarde
      // al refrescar el navegador
      storage.setItem(song)

      // Ahora cambio la canción y la busco 
      // desde el localstorage con la funcion que creé
      // En otras palabras:
      // La meto en el localStorage y luego la busco
      // RECUERDA: En el localStorage guardo el objeto con los datos de la canción
      setCurrentSong(
        currentSongComponent(
          storage.getItem()
        )
      )


    });
    tracklist.appendChild(songElement);
  });
});

const setCurrentSong = (child) => {
  removeAllChild(currentSong);
  currentSong.appendChild(child);
}




// Asegurarse de proporcionar una clave para getItem
if (storage.getItem('current_song')) { 
  // Utilizar la misma clave que en getItem
  const data = storage.getItem('current_song');
  setCurrentSong(currentSongComponent(data));
}
// Faltaba asignarle un valor inicial al localStorage
// La funcion para manejarla está creada, pero no se le ha asignado 
// un valor todavía.
// Se lo asigno solo si no existe
else {
  getData(data => storage.setItem(data[0]))
}

