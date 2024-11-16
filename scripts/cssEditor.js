/**
 * Initialize the CSS editor with default settings and content.
 */
function initializeCSSEditor() {
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
