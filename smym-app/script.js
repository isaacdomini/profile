document.addEventListener('DOMContentLoaded', function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    const iosContainer = document.getElementById('ios-container');
    const androidContainer = document.getElementById('android-container');
    const androidInstructions = document.getElementById('android-instructions');
    
    // Detection Logic
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
        // Show iOS only
        iosContainer.classList.add('visible');
    } else if (isAndroid) {
        // Show Android only and instructions
        androidContainer.classList.add('visible');
        androidInstructions.classList.remove('hidden');
        
        // Update the button style to be primary yellow for the main action on this device
        const androidBtn = androidContainer.querySelector('.btn');
        androidBtn.classList.remove('btn-android'); // Remove blue
        androidBtn.classList.add('btn-primary'); // Add yellow
    } else {
        // Desktop or other: Show both
        iosContainer.classList.add('visible');
        androidContainer.classList.add('visible');
        
        // Hide "Recommended for your device" text on desktop
        const notes = document.querySelectorAll('.device-note');
        notes.forEach(note => note.style.display = 'none');
        
        // Keep Android button blue (secondary) to distinguish from iOS button
    }
});
