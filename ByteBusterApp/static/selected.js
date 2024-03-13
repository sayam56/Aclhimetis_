const imageContainers = document.querySelectorAll('.image-container');
const leftSide = document.querySelector('.left-side');
let selectedTemplate = null;

imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        imageContainers.forEach((otherContainer) => {
            otherContainer.classList.remove('selected');
        });

        container.classList.add('selected');
    });
});

// JS for loading the template into the dashboard
document.querySelectorAll('.image-container').forEach(function(element) {
    element.addEventListener('click', function() {
        selectedTemplate = this.id;
        loadTemplate(selectedTemplate);
    });
});

// JS for navigating to the template view
document.querySelector('.continue-button').addEventListener('click', function() {
    if (selectedTemplate) {
        window.location.href = '/' + selectedTemplate;
    } else {
        alert('Please select a template first.');
    }
});

// loading template function

function loadTemplate(templateId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/load_template/' + templateId, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector('.left-side').innerHTML = this.responseText;
        }
    };
    xhr.send();
}

