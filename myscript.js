function submit(){
   alert("Done!")
}
// inputFormat.js

function formatInput(input) {
    // Remove non-numeric characters
    var inputValue = input.value.replace(/\D/g, '');

    // Apply specific formatting rules based on input ID
    if (input.id === 'cnumber') {
        // Limit to 16 characters for the first input
        if (inputValue.length > 16) {
            inputValue = inputValue.substr(0, 16);
        }

        // Add hyphens after every 4 characters
        var formattedValue = '';
        for (var i = 0; i < inputValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += '-';
            }
            formattedValue += inputValue[i];
        }
        input.value = formattedValue;
    } else if (input.id === 'exp') {
        // Limit to 4 characters for the second input
        if (inputValue.length > 4) {
            inputValue = inputValue.substr(0, 4);
        }

        // Add backslashes after every 2 characters
        var formattedValue = '';
        for (var i = 0; i < inputValue.length; i++) {
            if (i > 0 && i % 2 === 0) {
                formattedValue += '/';
            }
            formattedValue += inputValue[i];
        }
        input.value = formattedValue;
    } else if (input.id === 'cvv') {
        // Limit to 4 characters for the third input
        if (inputValue.length > 3) {
            inputValue = inputValue.substr(0, 3);
        }
        input.value = inputValue;
    }
}

function limitInputLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}



/*    document.getElementById("submit-btn").onclick = function() {
         Credit Card Number validation
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
    };*/

