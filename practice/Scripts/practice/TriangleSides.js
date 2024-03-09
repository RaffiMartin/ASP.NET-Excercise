$(function () {

    function evaluate() {
        var a = parseInt($('#input1').val());
        var b = parseInt($('#input2').val());
        var c = parseInt($('#input3').val());

        var triangleType = '';

        // for scalene
        if (a !== b) {
            if (a !== c) {
                if (b !== c) {
                    triangleType = 'Scalene';
                } else {
                    triangleType = 'Isosceles';
                }
            } else {
                triangleType = 'Isosceles';
            }
        } else if (a === b) {
            if (a === c) {
                triangleType = 'Equilateral';
            } else {
                triangleType = 'Isosceles';
            }
        }
        return triangleType
    }

    $('#submit').click(function () {
        alert(evaluate());
    });

});