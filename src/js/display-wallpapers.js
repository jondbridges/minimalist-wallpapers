export default (urls) => {
  var elem = document.querySelector('#wallpapers');
  elem.innerHTML = urls.map(url => `<img src="${url}">`).join("\n");
};
