
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
