
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let byArtist = document.getElementById("artist").value.trim().toLowerCase();
    let byTitle = document.getElementById("title").value.trim().toLowerCase();
    let byAlbum = document.getElementById("album").value.trim().toLowerCase();
    let byGenre = document.getElementById("genre").value;

    if (byArtist === "" && byTitle === "" && byAlbum === "" && byGenre === "Genre") {
        window.alert("Please enter the search criteria");
        return false;
    }
    clearAllRows();
    hideTable();
    allMusicTracks.filter(track => {
        let matchWithArtist = byArtist !== "" && track.artist.toLowerCase().indexOf(byArtist) !== -1;
        let matchWithTitle = byTitle !== "" && track.title.toLowerCase().indexOf(byTitle) !== -1;
        let matchWithAlbum = byAlbum !== "" && track.album.toLowerCase().indexOf(byAlbum) !== -1;
        let matchWithGenre = byGenre !== "Genre" && track.genre === byGenre;

        if (matchWithArtist || matchWithTitle || matchWithAlbum || matchWithGenre) {
            return true;
        } else {
            return false;
        }
    }).forEach(addMusicTrack);
});

function showTable() {
    document.getElementById("musicTable").classList.remove("hidden");
}

function hideTable() {
    document.getElementById("musicTable").classList.add("hidden");
}

function addMusicTrack(track) {
    showTable();
    let table = document.getElementById("musicTable");
    let row = table.insertRow();
    let artist = row.insertCell(0);
    let download = row.insertCell(1);
    let favourite = row.insertCell(2);
    let time = row.insertCell(3);
    let title = row.insertCell(4);
    let album = row.insertCell(5);
    let genre = row.insertCell(6);
    let rating = row.insertCell(7);
    artist.innerHTML = track.artist;
    time.innerHTML = track.time;
    title.innerHTML = track.title;
    album.innerHTML = track.album;
    genre.innerHTML = track.genre;
    rating.innerHTML = track.ratings;
    download.innerHTML = "<button class='btn btn-sm'><i class='fas fa-cloud-download-alt'></i></button>";
    favourite.innerHTML = "<button class='btn btn-sm'><i class='fas fa-heart'></i></button>";

    favourite.addEventListener("click", function () {
        let favouriteTitle = document.getElementById(`favorite_${track.id}`);
        if (favouriteTitle === null) {
            addTrackToFavourites(track.id);
        }
    });

    download.addEventListener("click", function () {
        window.alert("Download started");
    });
}

function clearAllRows() {
    const tableHeaderRowCount = 1;
    const table = document.getElementById("musicTable");
    const rowCount = table.rows.length;
    for (let i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

function addTrackToFavourites(trackId) {
    let favoriteTitle = document.createElement("div");
    favoriteTitle.setAttribute("id", `favorite_${trackId}`);
    favoriteTitle.classList.add("card");
    favoriteTitle.innerHTML = `<img class="card-img-top" src="images/${trackId}.jpg" alt="Card image cap">`;
    favoriteTitle.addEventListener("click", function () {
        removeTrackFromFavourites(trackId);
    });
    let favourites = document.getElementById("favorites");
    favourites.appendChild(favoriteTitle);
}

function removeTrackFromFavourites(trackId) {
    let favouriteTitle = document.getElementById(`favorite_${trackId}`);
    if (favouriteTitle !== null) {
        let favourites = document.getElementById("favorites");
        favourites.removeChild(favouriteTitle);
    }
}

const allMusicTracks = [
    {
        id: 1,
        artist: "Keith Urban & P!nk",
        time: "3:35",
        title: "One Too Many ",
        album: "The Speed Of Now",
        genre: "Country",
        ratings: 4
    },
    {
        id: 2,
        artist: "Luke Combs",
        time: "4:35",
        title: "Without You",
        album: "What you see",
        genre: "Country",
        ratings: 4
    },
    {
        id: 3,
        artist: "Andrew Jannakos",
        time: "4:15",
        title: "Gone Too Soon",
        album: "Gone Too Soon Andrew Jannakos",
        genre: "Country",
        ratings: 3.5
    },
    {
        id: 4,
        artist: "Eddie Bower",
        time: "4:15",
        title: "This belongs",
        album: "The World",
        genre: "Country",
        ratings: 3.5
    },
    {
        id: 5,
        artist: "Sam Smith",
        time: "4:15",
        title: "Diamonds",
        album: "Diamonds Sam Smith",
        genre: "Pop",
        ratings: 3
    },
    {
        id: 6,
        artist: "Cardi B",
        time: "2:30",
        title: "WAP (feat. Megan Thee Stallion)",
        album: "WAP",
        genre: "Hip-Hop",
        ratings: 4
    },
    {
        id: 7,
        artist: "Eric Church",
        time: "2:45",
        title: "Stick That in Your Country Song",
        album: "Stick That in Your Country Song Eric Church ",
        genre: "Country",
        ratings: 3.5
    },

    {
        id: 8,
        artist: "Blake Shelton",
        time: "4:40",
        title: "Happy Anywhere",
        album: "Happy Anywhere (feat. Gwen Stefani ",
        genre: "Classic",
        ratings: 4.5
    },
    {
        id: 9,
        artist: "Kygo & Donna Summer",
        time: "3:20",
        title: "Hot Stuff",
        album: "Hot Stuff",
        genre: "K-Pop",
        ratings: 5
    },
    {
        id: 10,
        artist: "Chris Stapleton",
        time: " 2:43 ",
        title: "Starting Over",
        album: "Starting Over Chris Stapleton",
        genre: "Pop",
        ratings: 5
    },
    {
        id: 11,
        artist: "BTS",
        time: " 3:43 ",
        title: "Dynamite (Slow Jam Remix)",
        album: "Dynamite (Slow Jam Remix) by BTS",
        genre: "K-Pop",
        ratings: 4.6
    },
    {
        id: 12,
        artist: "AJR",
        time: " 4:20 ",
        title: "Bang!",
        album: "Bang!",
        genre: "Pop",
        ratings: 4.1
    },
    {
        id: 13,
        artist: "BTS",
        time: " 2:50 ",
        title: "Dynamite (Retro Remix)",
        album: "Dynamite (Retro Remix) by BTS",
        genre: "K-Pop",
        ratings: 3.9
    },
    {
        id: 14,
        artist: "24kGoldn",
        time: " 3:50 ",
        title: "Mood (feat. iann dior)",
        album: "Mood",
        genre: "Hip-Hop",
        ratings: 4.6
    },
    {
        id: 15,
        artist: "Gabby Barrett",
        time: " 4:50 ",
        title: "I Hope",
        album: "I Hope (feat. Charlie Puth)",
        genre: "Classic",
        ratings: 4.6
    },
    {
        id: 16,
        artist: "Dan + Shay",
        time: "2:50 ",
        title: "I Should Probably Go To Bed",
        album: "Dan + Shay",
        genre: "Classic",
        ratings: 5
    },
    {
        id: 17,
        artist: "Justin Bieber",
        time: "3:45",
        title: "Holy",
        album: "Holy (feat. Chance the Rapper)",
        genre: "Pop",
        ratings: 5
    },
    {
        id: 18,
        artist: "Creige Hella Jonson",
        time: "3:45",
        title: "Conspirare",
        album: "The Singing Guitar",
        genre: "Jazz",
        ratings: 5
    },
    {
        id: 19,
        artist: "John Coltrane",
        time: "3:49",
        title: "Giant Steps",
        album: "Giant Steps",
        genre: "Jazz",
        ratings: 4.8
    },
    {
        id: 20,
        artist: "Katey Parry",
        time: "3:49",
        title: "Thousand years",
        album: "Thousand years",
        genre: "Romance",
        ratings: 4.8
    }
];
