const imageContainers = document.querySelectorAll('.image-container');
const leftSide = document.querySelector('.left-side');

imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        imageContainers.forEach((otherContainer) => {
            otherContainer.classList.remove('selected');
        });

        container.classList.add('selected');
    });
});

document.querySelectorAll('.image-container').forEach(function(element) {
    element.addEventListener('click', function() {
        var templateId = this.id;
        loadTemplate(templateId);
    });
});

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
