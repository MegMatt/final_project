let myData={};

function fetchData() {
    comicNumber = Math.floor(Math.random()*3000)+1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
    .then (res => {
        if (res.ok) {
            return res.json();
        }
        else{
            console.log(res);
        }
    })

    .then(res => {
        myData = res;
        console.log(myData);

        //title
        document.getElementById("title").innerHTML = myData.title;

        //image
        document.getElementById("comic").src = myData.img;
        document.getElementById("comic").setAttribute("alt", myData.alt);

        //date
        let m = myData.month;
        let d = myData.day;
        let y = myData.year;

        document.getElementById("date").innerHTML = (m + "/" + d + "/"+ y);
    })

    .catch(error => {console.log(error)});
}

document.getElementById("generate").addEventListener("click", fetchData);


fetchData();

