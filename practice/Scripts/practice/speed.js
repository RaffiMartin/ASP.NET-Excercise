$(document).ready(function () {

    function calculateSpeed(vh, sl) {
        return vh - sl;
    }

    function getSpeed() {
        var vh = parseFloat($('#vehicleSpeed').val());
        var sl = parseFloat($('#speedLimit').val());

        if (vh < 0) {
            alert('Vehicle speed cannot be negative');
            return;
        } else if (sl < 0) {
            alert('Speed limit cannot be negative');
            return;
        }

        var os = calculateSpeed(vh, sl);
        var charge = 0.0;

        if (os < 0) {
            charge = 0.00;
        } else if (os <= 10) {
            charge = 50.00;
        } else if (os <= 20) {
            charge = 75.00;
        } else if (os <= 30) {
            charge = 100.00;
        } else if (os > 30) {
            charge = 200.00;
        }

        return alert(charge.toFixed(2));

    }

    $('#sbmt').click(function () {
        return getSpeed();
    })
});