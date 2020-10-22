"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadThumbnail = uploadThumbnail;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AWS = require('aws-sdk');

async function uploadThumbnail(req, res) {
  try {
    const {
      id
    } = req.params;
    const BUCKET_NAME = 'music-app-platzi';
    const IAM_USER_KEY = 'AKIAZ37MRXDHU325UAS6';
    const IAM_USER_SECRET = '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';
    console.log(req.file);
    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      BUCKET: BUCKET_NAME
    });
    s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        ACL: 'public-read',
        ContentType: req.file.mimetype,
        Key: 'thumbnail-profile/' + req.file.originalname,
        Body: req.file.buffer
      };
      s3bucket.upload(params, async function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }

        if (data) {
          const thumbnail = data.Location;
          const args = await _user.default.findAll({
            attributes: ['id', 'rol_id', 'name', 'mail', 'thumbnail'],
            where: {
              id
            }
          });

          if (args.length > 0) {
            args.forEach(async User => {
              await User.update({
                thumbnail
              });
            });
          }

          return res.json({
            message: 'Thumbnail upload successfully',
            data: args
          });
        }
      });
    });
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