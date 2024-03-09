$(function () {

    function getGrade() {
        var grade = parseInt($('#grade').val());
        var result = '';
        
        switch (true) {
            case grade < 60:
                result = 'F';
                break;
            case grade < 69:
                result = 'D';
                break;
            case grade < 79:
                result = 'C';
                break;
            case grade < 89:
                result = 'B';
                break;
            case grade < 100:
                result = 'A';
                break;
            default:
                break;
        }
        return `Your grade is ${result}`;
    }

    $('#sbmtBtn').click(function () {
        return alert(getGrade());
    });
});