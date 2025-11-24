document.addEventListener('DOMContentLoaded', function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    const iosContainer = document.getElementById('ios-container');
    const androidContainer = document.getElementById('android-container');
    const androidInstructions = document.getElementById('android-instructions');
    const webContainer = document.getElementById('web-container');
    
    // Detection Logic
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
        // Show iOS only
        iosContainer.classList.add('visible');
        
        // Hide "Recommended for your device" on Android container
        const androidNote = androidContainer.querySelector('.device-note');
        if (androidNote) androidNote.style.display = 'none';
        
    } else if (isAndroid) {
        // Show Android only and instructions
        androidContainer.classList.add('visible');
        androidInstructions.classList.remove('hidden');
        
        // Hide "Recommended for your device" on iOS container
        const iosNote = iosContainer.querySelector('.device-note');
        if (iosNote) iosNote.style.display = 'none';
        
        // Update the button style to be primary yellow for the main action on this device
        const androidBtn = androidContainer.querySelector('.btn');
        androidBtn.classList.remove('btn-android'); // Remove blue
        androidBtn.classList.add('btn-primary'); // Add yellow
    } else {
        // Desktop or other: Show both and web link
        iosContainer.classList.add('visible');
        androidContainer.classList.add('visible');
        webContainer.classList.add('visible');
        
        // Hide "Recommended for your device" text on desktop
        const notes = document.querySelectorAll('.device-note');
        notes.forEach(note => note.style.display = 'none');
        
        // Keep Android button blue (secondary) to distinguish from iOS button
    }

    // "See Other Ways to Play" Logic
    const showAllContainer = document.getElementById('show-all-options-container');
    const showAllBtn = document.getElementById('show-all-btn');

    if (isIOS || isAndroid) {
        showAllContainer.classList.add('visible');
    }

    if (showAllBtn) {
        showAllBtn.addEventListener('click', () => {
            iosContainer.classList.add('visible');
            androidContainer.classList.add('visible');
            webContainer.classList.add('visible');
            showAllContainer.style.display = 'none'; // Hide the button itself
        });
    }

    // Logging Logic
    const LOG_API_URL = 'https://youth.columbuschurch.org/api/log-visit';

    // Fetch IP once and reuse
    const ipPromise = fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(err => {
            console.warn('Failed to fetch IP:', err);
            return null;
        });

    async function logVisit(path, metadata = {}) {
        try {
            const ip = await ipPromise;

            const body = {
                path: path,
                appName: 'SMYM-Landing-Page',
                userAgent: userAgent, // Explicitly sending UA as per spec, though browser sends it anyway
                metadata: metadata
            };

            if (ip) {
                body.ip = ip;
            }

            await fetch(LOG_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.error('Failed to log visit:', error);
        }
    }

    // Log initial page visit
    logVisit('/home', { event: 'page_view' });

    // Log Download Clicks
    const iosBtn = iosContainer.querySelector('a');
    if (iosBtn) {
        iosBtn.addEventListener('click', () => {
            logVisit('/download', { 
                event: 'download_click', 
                platform: 'ios',
                url: iosBtn.href
            });
        });
    }

    const androidBtn = androidContainer.querySelector('a');
    if (androidBtn) {
        androidBtn.addEventListener('click', () => {
            logVisit('/download', { 
                event: 'download_click', 
                platform: 'android',
                url: androidBtn.href
            });
        });
    }

    const webBtn = webContainer.querySelector('a');
    if (webBtn) {
        webBtn.addEventListener('click', () => {
            logVisit('/web-redirect', { 
                event: 'web_click', 
                url: webBtn.href
            });
        });
    }
});
