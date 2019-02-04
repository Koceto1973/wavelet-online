// get all buttons
document.querySelectorAll('button').forEach((b) => {
  // add listener to each v-button
  if (b.parentElement.parentElement.id !== 'h') {
    b.addEventListener('click', () => {
      // format all to default
      document.querySelectorAll('button').forEach((btn) => {
        btn.style.border = '1px solid mediumseagreen';
      });
      // format clicked to bolded border
      b.style.border = '3px solid mediumseagreen';
      // clear all h-buttons, text, picture and joke
      document.getElementById('h').innerHTML = '';
      document.getElementById('text').textContent = '';
      document.getElementById('joke').textContent = '';
      document.querySelector('picture').innerHTML = '';
    });
  }
});

