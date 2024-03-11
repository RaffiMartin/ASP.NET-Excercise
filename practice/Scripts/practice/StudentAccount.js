(function () {
    // TODO: POST REQUEST NEEDS TO BE IMPLEMENTED
    // BT: RAFAEL MARTINEZ
    // DATE: 3/08/2024
    // DESCRIPTION: This file is used to validate the input fields and to get the data from the input fields.

    // validation functions, also called as support functions.

    
    function termsSimulator() {
        var terms = ['PRELIM', 'MIDTERM', 'SEMI', 'FINALS'];
        var randomIndex = Math.floor(Math.random() * terms.length);
        return terms[randomIndex];
    }

    function minimumPayment(x, y) {

        let minPay = 0.0;
        if (x[0].terms === 'PRELIM') {
            minPay = parseInt(y) * 0.53;
        } else if (x[0].terms === 'MIDTERM') {
            minPay = parseInt(y) * 0.64;
        } else if (x[0].terms === 'SEMI') {
            minPay = parseInt(y) * 0.75;
        }
        return minPay.toFixed(2);
    }

    function totalUnits(x) {
        let total = 0;
        for (let i = 0; i < parseInt(x); i++) {
            total += 3.0;
        }
        return total;
    }

    function intValidator(...x) {
        let result = true;
        for (let i of x) {
            if (isNaN(i)) {
                result = false;
            }
        }
        return result;
    }

    function stringValidator(...x) {
        let result = true;
        for (let value of x) {
            if (value === '') {
                result = false;
            }
        } 
        return result;
    }

    function genderAssignment(x) {
        let gender = '';
        switch (parseInt(x)) {
            case 0:
                gender = 'MALE';
                break;
            case 1:
                gender = 'FEMALE';
                break;
            case 2:
                gender = 'NON-BINARRY';
                break;
            default:
                break;
        }
        return gender;
    }

    function yearAssignment(x) {
        let gender = '';
        switch (parseInt(x)) {
            case 0:
                gender = 'FIRST YEAR';
                break;
            case 1:
                gender = 'SECOND YEAR';
                break;
            case 2:
                gender = 'THIRD YEAR';
                break;
            case 3:
                gender = 'FOURTH YEAR';
                break;
            default:
                break;
        }
        return gender;
    }

    function subjectCount(x) {
        let flag = true;
        if (x <= 0) {
            flag = false;
        } else if (x > 10) {
            flag = false;
        }
        return flag;
    }

    function courseBinding(x, y) {
        // function is only used for binding the course code to the course name.
        let course = '';
        let tuition = 0;
        let registration = 0;
        let misc = 0;
        let lab = 0;

        let selectedCourse = parseInt(y);
        if (x === '0001') {
            if (selectedCourse === 0) {
                course = 'C1';
                tuition = 356.75;
                registration = 545.00;
                misc = 1000.45;
                lab = 1900.75;
            } else {
                return false;
            }
        } else if (x === '0002') {
            if (selectedCourse === 1) {
                course = 'C2';
                tuition = 387.65;
                registration = 550.00;
                misc = 1050.35;
                lab = 1920.20;
            } else {
                return false;
            }
        } else if (x === '0003') {
            if (selectedCourse === 2) {
                course = 'C3';
                tuition = 345.94;
                registration = 555.00;
                misc = 1100.25;
                lab = 1939.65;
            } else {
                return false;
            }
        } else if (x === '0004') {
            if (selectedCourse === 3) {
                course = 'C4',
                tuition = 351.26;
                registration = 560.00;
                misc = 1150.15;
                lab = 1959.10;
            } 
        } else if (x === '0005') {
            if (selectedCourse === 4) {
                course = 'C5',
                tuition = 378.44;
                registration = 565.00;
                misc = 1200.05;
                lab = 1978.55;
            }
        } else if (x === '0006') {
            if (selectedCourse === 5) {
                course = 'C6',
                tuition = 326.11;
                registration = 570.00;
                misc = 1249.05;
                lab = 1998.00;
            }
        } else if (x === '0007') {
            if (selectedCourse === 6) {
                course = 'C7',
                tuition = 310.45;
                registration = 610.00;
                misc = 1299.85;
                lab = 2017.45;
            }
        } else if (x === '0008') {
            if (selectedCourse === 7) {
                course = 'C8',
                tuition = 399.79;
                registration = 624.00;
                misc = 1349.75;
                lab = 2036.90;
            }
        }  
        return {
            'tuition': tuition,
            'registration': registration,
            'misc': misc,
            'lab': lab,
            'course': course
        };
    }

    function appendData(x) {
        $('#code').append('<td>' + x[0].courseCode + '</td>');
        $('#crsData').append($('<td></td>').text(x[0].course));
        $('#tuition').append('<td>' + x[0].tuition + '</td>');
        $('#reg').append('<td>' + x[0].registration + '</td>');
        $('#msc').append('<td>' + x[0].misc + '</td>');
        $('#lab').append('<td>' + x[0].lab + '</td>');
    }

    function calculatedData(x) {
        return calculateTotal(parseInt(x[0].units), parseInt(x[0].tuition), parseInt(x[0].registration), parseInt(x[0].misc), parseInt(x[0].lab));
    }

    function calculateTotal(a, b, c, d, e) {
        return (a * b) + c + d + e;
    }

    function hideRemoveElements() {
        $('#code > td').empty();
        $('#crsData > td').empty();
        $('#tuition > td').empty();
        $('#reg > td').empty();
        $('#msc > td').empty();
        $('#lab > td').empty();
        $('#total > h6').remove();
        $('#table-wrapper').hide();
        $('#student-info > h6').remove();
        paymentBtns();
    }

    function clearFields() {
        $('#id-no').val('');
        $('#fname').val('');
        $('#lname').val('');
        $('#crs-code').val('');
        $('#crs').val('');
        $('#year-level').val('');
        $('#subs').val('');
    }
    
    // entry points of the program.
    // the above functions are only for support and validation.
    function getInfo() {
        // personal information
        let schoolId = parseInt($('#id-no').val());
        let fname = $('#fname').val();
        let lname = $('#lname').val();
        let sex = parseInt($('input[name=radio]:checked').val());

        // SECONDARY VALIDATION
        if (!stringValidator(fname, lname, sex)) {
            alert('Please fill out all the fields!');
            return;
        } else if (!intValidator(schoolId)) {
            alert('Please fill out all the fields!');
            return;
        }
        genderData = genderAssignment(sex);
        return { schoolId, fname, lname, genderData };
    }

    function getSchoolInfo() {
        // school information
        let courseCode = $('#crs-code').val().toUpperCase();
        let course = parseInt($('#crs').val());
        let stuYear = parseInt($('#year-level').val());
        let numberOfSubjects = parseInt($('#subs').val());

        // SECONDARY VALIDATION
        if (!stringValidator(courseCode, stuYear)) {
            alert('Please fill out all the fields!');
            return;
        } if (!intValidator(stuYear, numberOfSubjects, course)) {
            alert('Please fill out all the fields!');
            return;
        } else if (!subjectCount(numberOfSubjects)) {
            alert('Subject/s requires Minimum of 1 and Maximum of 10.');
            return;
        } else if (courseBinding(courseCode, course) === false) {
            alert('Course code and Course do not match, please check and confirm through you Certificate of Enrollment.');
            return;
        }

        let yearData = yearAssignment(stuYear);
        let bindedCourse = courseBinding(courseCode, course);

        let units = totalUnits(numberOfSubjects);
        
        //return { courseCode, bindedCourse, yearData, numberOfSubjects};
        return { bindedCourse, courseCode, units };
    }

    function Initialization() {

        let fullName = `${getInfo().lname.toUpperCase()}, ${getInfo().fname.toUpperCase()}`;
        return [getSchoolInfo().courseCode,
            getSchoolInfo().bindedCourse.course,
            getSchoolInfo().bindedCourse.tuition,
            getSchoolInfo().bindedCourse.registration,
            getSchoolInfo().bindedCourse.misc,
            getSchoolInfo().bindedCourse.lab,
            fullName,
            getInfo().schoolId,
            getSchoolInfo().units
        ];
    }

    function postData() {
        let data = Initialization();
        $.post('../Home/StudentAccountingData', {
            'courseCode': data[0],
            'course': data[1],
            'tuition': data[2],
            'registration': data[3],
            'misc': data[4],
            'lab': data[5],
            'name': data[6],
            'schoolId': data[7],
            'units': data[8],
            'terms': termsSimulator()
        }).done((data) => {
            for (let i = 0; i <= data.length; i++) {
                // check the data if it has values.
                // go to DOM and click console.
                // we will use this data to display in our table
                console.log(JSON.stringify(data[i]));
            }
            appendData(data);
            let hasChildren = $('#student-info').children().length > 0;
            if (!hasChildren) {
                // Access the correct indices for name and schoolId
                $('#student-info').append('<h6> ' + data[1].fullname + "<br/>" + data[1].schoolId + '</h6>');
            }

            let totalPayment = calculatedData(data).toFixed(2);
            if (!hasChildren) {
                // Access the correct indices for name and schoolId
                $('#total').append('<h6> ' + 'TOTAL: ' + totalPayment + '<br/>' + 'Minumun Pay: ' + minimumPayment(data, totalPayment) + '</h6>');
            }

            console.log(data[0].terms);

            $('#table-wrapper').show()
            $('#payment-wrapper').show();
            clearFields();
        }).fail((xhr, status, error) => {
            alert('Data: ' + xhr.responseText + '\nStatus: ' + status);
        });
    }

    
    // functions to hide and show elements.
    const tableHide = () => {
        $('#table-wrapper').hide();
    }

    const paymentBtns = () => {
        $('#payment-wrapper').hide();
    }


    // all buttons section
    $('#btn').on('click', () => {

        return postData();
    });


    $('#cash').on('click', () => {
        hideRemoveElements();
        confirm('Are you sure you want to pay in cash?');
        return alert('Thank you for your payment. Have a great day!');
    });

    $('#check').on('click', () => {
        hideRemoveElements();
        confirm('Are you sure you want to pay in cash?');
        return alert('Thank you for your payment. Have a great day!');
    });

    $('#credit').on('click', () => {
        hideRemoveElements();
        return alert('Your fee will be credited to the next grading.');
    });

    tableHide();
    paymentBtns();

})();