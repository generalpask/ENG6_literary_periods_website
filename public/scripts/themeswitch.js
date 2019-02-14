(function() {
    document.getElementById('daymode').addEventListener('click', function() {
        document.getElementById('stylesheet').href = "public/stylesheets/main.css";
    })
    document.getElementById('nightmode').addEventListener('click', function() {
        document.getElementById('stylesheet').href = "public/stylesheets/main-dark.css";
    })
}).call(this);