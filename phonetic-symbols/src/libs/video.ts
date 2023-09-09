
function getUrl(file: any) {
  let url: string;
  if (window.URL && window.URL.createObjectURL) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL && window.webkitURL.createObjectURL) {
    url = window.webkitURL.createObjectURL(file)
  } else {
    url = '';
  }
  return url;
}


function canPlay(type: any) {
  let a = document.createElement('audio');
  return !!(a.canPlayType && a.canPlayType(type).replace(/no/, ''));
}


function getSongs(e: any) {
  //$("#mask").hide();
  //$("#startup").hide();
  const queue = [];
  const mp3 = canPlay('audio/mpeg;'), ogg = canPlay('audio/ogg; codecs="vorbis"');
  let url: string;
  for (let i = 0; i < e.target.files.length; i++) {
    const file = e.target.files[i];

    const path = file.webkitRelativePath || file.mozFullPath || file.name;
    if (path.indexOf('.AppleDouble') != -1) {
      // Meta-data folder on Apple file systems, skip
      continue;
    }
    const size = file.size || file.fileSize || 4096;
    if (size < 4095) {
      // Most probably not a real MP3
      continue;
    }

    if (file.name.indexOf('mp3') != -1) { //only does mp3 for now
      if (mp3) {
        queue.push(file);
      }
    }
    if (file.name.indexOf('ogg') != -1 || file.name.indexOf('oga') != -1) {
      if (ogg) {
        queue.push(file);
      }
    }

    url = getUrl(file);
    localStorage.setItem(file.name, url);
  }
}

export default getSongs;
