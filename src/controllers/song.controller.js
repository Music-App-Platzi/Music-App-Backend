import Song from '../models/song';
import { uploadFile } from '../controllers/upload.controller'

export async function getSongs(req, res) {
    try {
        const songs = await Song.findAndCountAll();
        res.json({
            data: songs
        })
    } catch (err) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Something goes wrong' + err
            }
        })
    }
} 

export async function getSongsById(req, res) {
    try {
        const { id } = req.params;
        const song = await Song.findOne({
            where:{
                id
            }
        });
        res.json({
            data: song
        })
    } catch (err) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Something goes wrong' + err
            }
        })
    }
}

export async function createSong(req, res) {
    try {        
        const { album_id, name, duration, genre } = req.body;
        let thumbnail,song_link

        if (req.files.thumbnail) {
            const uploadThumbnail = await uploadFile(req.files.thumbnail[0], 'thumbnail-songs/');
            thumbnail = uploadThumbnail.Location;
        }

        if (req.files.song) {
            const uploadSong = await uploadFile(req.files.song[0], 'songs/');
            song_link = uploadSong.Location;
        }
        
        
        let newSong = await Song.create({
            album_id,
            name,
            duration,
            song_link,
            thumbnail,
            genre
        },
            {
                fields: ['album_id', 'name', 'duration', 'song_link', 'thumbnail', 'genre']
            });
        if (newSong) {
            return res.json({
                message: 'Song created successfully',
                data: newSong
            });
        }
        
    } catch (err) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Something goes wrong' + err
            }
        });
    }
}

export async function updateSong(req, res) {
    try {

        const { id } = req.params;
        const { album_id, name, duration, genre } = req.body;

        var thumbnail, song_link;

        if (req.files.thumbnail) {
            const uploadThumbnail = await uploadFile(req.files.thumbnail[0], 'thumbnail-songs/');
            thumbnail = uploadThumbnail.Location;
        }

        if (req.files.song) {
            const uploadSong = await uploadFile(req.files.song[0], 'songs/');
            song_link = uploadSong.Location;
        }
        const data = await Song.findAll({
            attributes: ['id', 'album_id', 'name', 'duration', 'song_link', 'thumbnail', 'popularity', 'genre'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async Song => {
                await Song.update({
                    album_id,
                    name,
                    duration,
                    song_link,
                    thumbnail,
                    genre
                });
            })
        }

        return res.json({
            message: 'Song updated successfully',
            data: data
        })
    } catch (err) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Something goes wrong' + err
            }
        });
    }
}

export async function deleteSong(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Song.destroy({
            where: {
                id
            }
        });
        res.json({ 
            message: 'Song deleted',
            count: deleteRowCount
        })
    } catch (err) {
        res,status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Something goes wrong' + err
            }
        });

    }
}