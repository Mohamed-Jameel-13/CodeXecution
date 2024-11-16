/**
 * Get the user's code from the HTML, CSS, and JS editors.
 * @returns {string} The combined user code.
 */
function getUserCode() {
    return htmlEditor.getValue() + "\n" + "<style>" + "\n" + cssEditor.getValue() + "\n" + "</style>" + "\n" +  "<script>" + "\n" + jsEditor.getValue() + "\n" + "</script>";
}

/**
 * Update the iframe content with the user's code.
 */
function updateIframeContent() {
    // Show loading spinner
    showLoadingSpinner();

    let code;
    try {
        // This is the content of iframe
        code = document.getElementById('iframe').contentWindow.document;
        code.open();
        // Getting value from editor and puts in the iframe
        code.write(getUserCode());
        code.close();
    } catch (error) {
        // Handle errors during code execution
        console.error("Error updating iframe content:", error);
        alert("An error occurred while updating the iframe content. Please check your code.");
    } finally {
        // Hide loading spinner
        hideLoadingSpinner();
    }
}

/**
 * Load the HTML editor with default settings and content.
 */
function loadHTMLEditor() {
    const defaultHTMLValue = "<!DOCTYPE html>\n\n<html>\n\n    <!-- Your HTML code goes right here -->\n\n</html>";
    globalThis.htmlEditor = ace.edit("htmlEditor");
    htmlEditor.setTheme("ace/theme.dracula");
    htmlEditor.getSession().setMode("ace/mode/html");
    htmlEditor.setValue(defaultHTMLValue, 1);
    htmlEditor.getSession().on('change', function() {
        updateIframeContent();
    });
    htmlEditor.focus();
    htmlEditor.setOptions({
        fontSize: "12.5pt",
        showLineNumbers: true,
        vScrollBarAlwaysVisible: false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
    htmlEditor.setShowPrintMargin(false);
}

/**
 * Load the CSS editor with default settings and content.
 */
function loadCSSEditor() {
    const defaultCSSValue = "/*        Your CSS Code Goes Here           */";
    globalThis.cssEditor = ace.edit("cssEditor");
    cssEditor.setTheme("ace/theme.dracula");
    cssEditor.getSession().setMode("ace/mode/css");
    cssEditor.setValue(defaultCSSValue, 1);
    cssEditor.getSession().on('change', function() {
        updateIframeContent();
    });
    cssEditor.focus();
    cssEditor.setOptions({
        fontSize: "12.5pt",
        showLineNumbers: true,
        vScrollBarAlwaysVisible: true
    });
    cssEditor.setShowPrintMargin(false);
}

/**
 * Load the JavaScript editor with default settings and content.
 */
function loadJSEditor() {
    const defaultJSValue = "/*     Your JAVASCRIPT Code Goes Here       */";
    globalThis.jsEditor = ace.edit("jsEditor");
    jsEditor.setTheme("ace/theme/dracula");
    jsEditor.getSession().setMode("ace/mode/javascript");
    jsEditor.setValue(defaultJSValue, 1);
    jsEditor.getSession().on('change', function() {
        updateIframeContent();
    });
    jsEditor.focus();
    jsEditor.setOptions({
        fontSize: "12.5pt",
        showLineNumbers: true,
        vScrollBarAlwaysVisible: true,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
    jsEditor.setShowPrintMargin(false);
}

/**
 * Set up the editors by loading the HTML, CSS, and JS editors.
 */
function setupEditor() {
    loadHTMLEditor();
    loadCSSEditor();
    loadJSEditor();
}

/**
 * Initialize the application when the page is ready.
 */
function ready() {
    setupEditor();
    initializeKeyboardShortcuts();
}

/**
 * Maximize the iframe by adjusting the dimensions of the editors and iframe.
 */
function maximizeIframe() {
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
function minimizeIframe() {
    // Going in reverse order from maximizeFrame() to reset all elements to their original dimensions
    const editors = document.getElementById("editors");
    editors.style.height = "50%";
    editors.style.width = "100%";
    const htmlEditor = document.getElementById("htmlEditor");
    htmlEditor.style.height = "90%";
    htmlEditor.style.width = "32%";
    const cssEditor = document.getElementById("cssEditor");
    cssEditor.style.height = "90%";
    cssEditor.style.width = "32%";
    const jsEditor = document.getElementById("jsEditor");
    jsEditor.style.height = "90%";
    jsEditor.style.width = "32%";
    const iframe = document.getElementById("iframe");
    iframe.style.height = "50%";
    iframe.style.width = "100%";
}

/**
 * Download the user's code as an HTML file.
 */
function downloadCode() {
    // 1. Create a blob
    const userCode = getUserCode();
    const blob = new Blob([userCode], {type: "text/html"});
    downloadFile(blob, "index.html");
}

/**
 * Download the file with the given blob and file name.
 * @param {Blob} blob - The blob to download.
 * @param {string} fileName - The name of the file to download.
 */
function downloadFile(blob, fileName) {
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

/**
 * Show the loading spinner.
 */
function showLoadingSpinner() {
    // Implement the logic to show the loading spinner
}

/**
 * Hide the loading spinner.
 */
function hideLoadingSpinner() {
    // Implement the logic to hide the loading spinner
}

/**
 * Save the user's code to local storage.
 */
function saveUserCode() {
    const userCode = getUserCode();
    localStorage.setItem("userCode", userCode);
}

/**
 * Load the user's code from local storage.
 */
function loadUserCode() {
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
 * Beautify the user's code.
 */
function beautifyCode() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const jsCode = jsEditor.getValue();

    const beautifiedHTML = html_beautify(htmlCode);
    const beautifiedCSS = css_beautify(cssCode);
    const beautifiedJS = js_beautify(jsCode);

    htmlEditor.setValue(beautifiedHTML, 1);
    cssEditor.setValue(beautifiedCSS, 1);
    jsEditor.setValue(beautifiedJS, 1);
}

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

// Initialize the application when the page is ready
document.addEventListener('DOMContentLoaded', ready);
