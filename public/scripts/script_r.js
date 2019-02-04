const addButtons = (arr) => {
  arr.forEach((item) => {
    document.getElementById('h').insertAdjacentHTML('beforeend', `<li><button id=${item}>${item}</button></li>`);
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

// v-buttons init listeners
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

// v-buttons specific listeners
document.getElementById('Bio').addEventListener('click', () => {
  addButtons(['PersonalDetails', 'Background', 'CurrentStatus']);
  document.getElementById('joke').textContent = 'The old man and the sea :)';
});
document.getElementById('Programming').addEventListener('click', () => {
  addButtons(['C / C++', 'C#', 'Swift', 'HTML/CSS', 'JS / Node.js']);
  document.getElementById('joke').textContent = 'Between Siri and Alexa :)';
});
document.getElementById('Science').addEventListener('click', () => {
  addButtons(['Math', 'Phisycs', 'CS']);
  document.getElementById('joke').textContent = 'Just a curiousity intoxication :)';
});
document.getElementById('Motivation').addEventListener('click', () => {
  addButtons(['Roots', 'Resources', 'Reality']);
  document.getElementById('joke').textContent = 'Harder than a rock :)';
});
document.getElementById('Objectives').addEventListener('click', () => {
  addButtons(['Short Term', 'Mid Term', 'Long Term']);
  document.getElementById('joke').textContent = 'Gambling with the Gods :)';
});
document.getElementById('Settings').addEventListener('click', () => {
  addButtons(['colors', 'font', 'effects']);
  document.getElementById('joke').textContent = '... without the one, you actually need :)';
});

// h-buttons init listeners
document.getElementById('sectionHeader').addEventListener('click', (event) => {
  const { id } = event.target;
  if (id !== 'h') { // button was pressed
    // format all h-buttons
    const vButtons = document.getElementById('h').children;
    Array.prototype.forEach.call(vButtons, (child) => {
      child.firstChild.style.border = '1px solid mediumseagreen';
    });
    // format the target button correctly
    document.getElementById(id).style.border = '3px solid mediumseagreen';
    // switch the target request
  }
});
