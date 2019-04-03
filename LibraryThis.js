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
    },

    uid: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },

    printPlaylists: function () {
        for (var plList in this.playlists) {
            var plID = this.playlists[plList].id;
            var plName = this.playlists[plList].name;
            var plNum = this.playlists[plList].tracks.length;
            console.log(plID + ": " + plName + " - " + plNum + " tracks");
        }
    },

    printTracks: function () {
        for (var plTrack in this.tracks) {
            var trID = this.tracks[plTrack].id;
            var trName = this.tracks[plTrack].name;
            var trArt = this.tracks[plTrack].artist;
            var trAlb = this.tracks[plTrack].album;
            console.log(trID + ": " + trName + " by " + trArt + " (" + trAlb + ")");
        }
    },

    printPlaylist: function (playlistId) {
        var hasPrintedTitle = false;

        for (var trk in this.playlists[playlistId].tracks) {
            var plName = this.playlists[playlistId].name;
            var plNum = this.playlists[playlistId].tracks.length;
            var trackKey = this.playlists[playlistId].tracks[trk];
            var trID = this.tracks[trackKey].id;
            var trName = this.tracks[trackKey].name;
            var trArt = this.tracks[trackKey].artist;
            var trAlb = this.tracks[trackKey].album;
            if (!hasPrintedTitle) {
                hasPrintedTitle = true;
            }
            console.log(trID + ": " + trName + " by " + trArt + " (" + trAlb + ")");
        }
    },

    addTrackToPlaylist: function (trackId, playlistId) {
        if (this.tracks[trackId] && this.playlists[playlistId]) {
            this.playlists[playlistId].tracks.push(trackId);
        }
    },

    addTrack: function (name, artist, album) {
        var newID = this.uid();

        this.tracks.newID =
            {
                id: newID,
                name: name,
                artist: artist,
                album: album
            };
    },

    addPlaylist: function (name) {
        var newID = this.uid();

        this.playlists.newID =
            {
                id: newID,
                name: name
            };
    }
}