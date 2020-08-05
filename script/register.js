window.onload = function(){

    function loginPopup(){
        // Login Popup
        var loginn = document.getElementById("login-popup");
        var btn = document.getElementById("login2");
        var btn2 = document.getElementById("login");
        var popupClose = document.getElementsByClassName("closee")[0];

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

    function validateForm() {
        var name = document.forms["myForm"]["fname"].value;
        var pw= document.forms["myForm"]["password"].value;
        var pw2= document.forms["myForm"]["cpassword"].value;
        var email = document.forms["myForm"]["email"].value;
        var checkBox= document.getElementById("checkboxx");

        // name validation 1
        if(name.length<6||name.length>20){
            alert("Name must be 6-20 characters.");
            return false;
        }

        // name validation 2
        if(name.split(' ').length< 2){
            alert("Name must be at least 2 words.");
            return false;
        }

        // password validation 
        if(pw.length<6||pw.length>12){
            alert("Password must be 6-12 characters.");
            return false;
        }

        if(pw!=pw2){
            alert("Password not match.");
            return false;
        }
    
        var num = 0;
        var upper = 0;
        var lower = 0;
        var sc = 0;
        var cek = '';
        var i = 0;

        for (i = 0; i < pw.length; i++){
            cek = pw.charCodeAt(i);
            if(cek > 47 && cek < 58){
                num += 1;
            }else if(cek > 64  && cek < 91){
                upper += 1;
            }else if(cek > 96 && cek < 123){
                lower += 1;
            }
            if ((cek >= 33 && cek <= 47) || (cek >= 58 && cek <= 64) || (cek >= 91 && cek <= 96) || (cek >= 123 && cek <= 126))
            {
                sc += 1;
            }
            cek = '';
        }
        if(upper == 0 || lower == 0 || num == 0 || sc == 0){
            alert("Password must include uppercase(s), lowercase(s), number(s), and special character(s).");
            return false;
        }
        
        // email validation
        if(email.indexOf('@')<1 || email.lastIndexOf('.') < email.indexOf('@')+2 || email.lastIndexOf('.')+2 >= email.length){
            alert("Invalid email.");
            return false;
        }

        // checkbox validation
        if(!checkBox.checked){
            alert('Please check the "I agree to the terms and conditions" box.');
            return false;
        }

    } 