var library = {
    tracks: { 123: { id: 123,
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              456: { id: 456,
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"}
            },
  
    playlists: { 789: { id: 789,
                        name: "Coding Music",
                        tracks: [123, 456]
                      }
               }
  };

  function printPlaylists(lib)
  {
    for(var plList in lib.playlists)
    {
        console.log(plList.id);
        console.log(plList.name);
        console.log(plList.tracks);
    }
  }

  printPlaylists(library);