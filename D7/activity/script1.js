function calculateLoan() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * interestRate * x) / (x - 1);

    if (isFinite(monthlyPayment)) {
        // Calculate total payment and total interest
        const totalPayment = monthlyPayment * loanTerm;
        const totalInterest = totalPayment - loanAmount;

        // Display results
        document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
        document.getElementById('totalPayment').textContent = totalPayment.toFixed(2);
        document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
        document.getElementById('results').style.display = 'block';
    } else {
        alert('Please enter valid values.');
    }
}