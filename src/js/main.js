$(document).ready(function() {


// ** colours ** //

var col1 = 'hsla(190, 30%, 44%, 1)',
    col3 = 'hsla(110, 30%, 44%, 1)';

 

// ** bass ** // 

var bass = new Wad({
    source : 'sine',
    env : {
        attack : 0.02,
        decay : 0.1,
        sustain : 0.9,
        hold : 0.4,
        release : 0.1
    }
});

// ** piano ** //



var piano = new Wad({
    source : 'square', 
    env : {
        attack : 0.01, 
        decay : 0.005, 
        sustain : 0.2, 
        hold : 0.015, 
        release : 0.3
    }, 
    filter : {
        type : 'lowpass', 
        frequency : 1200, 
        q : 8.5, 
        env : {
            attack : 0.2, 
            frequency : 600
        }
    }
});



// ** snare ** //

var snare = new Wad ({
   source : 'noise', 
    env : {
        attack : .001, 
        decay : .01, 
        sustain : .2, 
        hold : .03, 
        release : .02
    }, 
    filter : {
        type : 'bandpass', 
        frequency : 300, 
        q : .180
    }
})





$('[id^="sound"]').on('mousedown', function() {

 
//animate requires jquery.ui
$(this).stop().animate( { backgroundColor: col3 }, 0 )
        .delay(100).animate( { backgroundColor: col1 }, 500 );

});


$('#sound-1').on('mousedown', function() {

    bass.play({ pitch : 'B2',env : { release : 0.25 } }); 

});



$('#sound-2').on('mousedown', function() {

    bass.play({ pitch : 'A2', env : { release : 4 } });   
});



$('#sound-3').on('mousedown', function() {

    piano.play({ pitch : 'F4',env : { release : 0.25 } });    
});



$('#sound-4').on('mousedown', function() {

    piano.play({ pitch : 'F5', env : { release : 4 } });  
    snare.play();  
});







}); // END ALL