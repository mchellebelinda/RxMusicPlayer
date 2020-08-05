window.onload = function(){

    function loginPopup(){
        // Login Popup
        var loginn = document.getElementById("login-popup");
        var btn = document.getElementById("login2");
        var btn2 = document.getElementById("login");
        var popupClose = document.getElementsByClassName("close")[0];

        btn.onclick = function(){
            loginn.style.display = "block";
        }

        btn2.onclick = function(){
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

    loginPopup();
}