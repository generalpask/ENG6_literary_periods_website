(function() {

    var current_hour = new Date().getHours();


    if (0 <= current_hour&&current_hour < 5) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg")');
        $(".header, .link-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
    }
    
    if (5 <= current_hour&&current_hour < 11) { // Morning
        //document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
    }
    if (11 <= current_hour&&current_hour < 16) { // Day
        $(".body-1").css("backhground-image", 'url("public/img/adolf-hiremy-hirschl-ahasuerus-at-the-end-of-the-world-1888-trivium-art-history.jpg")');
        $(".header, .link-div ").css("background-image", 'radial-gradient(#efefef, #8c8c8c)');
    }
    if (16 <= current_hour&&current_hour < 22) { // Evening
        //document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
    }
    if (22 <= current_hour&&current_hour < 24) { // Night
        $(".body-1").css("background-image", 'url("public/img/souls_of_acheron.jpg"');
        $(".header, .link-div").css("background-image", 'radial-gradient(#5e5e5e, #454545)');
    }

}).call(this);