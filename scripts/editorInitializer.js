/**
 * Initialize the HTML, CSS, and JS editors.
 */
import { initializeHTMLEditor } from './htmlEditor.js';
import { initializeCSSEditor } from './cssEditor.js';
import { initializeJSEditor } from './jsEditor.js';

function initializeEditor() {
    initializeHTMLEditor();
    initializeCSSEditor();
    initializeJSEditor();
}

export { initializeEditor };
