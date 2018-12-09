$(document).ready(function () {
    $('#loader').addClass('loader');
    $('#buttons').hide();
    back();

    function back() {
        var backstart = 3;
        var intervalstart;
        intervalstart = setInterval(function () {
            backstart--;
            $('#backstart').text(backstart);
            if (backstart == 0) {
                clearInterval(intervalstart);
                $('#backstart').text('start').hide(1500);
                run();
            }
        }, 1000);
    }

    var backstart2 = 3;
    var intervalstart2;
    
    $("#res").click(function () {
        $('#backstart').text('3').show().css("display", "inline");
        $('#hercount').text('0');
        $('#mycount').text('0');
        $('#timecount').text('10');
        $('#winner').text('');
        $("#mybut").show();
        $("#mybut").click(function () {
            $('#mycount').text('0');
        });
        $('#buttons').hide();
        back();
    });

   function run() {
        var mycount = 0;
        var timecount = 20;
        var interval;
        var compcount = 0;
        $("#mybut").click(function () {
            mycount++;
            $('#mycount').text(mycount);
        });
        $('#statistic').addClass('hide');


        interval = setInterval(function () {

            timecount--;
            $('#timecount').text(timecount);

            if (timecount == 0) {
                clearInterval(interval);
                $('#mybut').hide();
                $('#buttons').show(100);
                if (mycount > compcount) {
                    $('#winner').text("You Win");
                } else {
                    $('#winner').text("You Lose");

                }
            }
        }, 1000);


        intervalcomp = setInterval(function () {
            compcount++;
            $('#hercount').text(compcount);
            if (timecount == 0) {
                clearInterval(intervalcomp);
            }
        }, 130);
    }
});


