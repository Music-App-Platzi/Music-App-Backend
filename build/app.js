"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _helmet = _interopRequireDefault(require("helmet"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _songs = _interopRequireDefault(require("./routes/songs.routes"));

var _songs_heards = _interopRequireDefault(require("./routes/songs_heards.routes"));

var _artists = _interopRequireDefault(require("./routes/artists.routes"));

var _playlists = _interopRequireDefault(require("./routes/playlists.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _upload = _interopRequireDefault(require("./routes/upload.routes"));

var _albums = _interopRequireDefault(require("./routes/albums.routes"));

var _roles = _interopRequireDefault(require("./routes/roles.routes"));

var _playlist_songs = _interopRequireDefault(require("./routes/playlist_songs.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importing routes
const app = (0, _express.default)(); // Cors

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); // settings

app.set('pkg', _package.default); // middleware

app.use((0, _morgan.default)('dev'));
app.use((0, _express.json)());
app.use((0, _helmet.default)());

const os = require("os");

const hostname = os.hostname(); // welcome routes

app.get('/', (req, res) => {
  res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    hostname: hostname
  });
}); // routes

app.use('/api/auth', _auth.default); //songs

app.use('/api/songs', _songs.default); //songs_heard

app.use('/api/songs-heards', _songs_heards.default); //artists

app.use('/api/artists', _artists.default); //playlists

app.use('/api/playlists', _playlists.default); //users

app.use('/api/users', _users.default); //upload

app.use('/api/upload', _upload.default); //album

app.use('/api/albums', _albums.default); //role

app.use('/api/roles', _roles.default); //playlistSongs

app.use('/api/playlistSongs', _playlist_songs.default);
var _default = app;
exports.default = _default;