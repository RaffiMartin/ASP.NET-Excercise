(function () {

    function validateForm(x, y, z) {
        if (x === '') {
            return false;
        } else if (y === '') {
            return false;
        } else if (isNaN(z)) {
            return false;
        }
        return true;
    }

    function loginForm() {
        let gender = parseInt($('input[name=gender]:checked').val());

        let usr = $('#user').val();
        let pwd = $('#pass').val();

        let valid = validateForm(usr, pwd, gender);
        /*validate form*/
        if (valid === false) {
            alert('Invalid input!');
            return
        }

        return {usr, pwd, gender};
    }

    function getData() {

        let data = loginForm();

        if (data === null) {
            alert('Invalid data!');
            return;
        }

        return $.get('../Home/LoginDataSample',
            {
                'user': data.usr,
                'pass': data.pwd,
                'gender': data.gender
                
            }).done(function (response) {
                // This callback is executed if the request is successful
                alert('Success! Response: ' + JSON.stringify(response));
            }).fail(function (xhr, status, error) {
                // This callback is executed if the request encounters an error
                alert('Error! Status: ' + status + ', Error: ' + error);
            });
    }

    $('#sbmt').on('click', () => {

        return getData();
    });
})();