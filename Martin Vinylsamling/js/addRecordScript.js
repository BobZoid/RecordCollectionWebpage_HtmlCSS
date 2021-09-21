
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


fetch('json/collection.json').then(function(response) {
            return response.json();
        }).then(function(json) {
            let popular = json;
            const table = document.querySelector("text").querySelector("table");
            let row1 = table.insertRow(1);
            let row2 = table.insertRow(2);
            let row3 = table.insertRow(3);
            let row4 = table.insertRow(4);
            let row5 = table.insertRow(5);
            let row6 = table.insertRow(6);
            let artist = row1.insertCell(0);
            artist.innerHTML = "Artist:";
            let artistName = row1.insertCell(1);
            artistName.innerHTML = popular.Artist;
            let album = row2.insertCell(0);
            let albumName = row2.insertCell(1);
            album.innerHTML = "Album:";
            albumName.innerHTML = popular.Album;
            let tracks = row3.insertCell(0);
            let tracksAmount = row3.insertCell(1);
            tracks.innerHTML = "Tracks on record";
            tracksAmount.innerHTML = popular.Tracks;
            let youTube = row4.insertCell(0);
            let link = row4.insertCell(1);
            youTube.innerHTML = "Youtube Link:";
            link.innerHTML = popular.Youtube;
            let review = row5.insertCell(0);
            let reviewData = row5.insertCell(1);
            review.innerHTML = "Review:";
            reviewData.innerHTML = popular.About;
            let tracklist = row6.insertCell(0);
            let trackdata = row6.insertCell(1);
            tracklist.innerHTML = "Track List:";
            trackdata.innerHTML = popular.Songlist;
        });
