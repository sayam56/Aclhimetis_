// Event listener for the "Hobby" form
document.querySelector('#hobby-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const hobbyTitle = document.querySelector('#hobby-title').value;
    const hobbyCost = document.querySelector('#hobby-cost').value;
    const hobbyFeature1 = document.querySelector('#hobby-feature1').value;
    const hobbyFeature2 = document.querySelector('#hobby-feature2').value;
    const hobbyFeature3 = document.querySelector('#hobby-feature3').value;
    const hobbyFeature4 = document.querySelector('#hobby-feature4').value;
    const hobbyButtonText = document.querySelector('#hobby-button-text').value;

    // Update the UI
    document.querySelector('.hobbyTitle').textContent = hobbyTitle;
    document.querySelector('.hobbyCost').textContent = hobbyCost;
    document.querySelector('.hobbyFeature1').textContent = hobbyFeature1;
    document.querySelector('.hobbyFeature2').textContent = hobbyFeature2;
    document.querySelector('.hobbyFeature3').textContent = hobbyFeature3;
    document.querySelector('.hobbyFeature4').textContent = hobbyFeature4;
    document.querySelector('.hobbyButtonText').textContent = hobbyButtonText;
});


// Event listener for the "Expert" form
document.querySelector('#expert-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const expertTag = document.querySelector('#expert-tag').value;
    const expertTitle = document.querySelector('#expert-title').value;
    const expertCost = document.querySelector('#expert-cost').value;
    const expertFeature1 = document.querySelector('#expert-feature1').value;
    const expertFeature2 = document.querySelector('#expert-feature2').value;
    const expertFeature3 = document.querySelector('#expert-feature3').value;
    const expertFeature4 = document.querySelector('#expert-feature4').value;
    const expertButtonText = document.querySelector('#expert-button-text').value;

    // Update the UI
    document.querySelector('.expertTag').textContent = expertTag;
    document.querySelector('.expertTitle').textContent = expertTitle;
    document.querySelector('.expertCost').textContent = expertCost;
    document.querySelector('.expertFeature1').textContent = expertFeature1;
    document.querySelector('.expertFeature2').textContent = expertFeature2;
    document.querySelector('.expertFeature3').textContent = expertFeature3;
    document.querySelector('.expertFeature4').textContent = expertFeature4;
    document.querySelector('.expertButtonText').textContent = expertButtonText;
});


// Event listener for the "Business" form
document.querySelector('#business-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    const businessTitle = document.querySelector('#business-title').value;
    const businessCost = document.querySelector('#business-cost').value;
    const businessFeature1 = document.querySelector('#business-feature1').value;
    const businessFeature2 = document.querySelector('#business-feature2').value;
    const businessFeature3 = document.querySelector('#business-feature3').value;
    const businessFeature4 = document.querySelector('#business-feature4').value;
    const businessButtonText = document.querySelector('#business-button-text').value;

    // Update the UI
    document.querySelector('.pricing-plan-enterprise .pricing-plan-title').textContent = businessTitle;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-cost').textContent = businessCost;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(1)').textContent = businessFeature1;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(2)').textContent = businessFeature2;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(3)').textContent = businessFeature3;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-features li:nth-child(4)').textContent = businessFeature4;
    document.querySelector('.pricing-plan-enterprise .pricing-plan-purchase-btn').textContent = businessButtonText;
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


