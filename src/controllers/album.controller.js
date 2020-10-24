import Album from '../models/album';

export async function getAlbums(req, res) {
    try {
        const users = await Album.findAll();
        res.json({
            data: users
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        })
    }
}

export async function createAlbum(req, res) {
    const { artist_id, name, release_date } = req.body;
    
    try {
        let newAlbum = await Album.create({
            artist_id,
            name,
            release_date,
        },
            {
                fields: ['artist_id', 'name', 'release_date'] 
            });
        if (newAlbum) {
            return res.json({
                message: 'Album created successfully',
                data: newAlbum
            });
        }
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }

}


export async function updateAlbum(req, res) {
    try {
        const { id } = req.params;
        const { artist_id, name, release_date } = req.body;
        const data = await Album.findAll({
            attributes: ['id', 'artist_id', 'name', 'release_date'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async Album => {
                await Album.update({
                    artist_id,
                    name,
                    release_date,
                });
            })
        }

        return res.json({
            message: 'Album Updated Succefully',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }
}

export async function deleteAlbum(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Album.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Album deleted',
            count: deleteRowCount
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }
}
