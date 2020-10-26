import Playlist_song from '../models/playlist_song';

export async function createPlaylistSongs(req, res) {
    const { playlist_id, song_id } = req.body;
    try {
        let newPlaylist_song = await Playlist_song.create({
            playlist_id,
            song_id
        }, {
            fields: ['playlist_id, song_id']
        });
    if (newPlaylist_song) {
        return res.json({
            message: 'Track in playlist created successfully',
            data: newPlaylist_song
        });
    }
    } catch (err) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somenthing goes wrong' + err
            }
        });
    }
}

export async function getPlaylistSongs(req, res) {
    try {
         const playlistSongs = await Playlist_song.findAll();
         res.json({
             data: playlistSongs
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

export async function deletePlaylistSongs(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Playlist_song.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Track in playlist deleted',
            count: deleteRowCount
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