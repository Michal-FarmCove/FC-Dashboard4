        function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }

        // Toggle all switches and fill in today's date for each row
        function toggleAll(checkbox) {
            const rows = document.querySelectorAll("tbody tr");
            const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

            rows.forEach(row => {
                const payCheckbox = row.querySelector(".pay-switch-input");
                const dateCell = row.querySelector(".date-cell");

                // Set checkbox state based on "Pay all"
                if (checkbox.checked) {
                    payCheckbox.checked = true;
                    dateCell.innerHTML = `<input type="date" class="date-input" value="${today}" />`;
                } else {
                    payCheckbox.checked = false;
                    dateCell.innerHTML = '';
                }
            });
        }

        // Toggle individual switch for date input
        function toggleInputs(checkbox, rowId) {
            const row = document.getElementById(rowId);
            const dateCell = row.querySelector('.date-cell');
            
            if (checkbox.checked) {
                const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
                dateCell.innerHTML = `<input type="date" class="date-input" value="${today}" />`;
            } else {
                dateCell.innerHTML = '';
            }
        }