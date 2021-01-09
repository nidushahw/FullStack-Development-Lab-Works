const express = require('express');
const bodyParser = require("body-parser")
const router = express.Router();
const musicFactory = require('../modules/musicFactory');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/filterMusic', (req, res) => {
    let genre = req.query.genre;
    let artist = req.query.artist;
    let title = req.query.title;
    let album = req.query.album;
    res.status(200);
    res.json(musicFactory.filterMusic(genre, artist, title, album));
});

router.get('/favorite', (req, res) => {
    let id = req.query.id;
    res.status(200);
    res.json(musicFactory.addFavorite(parseInt(id)));
});

router.get('/musicData', (req, res) => {
    res.status(200);
    res.json(musicFactory.getMusicData());
});

router.post('/download', (req, res) => {
    let id = req.body.id;
    let song = musicFactory.downloadSong(parseInt(id));
    res.send(`Download song with Id ${id}`);
    res.status(200);
});

module.exports = router;