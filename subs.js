const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

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

