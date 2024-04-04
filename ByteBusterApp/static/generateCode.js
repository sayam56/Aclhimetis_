document.addEventListener('DOMContentLoaded', function () {
    const getCodeButton = document.getElementById('get-code');

    getCodeButton.addEventListener('click', function (event) {
        // Prevent default navigation behavior
        event.preventDefault();

        // Check if all forms are filled
        if (areFormsFilled()) {
            // Get HTML content of the pricing table block
            const pricingTableHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pricing Table</title>
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    ${document.querySelector('.table-container').outerHTML}
                </body>
                </html>
            `;
            // Get the URL of the CSS file
            const cssURL = document.querySelector('link[href*="style.css"]').href;

            // Create a zip file
            const zip = new JSZip();

            zip.file("pricing_table.html", pricingTableHTML);

            // Fetch the CSS file content and add it to the zip file
            fetch(cssURL)
                .then(response => response.text())
                .then(cssContent => {
                    zip.file("style.css", cssContent);

                    // Generate the zip file content
                    zip.generateAsync({ type: "blob" })
                        .then(function(blob) {
                            // Use the blob data
                            const formData = new FormData();
                            formData.append('zip_content', blob);

                            console.log(blob.size);

                            // Trigger download of the zip file
                            saveAs(blob, "pricing_table.zip");
                            const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

                            fetch('/save_zip_to_db/', {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'X-CSRFToken': csrfToken, // Include CSRF token getCookie('csrftoken')
                                },
                            })
                            .then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    // Redirect to pricing page
                                    window.location.href = getCodeButton.href;
                                } else {
                                    alert('Error saving zip file. Please try again.');
                                }
                            });
                        });
                });
        } else {
            // If forms are not filled, display a message
            alert('Please fill in all forms before getting the code.');
        }
    });

    // Helper function to get CSRF token
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function areFormsFilled() {
        // Get all forms
        const forms = document.querySelectorAll('form');

        // Check if all forms are filled
        for (const form of forms) {
            const inputs = form.querySelectorAll('input[type="text"]');
            for (const input of inputs) {
                if (!input.value.trim()) {
                    return false; // If any input is empty, return false
                }
            }
        }

        return true; // If all inputs are filled, return true
    }
});
