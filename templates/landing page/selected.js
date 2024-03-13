const imageContainers = document.querySelectorAll('.image-container');
const leftSide = document.querySelector('.left-side');

imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        imageContainers.forEach((otherContainer) => {
            otherContainer.classList.remove('selected');
        });

        container.classList.add('selected');

        loadTemplate(index + 1);
    });
});

function loadTemplate(templateNumber) {
    console.log('Loading template:', templateNumber);

    const htmlFilePath = `/Users/ashikalhabib/Desktop/landing/Templates/temp${templateNumber}.html`;
    const cssFilePath = `/Users/ashikalhabib/Desktop/landing/Templates/temp${templateNumber}.css`;

    fetch(htmlFilePath)
        .then(response => response.text())
        .then(htmlContent => {
            leftSide.innerHTML = htmlContent;

            const styleElement = document.createElement('style');
            styleElement.rel = 'stylesheet';

            fetch(cssFilePath)
                .then(response => response.text())
                .then(cssContent => {
                    styleElement.innerHTML = cssContent;
                    document.head.appendChild(styleElement);
                })
                .catch(error => console.error('Error loading CSS:', error));
        })
        .catch(error => console.error('Error loading HTML:', error));
}
