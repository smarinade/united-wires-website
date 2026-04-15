/**
 * Game Media Handler
 * Handles hover video/iframe playback for game cards
 */

document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const video = card.querySelector('.game-icon-video');
        const iframe = card.querySelector('.game-icon-iframe');

        // Handle regular video elements
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(err => {
                    console.log('Video autoplay prevented:', err);
                });
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            video.loop = true;
            video.muted = true;
        }

        // Handle YouTube iframe embeds
        if (iframe) {
            let player = null;

            card.addEventListener('mouseenter', () => {
                // Load YouTube API if not already loaded
                if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
                    loadYouTubeAPI();
                }

                // Use postMessage to play video (works without API)
                try {
                    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } catch (e) {
                    console.log('Could not control YouTube video:', e);
                }
            });

            card.addEventListener('mouseleave', () => {
                try {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    iframe.contentWindow.postMessage('{"event":"command","func":"seekTo","args":[0, true]}', '*');
                } catch (e) {
                    console.log('Could not control YouTube video:', e);
                }
            });
        }
    });
});

function loadYouTubeAPI() {
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}
