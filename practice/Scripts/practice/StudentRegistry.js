(() => {




    function validation(name, lastname, gender) {
        if (!name) {
            return false;
        } else if (!lastname) {
            return false;
        } else if (isNaN(gender)) {
            return false;
        }
        return true;
    }

    function initialize() {
        let firstName = $('#fname').val();
        let lastName = $('#lname').val();
        let gender = parseInt($('input[name=radio]:checked').val());

        if (!validation(firstName, lastName, gender)) {
            alert('Please fill in all fields');
            return
        }
        
        return {
            "fname": firstName,
            "lname": lastName,
            "genType": gender
        };
    }

    //function getStudent() {
    //    let stu_data = initialize();

    //    return $.get('../Home/StudentData', {
    //        "fname": stu_data.fname.toUpperCase(),
    //        "lname": stu_data.lname.toUpperCase(),
    //        "genType": stu_data.genType
    //    }, function (data) {
    //        alert(`Student added ${data[0].mess}`);
    //    })
    //}

    function getStudent() {
        let stu_data = initialize();

        return $.get('../Home/StdentData', {
            "fname": stu_data.fname.charAt(0).toUpperCase() + stu_data.fname.slice(1),
            "lname": stu_data.lname.charAt(0).toUpperCase() + stu_data.lname.slice(1),
            "genType": stu_data.genType
        }).done((data) => {
            alert(`Student added ${JSON.stringify(data[0].mess)}`);
        }).fail((xhr, stat, err) => {

            alert(`Request failed \nXMLHttpRequest: ${xhr.status} \nStatus: ${stat} \nError: ${err}`);
        });

    }

    function submitButton() {
        $('#sbmt').on('click', () => {
            return getStudent();
        });
    }

    submitButton();
})();