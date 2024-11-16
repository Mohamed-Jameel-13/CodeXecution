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
