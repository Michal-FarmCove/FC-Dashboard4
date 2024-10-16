// Open the initial popup window
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Close all popups
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("query-popup").style.display = "none";
    document.getElementById("message-popup").style.display = "none";
}

// Display a message popup with custom text
function showMessage(message) {
    const messagePopup = document.getElementById("message-popup");
    messagePopup.querySelector(".message-text").textContent = message;
    messagePopup.style.display = "block";
    
    // Close all popups when clicking outside the message popup
    document.addEventListener("click", function closeAllPopups(event) {
        closePopup();
        document.removeEventListener("click", closeAllPopups);
    });
}

// Approve Document: Show "Expense has been approved."
function approveDocument() {
    closePopup();
    showMessage("Expense has been approved.");
}

// Reject Document: Show "Expense has been rejected."
function rejectDocument() {
    closePopup();
    showMessage("Expense has been rejected.");
}

// Show query popup for entering a query
function queryDocument() {
    document.getElementById("popup").style.display = "none"; // Hide main popup
    document.getElementById("query-popup").style.display = "block"; // Show query input popup
}

// Submit Query: Show "Expense has been queried."
function submitQuery() {
    document.getElementById("query-popup").style.display = "none"; // Hide query popup
    showMessage("Expense has been queried.");
}
