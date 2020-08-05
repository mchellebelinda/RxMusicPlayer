window.onload = function () {
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

    //Slider
    $(document).ready(function(){
        var $sliderInner = $('.slider-inner');
        var $slides = $('.slider-inner').find('img');
        var current = 1;
        var speed = 1500;
        var interval = 3000;

        var success = function(){
            if(current < ($slides.length - 1)){
                current++;
            }else{
                $sliderInner.css({'margin-left': '0px'});
                current = 1;
            }
        }

        var animateSlide = function(){
            if($(window).width() >= 800){
                $sliderInner.animate({
                    'margin-left': '-=' + '775px'
                }, speed, success);
            }else{
                if($(window).width() >= 550 && $(window).width() <= 779){
                    $sliderInner.animate({
                        'margin-left': '-=' + '535px'
                    }, speed, success);
                }else{
                    if($(window).width() >= 410 && $(window).width() <= 549){
                        $sliderInner.animate({
                            'margin-left': '-=' + '400px'
                        }, speed, success);
                    }else{
                        $sliderInner.animate({
                            'margin-left': '-=' + '300px'
                        }, speed, success);
                    }
                }
            }
        };

        setInterval(animateSlide, interval);
    });
}