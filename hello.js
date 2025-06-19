/**
 * A simple greeting function that returns "Hello, World!"
 * This function makes the repository more welcoming to new developers.
 * 
 * @returns {string} The greeting message "Hello, World!"
 */
function greetWorld() {
    return "Hello, World!";
}

// Export the function for use in other modules
module.exports = greetWorld;

// Example usage
if (require.main === module) {
    console.log(greetWorld());
}