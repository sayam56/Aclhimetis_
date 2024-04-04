document.querySelector('#basic-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const basicTitle = document.querySelector('#basic-title').value;
    const basicCost = document.querySelector('#basic-cost').value;
    const basicFeature1 = document.querySelector('#basic-feature1').value;
    const basicFeature2 = document.querySelector('#basic-feature2').value;
    const basicFeature3 = document.querySelector('#basic-feature3').value;
    const basicFeature4 = document.querySelector('#basic-feature4').value;
    const basicButton = document.querySelector('#pricing-plan-purchase-btn').value;

    // Update the UI
    document.querySelector('.pricing-plan-basic .pricing-plan-title').textContent = basicTitle;
    document.querySelector('.pricing-plan-basic .pricing-plan-cost').textContent = basicCost;
    document.querySelector('.pricing-plan-basic .pricing-plan-features li:nth-child(1)').textContent = basicFeature1;
    document.querySelector('.pricing-plan-basic .pricing-plan-features li:nth-child(2)').textContent = basicFeature2;
    document.querySelector('.pricing-plan-basic .pricing-plan-features li:nth-child(3)').textContent = basicFeature3;
    document.querySelector('.pricing-plan-basic .pricing-plan-features li:nth-child(4)').textContent = basicFeature4;
    document.querySelector('.pricing-plan-basic .pricing-plan-purchase-btn').textContent = basicButton;
});

// Event listener for the "Pro" form
document.querySelector('#pro-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const proTitle = document.querySelector('#pro-title').value;
    const proCost = document.querySelector('#pro-cost').value;
    const proFeature1 = document.querySelector('#pro-feature1').value;
    const proFeature2 = document.querySelector('#pro-feature2').value;
    const proFeature3 = document.querySelector('#pro-feature3').value;
    const proFeature4 = document.querySelector('#pro-feature4').value;
    const proButtonText = document.querySelector('#pro-button-text').value;

    // Update the UI
    document.querySelector('.pricing-plan-pro .pricing-plan-title').textContent = proTitle;
    document.querySelector('.pricing-plan-pro .pricing-plan-cost').textContent = proCost;
    document.querySelector('.pricing-plan-pro .pricing-plan-features li:nth-child(1)').textContent = proFeature1;
    document.querySelector('.pricing-plan-pro .pricing-plan-features li:nth-child(2)').textContent = proFeature2;
    document.querySelector('.pricing-plan-pro .pricing-plan-features li:nth-child(3)').textContent = proFeature3;
    document.querySelector('.pricing-plan-pro .pricing-plan-features li:nth-child(4)').textContent = proFeature4;
    document.querySelector('.pricing-plan-pro .pricing-plan-purchase-btn').textContent = proButtonText;
});

// Event listener for the "Enterprise" form
document.querySelector('#enterprise-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const enterpriseTitle = document.querySelector('#enterprise-title').value;
    const enterpriseCost = document.querySelector('#enterprise-cost').value;
    const enterpriseFeature1 = document.querySelector('#enterprise-feature1').value;
    const enterpriseFeature2 = document.querySelector('#enterprise-feature2').value;
    const enterpriseFeature3 = document.querySelector('#enterprise-feature3').value;
    const enterpriseFeature4 = document.querySelector('#enterprise-feature4').value;
    const enterpriseButtonText = document.querySelector('#enterprise-button-text').value;

    // Update the UI
    document.querySelector('.pricing-plan-enterprise .pricing-plan-title').textContent = enterpriseTitle;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-cost').textContent = enterpriseCost;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(1)').textContent = enterpriseFeature1;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(2)').textContent = enterpriseFeature2;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(3)').textContent = enterpriseFeature3;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(4)').textContent = enterpriseFeature4;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-purchase-btn').textContent = enterpriseButtonText;
});

// Event listener for the table slider
document.querySelector('#table-slider').addEventListener('input', function(event) {
    const numTables = event.target.value;

    // Get all the tables and forms
    const tables = document.querySelectorAll('.pricing-card');
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

