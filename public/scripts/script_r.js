const text = {
  id: 'My name is Konstantin Kralev...',
  background: 'My working background is ...',
  current: 'From the end of 2014 I work as ...',
  ccpp: 'I met C and C++ at ...',
  csharp: 'After having familiarity with C++, I felt C# as ...',
  swift: 'It was the first couple of front end courses I took - IOS11 and Swift ...',
  html: 'The HTML/CSS course I took was ... ',
  js: 'I find really entertaining the way JS and Node.js work together ...',
  math: 'Math is a friend ...',
  physics: 'Physics is where math takes meaning ...',
  cs: 'Computer science has gone surprisingly far ...',
  roots: 'Thinking over a problem might be unpleasant, but the blessing to find the solution is a pure pleasure ...',
  resources: 'Time is precious ...',
  reality: 'Taking care of the family ...',
  shortterm: 'Completing the resume ...',
  midterm: 'Completing the Node.js master class ...',
  longterm: 'Learn more about databases and server side programming ...',
  colors: 'colors options ...',
  fonts: 'fonts options ...',
  effects: 'effects options ...',
};

const addButtons = (arr) => {
  arr.forEach((item) => {
    document.getElementById('h').insertAdjacentHTML('beforeend', `<li><button id=${item}>${item}</button></li>`);
  });
};

const addContent = (txt) => {
  document.getElementById('text').textContent = txt;
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
  addButtons(['ID', 'Background', 'Current']);
  document.getElementById('joke').textContent = 'The old man and the sea :)';
});
document.getElementById('Programming').addEventListener('click', () => {
  addButtons(['C/C++', 'C#', 'Swift', 'HTML/CSS', 'JS/Node.js']);
  document.getElementById('joke').textContent = 'Between Siri and Alexa :)';
});
document.getElementById('Science').addEventListener('click', () => {
  addButtons(['Math', 'Physics', 'CS']);
  document.getElementById('joke').textContent = 'Just a curiousity intoxication :)';
});
document.getElementById('Motivation').addEventListener('click', () => {
  addButtons(['Roots', 'Resources', 'Reality']);
  document.getElementById('joke').textContent = 'Harder than a rock :)';
});
document.getElementById('Objectives').addEventListener('click', () => {
  addButtons(['ShortTerm', 'MidTerm', 'LongTerm']);
  document.getElementById('joke').textContent = 'Gambling with the Gods :)';
});
document.getElementById('Settings').addEventListener('click', () => {
  addButtons(['colors', 'font', 'effects']);
  document.getElementById('joke').textContent = '... without the one, you actually need :)';
});

// h-buttons listeners
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
    // clear text
    document.getElementById('text').textContent = '';
    // switch the target request
    switch (id) {
      case 'ID':
        addContent(text.id);
        break;
      case 'Background':
        addContent(text.background);
        break;
      case 'Current':
        addContent(text.current);
        break;
      case 'C/C++':
        addContent(text.ccpp);
        break;
      case 'C#':
        addContent(text.csharp);
        break;
      case 'Swift':
        addContent(text.swift);
        break;
      case 'HTML/CSS':
        addContent(text.html);
        break;
      case 'JS/Node.js':
        addContent(text.js);
        break;
      case 'Math':
        addContent(text.math);
        break;
      case 'Physics':
        addContent(text.physics);
        break;
      case 'CS':
        addContent(text.cs);
        break;
      case 'Roots':
        addContent(text.roots);
        break;
      case 'Resources':
        addContent(text.resources);
        break;
      case 'Reality':
        addContent(text.reality);
        break;
      case 'ShortTerm':
        addContent(text.shortterm);
        break;
      case 'MidTerm':
        addContent(text.midterm);
        break;
      case 'LongTerm':
        addContent(text.longterm);
        break;
      case 'colors':
        addContent(text.colors);
        break;
      case 'font':
        addContent(text.fonts);
        break;
      case 'effects':
        addContent(text.effects);
        break;

      default:
    }
  }
});
