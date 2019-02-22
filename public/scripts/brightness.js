(function() {

    /* 
    
    div colors:
    
    morning1: #D25712
    morning2: #BA3C21
    day1: #ffffff
    day2: #a7a7a7
    evening1: #020080
    evening2: #010040
    night1: #5e5e5e
    night2: #454545

    note: radial-gradient fades the div center to edges from color1 to color2

    */

    //var current_hour = new Date().getHours();
    var current_hour = 18;
    
    if (0 <= current_hour&&current_hour < 5) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div, .article-content, .img-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
        $("p, h1, a").css("color", "#e7dac7");
    }
    
    if (5 <= current_hour&&current_hour < 11) { // Morning
        $(".body-1").css("background-image", 'url("public/img/Dali-Dream-of-Narcissus-TateModern-crop.png")')
        $(".header, .link-div, .article-content, .img-div").css("background-image", 'radial-gradient(#D25712, #BA3C21)');
        $("p, h1, a").css("color", "#000");
    }
    if (11 <= current_hour&&current_hour < 16) { // Day
        $(".body-1").css("background-image", 'url("public/img/adolf-hiremy-hirschl-ahasuerus-at-the-end-of-the-world-1888-trivium-art-history.jpg")');
        $(".header, .link-div, .article-content, .img-div").css("background-image", 'radial-gradient(#ffffff, #a7a7a7)');
        $("p, h1, a").css("color", "#000");
    }
    if (16 <= current_hour&&current_hour < 22) { // Evening
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div, .article-content, .img-div").css("background-image", "radial-gradient(#020080, #010040)");
        $("p, h1, a").css("color", "#e7dac7");
        
    }
    if (22 <= current_hour&&current_hour < 24) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div, .article-content, .img-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
        $("p, h1, a").css("color", "#e7dac7");
    }

}).call(this);