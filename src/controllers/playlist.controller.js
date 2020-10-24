import Playlist from '../models/playlist';

export async function getPlaylists(req, res) {
    try {
        const playlists = await Playlist.findAll();
        res.json({
            data: playlists
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

export async function getPlaylistById(req, res) {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findOne({
            where:{
                id
            }
        });
        res.json({
            data: playlist
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

export async function createPlaylist(req, res) {
    const { user_id, name, thumbnail } = req.body;

    try {
        let newPlaylist = await Playlist.create({
            user_id,
            name,
            thumbnail
        },
            {
                fields: ['name']
            });
        if (newPlaylist) {
            return res.json({
                message: 'Playlist created successfully',
                data: newPlaylist
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

export async function updatePlaylist(req, res) {
    try {
        const { id } = req.params;
        const { user_id, name, thumbnail  } = req.body;
        const data = await Playlist.findAll({
            attributes: ['id', 'user_id', 'name', 'thumbnail'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async Playlist => {
                await Playlist.update({
                    user_id,
                    name,
                    thumbnail
                });
            })
        }

        return res.json({
            message: 'Playlist updated successfully',
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

export async function deletePlaylist(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Playlist.destroy({
            where: {
                id
            }
        });
        res.json({ 
            message: 'Playlist deleted',
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