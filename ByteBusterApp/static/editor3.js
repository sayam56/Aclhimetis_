// Event listener for the "Basic" form
document.querySelector('#basic-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const basicName = document.querySelector('#basic-name').value;
    const basicTitle = document.querySelector('#basic-title').value;
    const basicCost = document.querySelector('#basic-cost').value;
    const basicFeature1 = document.querySelector('#basic-feature1').value;
    const basicFeature2 = document.querySelector('#basic-feature2').value;
    const basicFeature3 = document.querySelector('#basic-feature3').value;
    const basicFeature4 = document.querySelector('#basic-feature4').value;
    const basicButtonText = document.querySelector('#basic-button-text').value;

    // Update the UI
    document.querySelector('.card__header-subtitle').textContent = basicName;
    document.querySelector('.card__header-title').textContent = basicTitle;
    document.querySelector('.card__pricing-number').textContent = basicCost;
    document.querySelector('.basic_feature_1').textContent = basicFeature1;
    document.querySelector('.basic_feature_2').textContent = basicFeature2;
    document.querySelector('.basic_feature_3').textContent = basicFeature3;
    document.querySelector('.basic_feature_4').textContent = basicFeature4;
    document.querySelector('.card__button').textContent = basicButtonText;
});

// Event listener for the "Professional" form
document.querySelector('#professional-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const professionalName = document.querySelector('#professional-name').value;
    const professionalTitle = document.querySelector('#professional-title').value;
    const professionalCost = document.querySelector('#professional-cost').value;
    const professionalFeature1 = document.querySelector('#professional-feature1').value;
    const professionalFeature2 = document.querySelector('#professional-feature2').value;
    const professionalFeature3 = document.querySelector('#professional-feature3').value;
    const professionalFeature4 = document.querySelector('#professional-feature4').value;
    const professionalFeature5 = document.querySelector('#professional-feature5').value;
    const professionalButtonText = document.querySelector('#professional-button-text').value;

    // Update the UI
    document.querySelector('.professional .card__header-subtitle').textContent = professionalName;
    document.querySelector('.professional .card__header-title').textContent = professionalTitle;
    document.querySelector('.professional .card__pricing-number').textContent = professionalCost;
    document.querySelector('.professional .prof_feature_1').textContent = professionalFeature1;
    document.querySelector('.professional .prof_feature_2').textContent = professionalFeature2;
    document.querySelector('.professional .prof_feature_3').textContent = professionalFeature3;
    document.querySelector('.professional .prof_feature_4').textContent = professionalFeature4;
    document.querySelector('.professional .prof_feature_5').textContent = professionalFeature5;
    document.querySelector('.professional .card__button').textContent = professionalButtonText;
});


// Event listener for the "Enterprise" form
document.querySelector('#enterprise-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const enterpriseName = document.querySelector('#professional-name').value;
    const enterpriseTitle = document.querySelector('#enterprise-title').value;
    const enterpriseCost = document.querySelector('#enterprise-cost').value;
    const enterpriseFeature1 = document.querySelector('#enterprise-feature1').value;
    const enterpriseFeature2 = document.querySelector('#enterprise-feature2').value;
    const enterpriseFeature3 = document.querySelector('#enterprise-feature3').value;
    const enterpriseFeature4 = document.querySelector('#enterprise-feature4').value;
    const enterpriseFeature5 = document.querySelector('#enterprise-feature5').value;
    const enterpriseFeature6 = document.querySelector('#enterprise-feature6').value;
    const enterpriseButtonText = document.querySelector('#enterprise-button-text').value;

    // Update the UI
    document.querySelector('.enterprise .card__header-subtitle').textContent = enterpriseName;
    document.querySelector('.enterprise .card__header-title').textContent = enterpriseTitle;
    document.querySelector('.enterprise .card__pricing-number').textContent = enterpriseCost;
    document.querySelector('.enterprise .enterprise_feature_1').textContent = enterpriseFeature1;
    document.querySelector('.enterprise .enterprise_feature_2').textContent = enterpriseFeature2;
    document.querySelector('.enterprise .enterprise_feature_3').textContent = enterpriseFeature3;
    document.querySelector('.enterprise .enterprise_feature_4').textContent = enterpriseFeature4;
    document.querySelector('.enterprise .enterprise_feature_5').textContent = enterpriseFeature5;
    document.querySelector('.enterprise .enterprise_feature_6').textContent = enterpriseFeature6;
    document.querySelector('.enterprise .card__button').textContent = enterpriseButtonText;
});


document.querySelector('#table-slider3').addEventListener('input', function(event) {
    const numTables = event.target.value;

    // Get all the tables and forms
    const tables = document.querySelectorAll('.card__content');
    const forms = document.querySelectorAll('form');

    // Hide all tables and forms initially
    tables.forEach(table => table.style.display = 'none');
    forms.forEach(form => form.style.display = 'none');

    // Then show the number of tables and forms selected by the slider
    for (let i = 0; i < numTables; i++) {
        tables[i].style.display = 'block';
        forms[i].style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const getCodeButton = document.getElementById('get-code');

    getCodeButton.addEventListener('click', function (event) {
        // Prevent default navigation behavior
        event.preventDefault();

        // Check if all forms are filled
        if (areFormsFilled()) {
            // If forms are filled, allow navigation
            window.location.href = getCodeButton.href;
        } else {
            // If forms are not filled, display a message
            alert('Please fill in all forms before getting the code.');
        }
    });

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

