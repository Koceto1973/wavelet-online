const addButtons = (arr) => {
  arr.forEach((item) => {
    document.getElementById('h').insertAdjacentHTML('beforeend', `<li><button>${item}</button></li>`);
  });
};

const init = () => {
  // clear all h-buttons, text, picture and joke
  document.getElementById('h').innerHTML = '';
  document.getElementById('text').textContent = '';
  document.getElementById('joke').textContent = '';
  // document.querySelector('picture').innerHTML = '';
};

// initialization
init();

// get all buttons
document.querySelectorAll('button').forEach((b) => {
  // add init listener to each v-button
  if (b.parentElement.parentElement.id !== 'h') {
    b.addEventListener('click', () => {
      // format all to default
      document.querySelectorAll('button').forEach((btn) => {
        btn.style.border = '1px solid mediumseagreen';
      });
      // format clicked to bolded border
      b.style.border = '3px solid mediumseagreen';
      init();
    });
  }
});

// add specific listener to each v-button
document.getElementById('Bio').addEventListener('click', () => {
  addButtons(['PersonalDetails', 'Background', 'CurrentStatus']);
});
document.getElementById('Programming').addEventListener('click', () => {
  addButtons(['C / C++', 'C#', 'Swift', 'HTML/CSS', 'JS / Node.js']);
});
document.getElementById('Science').addEventListener('click', () => {
  addButtons(['Math', 'Phisycs', 'CS']);
});
document.getElementById('Motivation').addEventListener('click', () => {
  addButtons(['Roots', 'Resources', 'Reality']);
});
document.getElementById('Objectives').addEventListener('click', () => {
  addButtons(['Short Term', 'Mid Term', 'Long Term']);
});
document.getElementById('Settings').addEventListener('click', () => {
  addButtons(['colors', 'font', 'effects']);
});
