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
