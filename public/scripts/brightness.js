(function() {

    //var current_hour = new Date().getHours();
    var current_hour = 12;
    
    if (0 <= current_hour&&current_hour < 5) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
        $("p, h1, a").css("color", "#e7dac7");
        $(".article-content").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
    }
    
    if (5 <= current_hour&&current_hour < 11) { // Morning
        $(".body-1").css("background-image", 'url("public/img/Dali-Dream-of-Narcissus-TateModern-crop.png")')
        $(".header, .link-div").css("background-image", 'radial-gradient(#f58628, #bb5700)');
    }
    if (11 <= current_hour&&current_hour < 16) { // Day
        $(".body-1").css("background-image", 'url("public/img/adolf-hiremy-hirschl-ahasuerus-at-the-end-of-the-world-1888-trivium-art-history.jpg")');
        $(".header, .link-divs").css("background-image", 'radial-gradient(#efefef, #8c8c8c)');
        $(".article-content").css("background-image", 'radial-gradient(#ffffff, #a7a7a7)');
    }
    if (16 <= current_hour&&current_hour < 22) { // Evening
        $(".header, .link-div").css("background-image", "radial-gradient(#100ea9, #01004c)");
        $("p, h1, a").css("color", "#e7dac7");
        
    }
    if (22 <= current_hour&&current_hour < 24) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
        $("p, h1, a").css("color", "#e7dac7");
        $(".article-content").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
    }

}).call(this);