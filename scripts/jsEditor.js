/**
 * Initialize the JavaScript editor with default settings and content.
 */
function initializeJSEditor() {
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
