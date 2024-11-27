const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['cat.png', 'chick.png', 'kitty.png'];

/* Declaring the alternative text for each image file */
const desc = {
    'cat.png': "cat",    
    'chick.png': "chick",
    'kitty.png': "kitty",

};

/* Looping through images */
for (const image of images) {
  const replace = document.createElement('img');
  replace.setAttribute('src', `images/${image}`);
  replace.setAttribute('alt', desc[image]);
  thumbBar.appendChild(replace);  // Append replace, not newImage
  replace.addEventListener('click', e => { 
    displayedImage.src = e.target.src; 
    displayedImage.alt = e.target.alt; 
  });

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,.7)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
