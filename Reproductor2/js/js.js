(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        console.log("documento listo");
        var video = document.getElementById('video');
        var play = document.getElementById('play');
        var botones = document.querySelector('.botones');

        play.addEventListener('click', reproducir);
        function reproducir() {
            if (!video.paused && !video.ended) {
                video.pause();
                play.style.backgroundImage = `url(${'../src/images/poster/4.png'})`;
            } else {
                video.play();
                play.style.backgroundImage = `url(${'../src/images/poster/6.png'})`;
            }
        }

        video.addEventListener('mouseout', funcion1);
        function funcion1() {
            botones.style.display = 'none';
        }

        video.addEventListener('mouseover', funcion2);
        function funcion2() {
            botones.style.display = 'block';
        };

        botones.addEventListener('mouseover', funcion3);
        function funcion3() {
            botones.style.display = 'block';
        }
    })
})();

