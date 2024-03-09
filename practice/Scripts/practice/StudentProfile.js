$().ready(function () {

    $("#btnclck").click(function () {

        var lastname = $("#lname").val();
        var firstname = $("#fname").val();
        var gender = $("#sel_gender").val();
        var value = $("input[name='gender']:checked").val();
        if (value == "0")
            alert("Female")
        else if (value == "1")
            alert("Male")
        else
            alert("Shemale")

        $.post('../Home/StudentEntry', {
            lname: lastname,
            fname: firstname,
            gender: value,
        }, function (data) {
            alert(data[0].mess);
        });
    });
});