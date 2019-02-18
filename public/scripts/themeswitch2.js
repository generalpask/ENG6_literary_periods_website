(function() {
    document.getElementById('daymode').addEventListener('click', function() {
        document.getElementById('stylesheet').href = "../stylesheets/main.css";
    })
    document.getElementById('nightmode').addEventListener('click', function() {
        document.getElementById('stylesheet').href = "../stylesheets/main-dark.css";
    })
}).call(this);