var library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

       for (var plList in library.playlists) {
              var plID = library.playlists[plList].id;
              var plName = library.playlists[plList].name;
              var plNum = library.playlists[plList].tracks.length;
              console.log(plID + ": " + plName + " - " + plNum + " tracks");
       }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

       for (var plTrack in library.tracks) {
              var trID = library.tracks[plTrack].id;
              var trName = library.tracks[plTrack].name;
              var trArt = library.tracks[plTrack].artist;
              var trAlb = library.tracks[plTrack].album;
              console.log(trID + ": " + trName + " by " + trArt + " (" + trAlb + ")");
       }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
       var hasPrintedTitle = false;

       for (var trk in library.playlists[playlistId].tracks) {
              var plName = library.playlists[playlistId].name;
              var plNum = library.playlists[playlistId].tracks.length;
              var trackKey = library.playlists[playlistId].tracks[trk];
              var trID = library.tracks[trackKey].id;
              var trName = library.tracks[trackKey].name;
              var trArt = library.tracks[trackKey].artist;
              var trAlb = library.tracks[trackKey].album;
              if (!hasPrintedTitle) {
                     hasPrintedTitle = true;
              }
              console.log(trID + ": " + trName + " by " + trArt + " (" + trAlb + ")");
       }

}

// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {

       if (library.tracks[trackId] && library.playlists[playlistId]) {
              library.playlists[playlistId].tracks.push(trackId);
       }
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
       var newID = uid();

       library.tracks.newID =
              {
                     id: newID,
                     name: name,
                     artist: artist,
                     album: album
              };
}

// adds a playlist to the library

var addPlaylist = function (name) {
       var newID = uid();

       library.playlists.newID =
              {
                     id: newID,
                     name: name
              };
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {

}