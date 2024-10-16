function openPopup(imageSrc, buttonTypes) {
        // Update the popup image
        document.getElementById("popup-image").src = imageSrc;
        
        // Clear existing buttons
        const buttonContainer = document.getElementById("popup-buttons");
        buttonContainer.innerHTML = ""; // Clear previous buttons

        // Add new buttons based on the buttonTypes array
        buttonTypes.forEach(type => {
            let label;
            switch (type) {
                case 'approve':
                    label = 'Approve';
                    break;
                case 'query':
                    label = 'Query';
                    break;
                case 'queryLineItems':
                    label = 'Reject';
                    break;
            }

            const newButton = document.createElement("button");
            newButton.textContent = label;
            newButton.onclick = function() { handleButtonAction(type); };
            buttonContainer.appendChild(newButton);
        });
        
        // Display the popup
        document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function handleButtonAction(action) {
        switch (action) {
            case 'approve':
                alert("Document approved.");
                break;
            case 'query':
                alert("Query submitted.");
                break;
            case 'queryLineItems':
                alert("Query for line items submitted.");
                break;
            default:
                alert("Unknown action.");
        }
        closePopup();
    }