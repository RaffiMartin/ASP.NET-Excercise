$().ready(function () {

    $('#btnSubmit').on('click', function () {

        let num1 = parseInt($('#n1').val());
        let num2 = parseInt($('#n2').val());

        // store operation to variable
        let operation = $('#dropdown').val();

        // intialize result for later use
        let result = 0;

        // switch statement for readability purposes
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'mult':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            case 'mod':
                result = num1 % num2;   // return remainder
                break;
        }

        // display alert in browser
        return alert(result);

    });
});