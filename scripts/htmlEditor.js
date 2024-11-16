/**
 * Initialize the HTML editor with default settings and content.
 */
function initializeHTMLEditor() {
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
