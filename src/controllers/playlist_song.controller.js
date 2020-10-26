import Playlist_song from '../models/playlist_song';

export async function createPlaylist(req, res) {
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
            message: 'Playlist created successfully',
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

export async function updatePlaylist(req, res) {
    try {
        const { id } = req.params;
        const { playlist_id, song_id } = req.body;

        const data = await Playlist_song.findAll({
            attributes: ['id', 'playlist_id', 'song_id'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async Playlist_song => {
                await Playlist_song({
                    playlist_id,
                    song_id
                });
            })
        }

        return res.json({
            message: 'Playlist updated succesfully',
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