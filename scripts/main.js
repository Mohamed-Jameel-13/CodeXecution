import { initializeEditor } from './editorInitializer.js';
import { updateIframeContent } from './iframeManager.js';
import { beautifyCode } from './codeBeautifier.js';
import { initializeKeyboardShortcuts } from './keyboardShortcuts.js';

/**
 * Initialize the application when the page is ready.
 */
function initializeApp() {
    initializeEditor();
    initializeKeyboardShortcuts();
}

/**
 * Save the user's code to local storage.
 */
function _saveUserCode() {
    const userCode = getUserCode();
    localStorage.setItem("userCode", userCode);
}

/**
 * Load the user's code from local storage.
 */
function _loadUserCode() {
    const userCode = localStorage.getItem("userCode");
    if (userCode) {
        // Split the user code into HTML, CSS, and JS parts
        const htmlCode = userCode.split("<style>")[0];
        const cssCode = userCode.split("<style>")[1].split("</style>")[0];
        const jsCode = userCode.split("<script>")[1].split("</script>")[0];

        htmlEditor.setValue(htmlCode, 1);
        cssEditor.setValue(cssCode, 1);
        jsEditor.setValue(jsCode, 1);
    }
}

/**
 * Maximize the iframe by adjusting the dimensions of the editors and iframe.
 */
function _maximizeIframe() {
    // First make Iframe height larger
    const iframe = document.getElementById("iframe");
    iframe.style.height = "98%";
    iframe.style.width = "100%";
    // Next equate all 3 editors dimensions to 0
    const htmlEditor = document.getElementById("htmlEditor");
    htmlEditor.style.height = "0%";
    htmlEditor.style.width = "0%";
    const cssEditor = document.getElementById("cssEditor");
    cssEditor.style.height = "0%";
    cssEditor.style.width = "0%";
    const jsEditor = document.getElementById("jsEditor");
    jsEditor.style.height = "0%";
    jsEditor.style.width = "0%";
    // Make editors height 5% which has labels and buttons
    const allEditors = document.getElementById("editors");
    allEditors.style.height = "5%";
    allEditors.style.width = "100%";
}

/**
 * Minimize the iframe by resetting the dimensions of the editors and iframe.
 */
function _minimizeIframe() {
    // Going in reverse order from maximizeFrame() to reset all elements to their original dimensions
   // Change 'let' to 'const' for variables that are never reassigned
const editors = document.getElementById("editors");
const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const jsEditor = document.getElementById("jsEditor");

// Change 'var' to 'let' or 'const'
const iframe = document.getElementById("iframe");

// Prefix unused variables with an underscore if they are intended to be used later
function _minimizeIframe() { /* function body */ }
function _downloadCode() { /* function body */ }
document.addEventListener("focus", _w => { window.URL.revokeObjectURL(url) });
}

/**
 * Download the file with the given blob and file name.
 * @param {Blob} blob - The blob to download.
 * @param {string} fileName - The name of the file to download.
 */
function _downloadFile(blob, fileName) {
    // 3. Create url for blob
    const url = window.URL.createObjectURL(blob);
    // 4. Anchor tag to download
    const a = document.createElement('a');
    // Before click we need to add some properties to our anchorTag
    a.href = url;
    a.download = fileName;
    // Click event
    a.click();
    // Remove anchor tag
    a.remove();

    document.addEventListener("focus", w => { window.URL.revokeObjectURL(url) });
}

// Initialize the application when the page is ready
document.addEventListener('DOMContentLoaded', initializeApp);
