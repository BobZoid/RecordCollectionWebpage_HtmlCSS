
const form = document.querySelector("#myForm");
const artistName = document.querySelector("#artistName");
const albumName = document.querySelector("#albumName");
const songAmount = document.querySelector("#songAmount");
const youTubeLink = document.querySelector("#youTubeLink");
const review = document.querySelector("#review");
const songlist = document.querySelector("#songlist");

let collection = [];

document.getElementById("enKnapp").onclick = function addRecord() {
    let newRecord = {
        Artist: artistName.value,
        Album: albumName.value,
        Tracks: songAmount.value,
        Youtube: youTubeLink.value,
        About: review.value,
        Songlist: songlist.value
    };

    if (newRecord.Artist!== "" && newRecord.Album!== "" && newRecord.Tracks!=="") {

        collection.push(newRecord);
        let jsonCollection = JSON.stringify(collection);

        localStorage.setItem("recordCollection", jsonCollection);



        showRecords(newRecord.Artist, newRecord.Album);
    } else {
        alert("Yngwie says: \"YOU BROUGHT ON THE FUCKING FURAY BY NOT FILLING IN ALL REQUIRED FIELDS!!!\"");

    }
    return false;
}


function showRecords(artist, album) {
    const table = document.querySelector("section").querySelector("table");
    let row = table.insertRow(1);
    let artistCell = row.insertCell(0);
    let albumCell = row.insertCell(1);
    artistCell.innerHTML = artist;
    albumCell.innerHTML = album;
}

/*
    const recordList = document.createElement("ul");


    for (let i = 0; i < localRecords.length; i++) {
        const singleRecord = document.createElement("li")
        console.log(localRecords[i].Artist + "-" + localRecords[i].Album);
        singleRecord.textContent = localRecords[i].Artist + "-" + localRecords[i].Album;
        recordList.appendChild(singleRecord);
    }

    table.appendChild(recordList)
    section.appendChild(table);

    }


    function fetchJSON() {

        let jsonData;
//under detta!!!
        fetch("http://localhost")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                jsonData = data;
            });

        return jsonData;
    }



    return false }





/*
    outputForm.setAttribute('style', 'white-space: pre;');
    outputForm.textContent = "Recipe " + recipe.Name + " Successfully Added";
    displayAddedRecipes(storedRecipes);


    document.getElementById("formReg").reset();

    return false;

}

/* 'use strict';


let recordCollection = [];


function addRecord(event){

    event.preventDefault();


    let newRecord = {
        Artist: artistName.value,
        Album: albumName.value,
        Tracks: songAmount.value,
        Youtube: youTubeLink.value,
        About: review.value,
        Songlist: songlist.value
    };

    recordCollection.push(newRecord);

    localStorage.setItem("collection", JSON.stringify(form));
    let savedRecord = JSON.parse(localStorage.getItem("recordCollection"));

    //Kontrollerar i konsollen
    console.log(savedRecord)

    outputForm.setAttribute('style', 'white-space: pre;');
    outputForm.textContent = "Album " + newRecord.Album + " by " + newRecord.Artist + " Successfully Added";
}

form.addEventListener("submit", addRecord, false);

function fetchJSON() {

    let jsonData;

    fetch("data/data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            jsonData = data;
        });

    return jsonData;
} */