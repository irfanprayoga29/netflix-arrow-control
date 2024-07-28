(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {
        var video = document.querySelector('video');
        if (!video) return;
        if (event.code === 'ArrowRight') {
            video.currentTime += 5;
        } else if (event.code === 'ArrowLeft') {
            video.currentTime -= 5;
        }
    });
})();
