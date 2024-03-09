$().ready(function () {
    //fifth method
    function insertToTable() {
        var newRow = $('<tr>');

        for (let i = 0; i < itemArray().length; i++) {
            newRow.append('<td>' + itemArray()[i] + '</td>');
        }

        newRow.on('click', function() {
            $(this).remove();
            priceArray.pop();
        });

        $('.productOutput').append(newRow);
    }

    function itemArray() {
        return [getQuantity(), getItem(), assignPrices(), assignPrices()];
    }

    // third method
    function assignPrices() {
        switch (getItem()) {
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

    // second method
    function getItem() {
        return $('#products').val()
    }

    // first method
    function getQuantity() {
        // constraint added to evaluate value
        var prodQty = parseInt($('#qty').val());
        if (isNaN(prodQty)) {
            return false;
        } else {
            return prodQty;
        }
    }

    // helper functions

    //function priceArray() {
    //    return [];
    //}

    const priceArray = [];

    // buttons
    $('#addToCart').click(function () {
        if (getQuantity() === false) {
            alert('Please enter an item quantity.');
            return;
        }
        for (let i = 0; i < priceArray.legnth; i++) {
            console.log(priceArray.append(assignPrices()));
        }

        insertToTable();

        

    });

    $('#checkPrice').click(function () {
        return alert('Price Checked!');
    });

    $('#placeOrder').click(function () {
        return alert('Order was placed!');
    });
});