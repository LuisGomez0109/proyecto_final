export const songComponent = (song, event = () => {}) => {
  const div = document.createElement('div');
  div.addEventListener('click', () => {
    event(song.title);
  });
  div.innerHTML = `
  <div class="flex flex-row gap-2 items-center p-2 cursor-pointer">
  <div class="h-10">
  <img src="${song.path.front}" class="object-cover h-full rounded-md">
  </div>
  <div class="text-white flex flex-col w-full">
  <span class="font-bold">${song.title}</span>
  <span>${song.author}</span>
  </div>
  <div class="duracion">
  <span class="text-white">${song.duration}</span>
  </div>
  </div>
  `;
  return div;
};

export const currentSongComponent = (song) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="flex flex-row gap-2 items-center p-2 bg-white w-full mt-5" id="cs">
    <div class="h-15">
    <img src="${song.path.front}" class="object-cover h-full bg-black p-2 rounded-md" id="currentsongimg">
    </div>
    <div class="text-black flex flex-col w-full">
    <span class="font-bold">${song.title}</span>
    <span>${song.author}</span>
    </div>
    </div>
      <audio class="audionoresponsive" src="${song.path.audio}" controls autoplay>
  `;
  return div
}

