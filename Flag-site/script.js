// Define the correct flag
const CORRECT_FLAG = "CTF{4770_sethwhy}";

// Handle form submission
document.getElementById("flag-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the submitted flag
    const submittedFlag = document.getElementById("flag-input").value.trim();

    // Check if the flag is correct
    if (submittedFlag === CORRECT_FLAG) {
        displayResult("Success!", "success");
    } else {
        displayResult("Try Again!", "error");
    }
});

// Display the result message
function displayResult(message, status) {
    const resultElement = document.getElementById("result");
    const resultMessage = document.getElementById("result-message");

    resultMessage.textContent = message;
    resultElement.classList.remove("hidden");

    // Add appropriate class for success or error
    if (status === "success") {
        resultMessage.classList.add("success");
        resultMessage.classList.remove("error");
    } else {
        // Reset animation by removing and adding the error class
        resultMessage.classList.remove("error");
        void resultMessage.offsetWidth; // Trigger reflow to reset the animation
        resultMessage.classList.add("error");

        resultMessage.classList.remove("success");
    }
}
