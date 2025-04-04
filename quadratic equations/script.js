document.getElementById('equationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the page from refreshing on form submission

    // Get the input values
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    // Validate input: check if any coefficient is not a valid number
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for all coefficients.");
        return;
    }

    // Check if "a" is zero (not a quadratic equation)
    if (a === 0) {
        document.getElementById('output').textContent = 'The value of "a" cannot be zero.';
        document.getElementById('result').style.display = 'block';
        return;
    }

    // Calculate discriminant
    let discriminant = b * b - 4 * a * c;
    let resultText = '';

    // Determine the nature of the roots based on the discriminant
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `The roots are real and different: ${root1.toFixed(2)} and ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        resultText = `The root is real and repeated: ${root.toFixed(2)}`;
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        resultText = `The roots are complex: ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i and ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    }

    // Display the result
    document.getElementById('output').textContent = resultText;
    document.getElementById('result').style.display = 'block';
});