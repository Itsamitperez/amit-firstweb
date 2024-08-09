// Function to hide all examples
function hideAllExamples() {
    const examples = document.querySelectorAll('.example-features > *');
    examples.forEach(example => {
        example.style.display = 'none';
    });
}

// Function to deactivate all buttons
function deactivateAllButtons() {
    const buttons = document.querySelectorAll('.button-group');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

// Function to show the selected example and toggle info text
function showExample(targetId, button) {
    hideAllExamples();
    deactivateAllButtons();
    
    // Show the example
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.style.display = 'block';
    }
    
    // Activate the button and show info text
    button.classList.add('active');
}

// Add click event listeners to buttons
document.querySelectorAll('.button-group').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        showExample(targetId, this);
    });
});

// Show the first example by default
document.getElementById('example-1').style.display = 'block';
document.querySelector('.button-group[data-target="example-1"]').classList.add('active');
