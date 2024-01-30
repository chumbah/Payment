    document.getElementById("submit-btn").onclick = function() {
        // Credit Card Number validation
        var ccNumber = document.getElementById("cc-number").value;
        var ccRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        if (!ccRegex.test(ccNumber)) {
            alert("Please enter a valid credit card number in the format xxxx-xxxx-xxxx-xxxx");
            return false;
        }

        // Expiry Date validation
        var expiry = document.getElementById("expiry").value;
        var expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryRegex.test(expiry)) {
            alert("Please enter a valid expiry date in the format MM/YY");
            return false;
        }

        // CVV validation
        var cvv = document.getElementById("cvv").value;
        if (cvv.length !== 3 || isNaN(cvv)) {
            alert("Please enter a valid CVV (3 digits)");
            return false;
        }

        // Amount validation
        var amount = parseFloat(document.getElementById("amount").value);
        if (isNaN(amount) || amount < 1 || amount > 10000) {
            alert("Please enter a valid amount between 1 and 10000");
            return false;
        }

        // If all validations pass, submit the form
        document.getElementById("payment-form").submit();
    };
