$(document).ready(function(){

    $('#d20').click(function(){
        var res = Math.floor(Math.random() * 20) + 1 ;
        $('#res').html("D20: "+ res);
    });
    $('#d12').click(function(){
        var res = Math.floor(Math.random() * 12) + 1 ;
        $('#res').html("D12: "+res);
    });
    $('#d10').click(function(){
        var res = Math.floor(Math.random() * 10) + 1 ;
        $('#res').html("D10: "+res);
    });
    $('#d8').click(function(){
        var res = Math.floor(Math.random() * 8) + 1 ;
        $('#res').html("D8: "+res);
    });
    $('#d4').click(function(){
        var res = Math.floor(Math.random() * 4) + 1 ;
        $('#res').html("D4: "+res);
    });
    $('#d6').click(function(){
        var res = Math.floor(Math.random() * 6) + 1 ;
        $('#res').html("D6: "+res);
    });

});