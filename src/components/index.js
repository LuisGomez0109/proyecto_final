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
  <div>
  <span class="text-white">${song.duration}</span>
  </div>
  </div>
  `;
  return div;
};

export const currentSongComponent = (song) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="flex flex-row gap-2 items-center p-2 bg-white">
    <div class="h-10">
    <img src="${song.path.front}" class="object-cover h-full">
    </div>
    <div class="text-white flex flex-col w-full">
    <span class="font-bold">${song.title}</span>
    <span>${song.author}</span>
    </div>
    <div>
    <span class="text-white">${song.duration}</span>
    </div>
    </div>
      <audio src="${song.path.audio}" controls autoplay>
  `;
  return div
}

