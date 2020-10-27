"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counterSong_heard = counterSong_heard;
exports.like = like;

var _songs_heard = _interopRequireDefault(require("../models/songs_heard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function counterSong_heard(req, res) {
  const {
    song_id,
    user_id
  } = req.body;
  const like = false;

  try {
    const song_heard = await _songs_heard.default.findOne({
      attributes: ['id', 'song_id', 'user_id', 'like', 'playbacks', 'heard_at'],
      where: {
        song_id,
        user_id
      }
    });

    if (song_heard) {
      song_heard.playbacks += 1;
      song_heard.heard_at = Date.now();
      await song_heard.save();
      return res.json({
        message: 'count +1',
        data: song_heard
      });
    } else {
      let newSongHeard = await _songs_heard.default.create({
        song_id,
        user_id,
        like,
        heard_at: Date.now(),
        playbacks: 1
      }, {
        fields: ['song_id', 'user_id', 'like', 'playbacks']
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

async function like(req, res) {
  try {
    const {
      song_id,
      user_id,
      like
    } = req.body;
    const likeSong = await _songs_heard.default.findOne({
      attributes: ['id', 'song_id', 'user_id', 'like', 'playbacks', 'heard_at'],
      where: {
        song_id,
        user_id
      }
    });

    if (likeSong) {
      likeSong.like = like;
      await likeSong.save();
      return res.json({
        message: 'liked',
        data: likeSong
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
} //
//export async function deleteAlbum(req, res) {
//    try {
//        const { id } = req.params;
//        const deleteRowCount = await Album.destroy({
//            where: {
//                id
//            }
//        });
//        res.json({
//            message: 'Album deleted',
//            count: deleteRowCount
//        })
//    } catch (error) {
//        res.status(500).json({
//            error: {
//                code: "ERROR",
//                http_code: 500,
//                message: 'Somethin goes wrong' + error
//            }
//        });
//    }
//}