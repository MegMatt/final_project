// creating subdomain
let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

//fetching data frm json file
fetch('../json/work.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        proj = projects;
        findProjectInJSON(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

//locating the projects in json file
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

//creating the subdomain
function buildPage(project){
    console.log(project);
    // name and abstract
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
    document.getElementById('project-abstract').textContent = project.abstract;


    //main image and image carosel
    const displayedImage = document.querySelector(".displayed-img");
    const thumbBar = document.querySelector(".thumb-bar");

    //setting the main image
    displayedImage.src = `../images/${project.images[0]}`; //index of 0 for the first image
    displayedImage.alt = project.alts[0] || "Project main image"; //adding first image to the first spot of carasol

    //using a loop to add remaining images to carosel
    for (let i = 0; i < project.images.length; i++) {
        const thumb = document.createElement("img"); //image that appears
        thumb.src = `../images/${project.images[i]}`; //find image
        thumb.alt = project.alts[i] || `Thumbnail ${i + 1}`; //find alt text

        // Add a click event to update the main image
        thumb.addEventListener("click", function () {
            displayedImage.src = thumb.src; //transfer images
            displayedImage.alt = thumb.alt; //transfer alts
        });

        thumbBar.appendChild(thumb); //sending it to html
    }


}


