const addButtons = (arr) => {
  arr.forEach((item) => {
    document.getElementById('h').insertAdjacentHTML('beforeend', `<li><button id=${item}>${item}</button></li>`);
  });
};

const addContent = (text) => {
  document.getElementById('text').textContent = text;
};

const init = () => {
  // clear all h-buttons, text, picture and joke
  document.getElementById('h').innerHTML = '';
  document.getElementById('text').textContent = '';
  document.getElementById('joke').textContent = '';
  // document.querySelector('picture').innerHTML = '';
};

export const ID = 'My name is Konstantin Kralev. I am 45 years old. I live and work in Burgas.';

export const Background = 'Background';

export const Current = 'Current';
