import User from '../models/user';
const AWS = require('aws-sdk');
import config from '../config';
import Playlist from '../models/playlist';


export async function uploadThumbnail(req, res) {
    try {
        const { id } = req.params;

        const uploadThumbnail = await uploadFile(req.file, 'thumbnail-profile/');
        const thumbnail = uploadThumbnail.Location;

        const args = await User.findAll({
            attributes: ['id', 'rol_id', 'name', 'mail', 'thumbnail'],
            where: {
                id
            }
        });
        if (args.length > 0) {
            args.forEach(async User => {
                await User.update({
                    thumbnail,
                });
            })
        }
        return res.json({
            message: 'Thumbnail upload successfully',
            data: args
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

export async function uploadThumbnailPlaylist(req, res) {
    try {
        const { id } = req.params;

        const uploadThumbnail = await uploadFile(req.file, 'thumbnail-playlists/');
        const thumbnail = uploadThumbnail.Location;

        const args = await Playlist.findAll({
            attributes: ['id', 'user_id', 'name', 'thumbnail'],
            where: {
                id
            }
        });
        if (args.length > 0) {
            args.forEach(async Playlist => {
                await Playlist.update({
                    thumbnail,
                });
            })
        }
        return res.json({
            message: 'Thumbnail upload successfully',
            data: args
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

export function uploadFile(req, path) {
    return new Promise(resolve => {
        const BUCKET_NAME = config.BUCKET_NAME;
        const IAM_USER_KEY = config.IAM_USER_KEY;
        const IAM_USER_SECRET = config.IAM_USER_SECRET;

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            BUCKET: BUCKET_NAME
        });
    
        s3bucket.createBucket(function(){
            var params = {
                Bucket: BUCKET_NAME,
                ACL: 'public-read',
                ContentType: req.mimetype,
                Key: path+req.originalname,
                Body: req.buffer
            };
            s3bucket.upload(params, function (err, data) {
                if(err){
                    console.log('error in callback');
                    console.log(err);
                }
                console.log('cargado');
                resolve(data);            
            });
        });
    });
}