$(document).ready(function () {

    // costant decalted to make the priceStorage array global
    const priceStorage = [];
    const tax = 8.25;
    const deductiondWithTax = function (x) {
        return (x + (x *  0.0825)).toFixed(2);
    }

    function getProduct() {
        // get the product from the DOM.
        // DOM is Document Object Model
        // go to your favorite browser
        // right click on any page
        // select inspect
        // you will see the DOM
        return $('.prodList').val();
    }

    function getQuantity() {
        // validates the quantity input
        return parseInt($('#qty').val());
    }

    function pricing() {
        // get the price of the product
        switch (getProduct()) {
            case 'TV':
                return 400.00;
                break;
            case 'VCR':
                return 220.00;
                break;
            case 'REMOTE CONTROLLER':
                return 35.20;
                break;
            case 'CD PLAYER':
                return 300.00;
                break;
            case 'TAPE RECORDER':  
                return 150.00;
                break;
            default:
                break;
        }
    }

    // function to convert the product to an array
    // function calls inside the array
    function toArray() {
        let productArray = [getQuantity(), getProduct(), '$' + pricing(), '$' + pricing()];
        return productArray;
    }

    function insertToPage() {
        // create a new row
        let newRow = $('<tr>');
        // append the new row to the table
        for (let i = 0; i < toArray().length; i++) {
            newRow.append('<td>' + toArray()[i] + '</td>');
        }

        // attach a click event to the new row
        newRow.click(function () {
            priceStorage.pop();
            $(this).remove();
        });

        return $('#tableBody').append(newRow);
    }

    function calculatePrice() {
        // calculates the total price from the constant priceStorage
        let total = 0.00;


        for (var i = 0; i < priceStorage.length; i++) {
            total += priceStorage[i];
        }

        return total;
    }

    function transactionInvoice() {
        // clears previous subtotal
        $('#subtotal').empty();
        let invoice = $('<h3>');
        invoice.append('<h6>' + `Sub Total: ${calculatePrice()}` + '</h6>');
        invoice.append('<h6>' + `Tax: ${tax}` + '</h6>');
        invoice.append('<h6>' + `Sub Total: ${deductiondWithTax(calculatePrice())}` + '</h6>');

        return $('#subtotal').append(invoice);
    }

    function inputConstraints() {
        if (isNaN(getQuantity())) {
            return true; 
        }

        return false;
    }

    // event listeners
    $('#addToCart').click(() => {
        if (inputConstraints() === true) {
            return alert('Please enter a valid quantity')
        }
        priceStorage.push(pricing());
        return insertToPage();
    });

    $('#checkPrice').click(() => {
        if (inputConstraints() === true) {
            return alert('Please enter a valid quantity')
        }
        return transactionInvoice();
    });

    $('#checkOut').click(function () {
        if (inputConstraints() === true) {
            return alert('Please enter a valid quantity')
        }
        $('td').empty();
        $('#subtotal').empty();

        priceStorage.length = 0;

        return alert('Thank you for shopping with us!')
    });
});