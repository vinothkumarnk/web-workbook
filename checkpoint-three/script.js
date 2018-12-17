$(document).ready(function () {
    $('#loader').addClass('loader');
    $('#buttons').hide();
    $('#mybut1').hide();
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
        $('#timecount').text('20');
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
        var c = 0;
        var b = 10;

        var timecount = 20;
        var interval;
        var compcount = 0;

        $("#mybut").click(function () {
            
            if (c>0){
                mycount = mycount + b;
                c=0;
            }
            mycount++;
            $('#mycount').text(mycount);


            if (mycount == 10){
              
                $('#mybut1').show();
            }


            $("#mybut1").click(function () {
                
                if (mycount == 40){ b= 20;}
                if (mycount ==60){ b = 40;}
                if (mycount ==100){ b = 60;}
                c = mycount + b;
              
                $('#mycount').text(c);
                $('#mybut1').hide();
                
            });

            if (mycount == 40){
                
                $('#mybut1').show();
            }

            if (mycount == 60){
                
                $('#mybut1').show();
            }
            if (mycount == 100){
                
                $('#mybut1').show();
            }

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
        }, 165);
    }
});


