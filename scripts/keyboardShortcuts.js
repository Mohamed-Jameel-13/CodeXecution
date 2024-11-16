/**
 * Initialize keyboard shortcuts for common actions.
 */
function initializeKeyboardShortcuts() {
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "s") {
            event.preventDefault();
            saveUserCode();
        } else if (event.ctrlKey && event.key === "r") {
            event.preventDefault();
            updateIframeContent();
        } else if (event.ctrlKey && event.key === "b") {
            event.preventDefault();
            beautifyCode();
        }
    });
}

// Initialize keyboard shortcuts
initializeKeyboardShortcuts();
