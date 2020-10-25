import Song_heard from '../models/songs_heard';

export async function counterSong_heard(req, res) {
    const { song_id, user_id } = req.body;
    const like = false;
    try {

        const song_heard = await Song_heard.findOne({
            attributes: ['id', 'song_id', 'user_id', 'like','playbacks', 'heard_at'],
            where: {
                song_id,
                user_id
            }
        });

        if (song_heard) {

            song_heard.playbacks += 1;
            song_heard.heard_at = Date.now();
            await  song_heard.save();

            return res.json({
                message: 'count +1',
                data: song_heard
            })
        }else{
            let newSongHeard = await Song_heard.create({
                song_id,
                user_id,
                like,
                heard_at: Date.now(),
                playbacks: 1
            },
                {
                    fields: ['song_id', 'user_id', 'like','playbacks'] 
                });
            if (newSongHeard) {
                return res.json({
                    message: 'new count +1',
                    data: newSongHeard
                });
                
            }
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
