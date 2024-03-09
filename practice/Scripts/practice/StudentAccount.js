(function () {

    // TODO: POST REQUEST NEEDS TO BE IMPLEMENTED
    // BT: RAFAEL MARTINEZ
    // DATE: 3/08/2024
    // DESCRIPTION: This file is used to validate the input fields and to get the data from the input fields.

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
            if (value === "") {
                result = false;
            }
        } 
        return result;
    }
    
    function getInfo() {
        // personal information
        let schoolId = parseInt($('#id-no').val());
        let fname = $('#fname').val();
        let lname = $('#lname').val();
        let sex = $('input[name=radio]:checked').val();

        // SECONDARY VALIDATION
        if (!stringValidator(fname, lname, sex)) {
            if (!intValidator(schoolId)) {
                alert('Please fill out all the fields!');
                return;
            }
            alert('Please fill out all the fields!');
            return;
        }

        return {schoolId, fname, lname, sex};
    }

    function getSchoolInfo() {
        // school information
        let courseCode = $('#crs-code').val();
        let course = $('#crs').val();
        let stuYear = parseInt($('#year-level').val());
        let numberOfSubjects = parseInt($('#subs').val());

        // SECONDARY VALIDATION
        if (!stringValidator(courseCode, course, stuYear)) {
            if (!intValidator(stuYear, numberOfSubjects)) {
                alert('Please fill out all the fields!');
                return;
            }
            alert('Please fill out all the fields!');
            return;
        }
        return {courseCode, course, stuYear, numberOfSubjects};
    }

    function Initialization() {

        let name = `${getInfo().fname} ${getInfo().lname}`;
        let id = getInfo().schoolId;
        let sex = getInfo().sex;
        let courseCode = getSchoolInfo().courseCode;
        let course = getSchoolInfo().course;
        let year = getSchoolInfo().stuYear;
        let subjects = getSchoolInfo().numberOfSubjects;

        let dataInfo = `${name} \n ${id} \n ${sex} \n ${courseCode} \n ${course} \n ${year} \n ${subjects}`

        return alert(dataInfo);
    }


    $('#btn').on('click', () => {
        return Initialization();
    });

})();