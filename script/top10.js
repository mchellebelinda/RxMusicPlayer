window.onload = function () {

    function asianSongs(){
        //Top 10 Songs
        var songData = [{"name": "Eight", "artist": "IU & Suga"},{"name": "My Time", "artist": "BTS"},{"name": "On", "artist": "BTS"},{"name": "Boy With Luv", "artist": "BTS"},{"name": "Black Swan", "artist": "BTS"},{"name": "What's Wrong", "artist": "Eric Chou"},{"name": "Hanya Rindu", "artist": "Andmesh"},{"name": "Snapping", "artist": "Chung Ha"},{"name": "Na Nu Hai Dui Wo Shuo", "artist": "Uu"},{"name": "Nyaman", "artist": "Andmesh"}];
        var songshtml = document.getElementById("songs");

        //Display top 10 songs
        function showSongs(){
            var i = 0;
            var songsOutput = "";

            while(i < songData.length){
                songsOutput += '<div class="number">'+
                                '<h4>'+(i+1)+'</h4>'+'</div>'
                        + '<div class="song">'
                        + '<div class="img">' 
                            + '<img src="../assets/song posters/'+songData[i].name+'.jpg">'
                        + '</div>'
                        + '<div class="desc">'
                            + '<div class="name">'+songData[i].name+'</div>'
                            + '<div class="artist">'+songData[i].artist+'</div>'
                            + '<div class="audio">'
                                + '<audio controls>'
                                    + '<source src="../assets/audio/'+songData[i].name+'.mp3" type="audio/mpeg">'
                                + '</audio>'
                            + '</div>'
                        + '</div>'
                    + '</div>';
                i += 1;
            }
            songshtml.innerHTML = songsOutput;
        }
    
        showSongs();
    }

    function loginPopup(){
        // Login Popup
        var loginn = document.getElementById("login-popup");
        var btn = document.getElementById("login2");
        var btn2 = document.getElementById("login");
        var btn3 = document.getElementById("login-btn");
        var popupClose = document.getElementsByClassName("close")[0];

        btn.onclick = function(){
            loginn.style.display = "block";
        }

        btn2.onclick = function(){
            loginn.style.display = "block";
        }

        btn3.onclick = function(){
            loginn.style.display = "block";
        }

        popupClose.onclick = function(){
            loginn.style.display = "none";
        }

        window.onclick = function(event){
            if(event.target == loginn){
                loginn.style.display = "none";
            }
        }
    }

    asianSongs();
    loginPopup();
}

