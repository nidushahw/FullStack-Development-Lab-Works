let socket = io();

socket.on('connect', () => {
    console.log('SOCKET - connected');
});
socket.on('disconnect', () => {
    console.log('SOCKET - disconnected');
});
socket.on('download-received', (id) => {
    console.log(`download received from server with id: ${id}`)
});

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
    filterAndLoadResults(byArtist, byTitle, byAlbum, byGenre);
});

const showTable = () => {
    document.getElementById("musicTable").classList.remove("hidden");
};

function hideTable() {
    document.getElementById("musicTable").classList.add("hidden");
}

const addMusicTrack = track => {
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
            handleFavoriteClick(track.id);
        }
    });

    download.addEventListener("click", function () {
        console.log("Download started");
        socket.emit('download', track.id);
    });
};

function clearAllRows() {
    const tableHeaderRowCount = 1;
    const table = document.getElementById("musicTable");
    const rowCount = table.rows.length;
    for (let i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

const removeTrackFromFavourites = trackId => {
    let favouriteTitle = document.getElementById(`favorite_${trackId}`);
    if (favouriteTitle !== null) {
        let favourites = document.getElementById("favorites");
        favourites.removeChild(favouriteTitle);
    }
};

const addTrackToFavourites = trackId => {
    let favoriteTitle = document.createElement("div");
    favoriteTitle.setAttribute("id", `favorite_${trackId}`);
    favoriteTitle.classList.add("card");
    favoriteTitle.innerHTML = `<img class="card-img-top" src="images/${trackId}.jpg" alt="Card image cap">`;
    favoriteTitle.addEventListener("click", function () {
        removeTrackFromFavourites(trackId);
    });
    let favourites = document.getElementById("favorites");
    favourites.appendChild(favoriteTitle);
};

const filterAndLoadResults = (byArtist, byTitle, byAlbum, byGenre) => {
    let url = `/search/filterMusic?genre=${byGenre}&artist=${byArtist}&title=${byTitle}&album=${byAlbum}`;
    fetch(url)
        .then(
            (response) => {
                if (response.status !== 200) {
                    alert(`Looks like there was a problem. Status Code: ${response.status}`);
                    return;
                }
                response.json().then(function (data) {
                    data.forEach(addMusicTrack);
                });
            }
        )
        .catch((err) => {
            alert(`Looks like there was a problem: Error ${err}`);
        });
}

const handleFavoriteClick = (id) => {
    let url = `/search/favorite?id=${id}`;
    fetch(url)
        .then(
            (response) => {
                if (response.status !== 200) {
                    alert(`Looks like there was a problem. Status Code: ${response.status}`);
                    return;
                }
                response.json().then(function (song) {
                    if (!song) {
                        console.log(`song ${id} not found, cannot add to favorites`);
                        return;
                    }
                    addTrackToFavourites(id);
                });
            }
        )
        .catch((err) => {
            alert(`Looks like there was a problem: Error ${err}`);
        });
}
