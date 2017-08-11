/**
 * Created by abhishekubhadia on 8/4/17.
 */
$( function() {

    var track = $('.track'),trucks,
        truckColors = ["green","red","blue","purple","pink","orange","black","cyan"],
        yourBet = [];

    if(localStorage.getItem("defaultSetting")){
        var defaultSetting = JSON.parse(localStorage.getItem("defaultSetting"));
    }else{
        defaultSetting = {
            noOfTrucks : 4,
            totalFund : 1000,
            playerName : 'Player 1'
        };
    }

    function init(){
        var trackArea = $('.trackmenu'),
            betForm = $('.bet-form');

        for(var i=0;i<defaultSetting.noOfTrucks;i++){
            trackArea.append('<div class = "track truck' + i + '">');
            $('.truck'+i).append('<span class="bet-value bet-value'+ i +'">$0</span>');
            $('.truck'+i).append('<i class="fa fa-truck" style="color: ' + truckColors[i] + '" aria-hidden="true"></i>');

            $('.bet-form').append('<div><label> Trucker ' + (i + 1) + ' (' + truckColors[i] + ') : $</label>');
            $('.bet-form').append('<input type="text" name = "trucker '+ (i + 1) + '-amount" class="bet-amount" value="0"></div>');

            $('.player-name').html(defaultSetting.playerName);
            $('.player-fund').html('$' + defaultSetting.totalFund);
        }

    }

    init();

    var dialog, form;
    function addBet() {
        var val = ($(".bet-amount").val()),
            fieldItems = document.querySelectorAll('.bet-amount'),
            listItems = document.querySelectorAll('.bet-value');

        fieldItems.forEach(function (element, i) {
            var eleVal = parseInt($(element).val());
            yourBet.push(eleVal);
            if(eleVal > 0){
                $("#start-button").button().attr('disabled', false).removeClass( 'ui-state-disabled' );
                dialog.dialog( "close" );
            }
            $(listItems[i]).html('$' + eleVal);
        })
    };

    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Bet": addBet,
            Cancel: function() {
                dialog.dialog( "close" );
            }
        }
    });

    $( "#bet-button" ).button().on( "click", function() {
        $(".fa-truck").each(function (i) {
            $(this).removeClass('move');
        });

        dialog.dialog( "open" );
    });

    //start race
    $("#start-button").button().on("click",function() {
        $("#start-button").button().attr('disabled', true).addClass( 'ui-state-disabled' );
        var randomDuration = randomNumber();
        $(".fa-truck").each(function (i) {
            $(this).addClass('move').css("-webkit-animation-duration", randomDuration[i] + "s");
        });
        var minN = Math.min.apply(null, randomDuration);
        var maxN = Math.max.apply(null, randomDuration);
        var minNumber = randomDuration.indexOf(minN);
        var winningTruck = trucks[minNumber];
        var betPrice = parseInt($(winningTruck).siblings('.bet-value').html().split('$')[1]);
        var winningPrice = betPrice * 2;

        var calculation = betPrice * 3;
        yourBet.forEach(function (val) {
            calculation = calculation - val;
        });

        setTimeout(function () {
            if(calculation > 0){
                $('.jackpot').html('** Congrats, You Won $ ' + calculation + ' ! ***').show().slideUp(5000);
            }else{
                $('.jackpot').html('** Sorry, You lost $ ' + Math.abs(calculation) + ' ! ***').show().slideUp(5000);
            }

            var finalFund = parseInt($(".player-fund").html().split('$')[1]) + (betPrice * 3) ;
            yourBet.forEach(function (val) {
                finalFund = finalFund - val;
                $('.player-fund').html('$' + finalFund);
            });
            if(finalFund <= 0){
                $('#bet-button').button().attr('disabled', true).addClass( 'ui-state-disabled' );
            }
            yourBet = [];
        }, parseInt(maxN) * 1000);

    });

    function randomNumber(){
        var arr = [];
        trucks = document.querySelectorAll('.fa-truck');

        while(arr.length < trucks.length){
            var randomnumber = Math.ceil( Math.random() * (10 - 5 + 1)) + 5;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
    }

    //Reset the Game settings
     $(".reset-button").on("click",function(e){
         e.preventDefault();
         $.get('reset.html', function(data) {
             $('.content').html(data);
         });
         return false;
     });

} );