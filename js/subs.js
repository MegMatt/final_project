let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../json/work.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj = projects;
        findProjectInJSON(projects);
        // parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}


//fetch data from json file

// let myData={};

// function fetchData() {
//     fetch(`/json/work.json`)
//     .then (res => {
//         if (res.ok) {
//             return res.json();
//         }
//         else{
//             console.log(res);
//         }
//     })

//     .then(res => {
//         myData = res;
//         console.log(myData);

//         //title
//         document.getElementById("title").innerHTML = myData.title;

//         //main image
//         document.getElementById("mainimg").src = myData.img;
//         document.getElementById("mainimg").setAttribute("mainimgalt", myData.alt);

//         //carosel images
//         const fetchimg = document.getElementById("images");
//         imagesElement.innerHTML = ""; // Clear any existing content
//         (myData.images || []).forEach((img, index) => {
//             const imgag = document.createElement("img");
//             imgTag.src = img || "default-image.jpg";
//             imgTag.alt = (myData.imagesalt && myData.imagesalt[index]) || `Default Image Alt ${index + 1}`;
//             imagesElement.appendChild(imgTag);
//         });


//         //collaborators
//     })

//     .catch(error => {console.log(error)});
// }


// fetchData();  


// image carosel
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
  replace.setAttribute('src', `/images/${image}`);
  replace.setAttribute('alt', desc[image]);
  thumbBar.appendChild(replace);  // Append replace, not newImage
  replace.addEventListener('click', e => { 
    displayedImage.src = e.target.src; 
    displayedImage.alt = e.target.alt; 
  });

}

