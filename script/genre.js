window.onload = function (){

    function loginPopup(){
        // Login Popup
        var loginn = document.getElementById("login-popup");
        var btn = document.getElementById("login2");
        var btn2 = document.getElementById("login");
        var popupClose = document.getElementsByClassName("close-login")[0];

        btn.onclick = function(){
            loginn.style.display = "block";
        }

        btn2.onclick = function(){
            loginn.style.display = "block";
        }

        popupClose.onclick = function(){
            loginn.style.display = "none";
        }

        windowClose();
    }

    function kpopPopup(){
        var kpop = document.getElementById("kpop-popup");
        var kpopbtn = document.getElementById("kpop-btn");
        var kpopClose = document.getElementsByClassName("kpop-close")[0];

        kpopbtn.onclick = function(){
            kpop.style.display = "block";
        }

        kpopClose.onclick = function(){
            kpop.style.display = "none";
        }

        windowClose();
    }

    function popPopup(){
        var pop = document.getElementById("pop-popup");
        var popbtn = document.getElementById("pop-btn");
        var popClose = document.getElementsByClassName("pop-close")[0];

        popbtn.onclick = function(){
            pop.style.display = "block";
        }

        popClose.onclick = function(){
            pop.style.display = "none";
        }

        windowClose();
    }

    function rbPopup(){
        var rb = document.getElementById("rb-popup");
        var rbbtn = document.getElementById("rb-btn");
        var rbClose = document.getElementsByClassName("rb-close")[0];

        rbbtn.onclick = function(){
            rb.style.display = "block";
        }

        rbClose.onclick = function(){
            rb.style.display = "none";
        }

        windowClose();
    }

    function cpopPopup(){
        var cpop = document.getElementById("cpop-popup");
        var cpopbtn = document.getElementById("cpop-btn");
        var cpopClose = document.getElementsByClassName("cpop-close")[0];

        cpopbtn.onclick = function(){
            cpop.style.display = "block";
        }

        cpopClose.onclick = function(){
            cpop.style.display = "none";
        }

        windowClose();
    }

    function indopopPopup(){
        var indopop = document.getElementById("indopop-popup");
        var indopopbtn = document.getElementById("indopop-btn");
        var indopopClose = document.getElementsByClassName("indopop-close")[0];

        indopopbtn.onclick = function(){
            indopop.style.display = "block";
        }

        indopopClose.onclick = function(){
            indopop.style.display = "none";
        }

        windowClose();
    }

    function chillPopup(){
        var chill = document.getElementById("chill-popup");
        var chillbtn = document.getElementById("chill-btn");
        var chillClose = document.getElementsByClassName("chill-close")[0];

        chillbtn.onclick = function(){
            chill.style.display = "block";
        }

        chillClose.onclick = function(){
            chill.style.display = "none";
        }

        windowClose();
    }

    function windowClose(){
        var kpop = document.getElementById("kpop-popup");
        var chill = document.getElementById("chill-popup");
        var indopop = document.getElementById("indopop-popup");
        var cpop = document.getElementById("cpop-popup");
        var rb = document.getElementById("rb-popup");
        var pop = document.getElementById("pop-popup");
        var loginn = document.getElementById("login-popup");

        window.onclick = function(event){
            if(event.target == chill){
                chill.style.display = "none";
            }else if(event.target == kpop){
                kpop.style.display = "none";
            }else if(event.target == cpop){
                cpop.style.display = "none";
            }else if(event.target == indopop){
                indopop.style.display = "none";
            }else if(event.target == rb){
                rb.style.display = "none";
            }else if(event.target == pop){
                pop.style.display = "none";
            }else if(event.target == loginn){
                loginn.style.display = "none";
            }
        }

    }

    loginPopup();
    kpopPopup();
    popPopup();
    rbPopup();
    cpopPopup();
    indopopPopup();
    chillPopup();
}