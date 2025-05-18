// Mobile detection and video handling
        function checkMobile() {
            return window.matchMedia('(max-width: 768px)').matches;
        }

        const video = document.querySelector('video');
        if (checkMobile()) {
            video.poster = 'mobile-fallback.jpg';
            video.removeAttribute('autoplay');
        }

        // Video loaded detection
        video.addEventListener('loadeddata', () => {
            document.body.classList.add('video-loaded');
        });

        // Ensure video fills screen on resize
        window.addEventListener('resize', () => {
            video.style.width = `${window.innerWidth}px`;
            video.style.height = `${window.innerHeight}px`;
        });