(function () {

    function validator(user, pass, gender) {
        if (user === '') {
            return false;
        } else if (pass === '') {
            return false;
        } else if (isNaN(gender)) {
            return false;
        }
        return true;
    }

    function initializeData() {
        let uname = $('#user').val();
        let upass = $('#pass').val();
        let ugender = parseInt($('input[name=gender]:checked').val());

        if (validator(uname, upass, ugender) === false) {
            alert('Please fill all the fields');
            return;
        }

        let user_data = {
            'username': uname,
            'password': upass,
            'gender': ugender
        };

        return user_data;
    }

    function getRequest() {

        let udata = initializeData();

        if (udata === null) {
            alert('Invalid data!');
            return;
        }

        return $.get('../Home/NewLogInDisplay',
            {
                'user': udata.username,
                'pass': udata.password,
                'gender': udata.gender
            }).done(function (response) {
            alert(`Success! Response: ${JSON.stringify(response)}`);
        }).fail(function (xhr, stat, err) {
            alert(`Status: ${stat} Error: ${err}`);
        }); 

    }


    $('#sbmt').on('click', () => {
        return getRequest(); 
    });
})();