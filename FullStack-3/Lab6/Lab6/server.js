const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const musicFactory = require('./musicFactory').musicFactory;

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

musicFactory.init();
musicFactory.getMusicData();
musicFactory.addFavorite(1);
musicFactory.downloadSong(5);
musicFactory.filterMusic("Hard Rock");
musicFactory.filterMusic("Country Rock");
musicFactory.filterMusic("Hip Hop");
musicFactory.filterMusic("Hard Rock", "Journey");
musicFactory.filterMusic("", "Jason Aldean");


app.get('/musicData', (req, res) => {
    res.status(200);
    res.json(musicFactory.getMusicData());
});

app.get('/filterMusic', (req, res) => {
    let genre = req.query.genre;
    let artist = req.query.artist;
    let title = req.query.title;
    let album = req.query.album;
    res.status(200);
    res.json(musicFactory.filterMusic(genre, artist, title, album));
});

app.get('/favorite', (req, res) => {
    let id = req.query.id;
    res.status(200);
    res.json(musicFactory.addFavorite(parseInt(id)));
});

app.post('/download', (req, res) => {
    let id = req.body.id;
    let song = musicFactory.downloadSong(parseInt(id));
    res.send(`Download song with Id ${id}`);
    res.status(200);
});

app.listen(port);