
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

    collection.push(newRecord);
    console.log(JSON.stringify(collection));

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