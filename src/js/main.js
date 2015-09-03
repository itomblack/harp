$(document).ready(function() {


// ** colours ** //

var col1 = 'hsla(190, 30%, 44%, 1)',
    col3 = 'hsla(110, 30%, 44%, 1)';

 

// ** harmonica ** //

var harmonica = new Wad({
    source : 'square', 
    env : {
        attack : 0.5, 
        decay : 0, 
        sustain : 1, 
        hold : 0.015, 
        release : 10
    }, 
    filter : {
        type : 'lowpass', 
        frequency : 3000, 
        q : 8.5, 
        env : {
            attack : 0.2, 
            frequency : 100
        }
    },
});

var theVolume = 1;
// ******************************************************************* //



function getVolume(e, parent, height) {
    if ( parent.indexOf('row-blow') > -1) {
         //get volume from mouse positions in div
        theVolume = (e.offsetY/ height).toFixed(1);
        }
    //Reverse volume if draw note
    else if ( parent.indexOf('row-draw') > -1) {
        theVolume = (e.offsetY/ height);
        theVolume = (1 - theVolume).toFixed(1);
    }
}
// ******************************************************************* //




// ********* MOUSE MOVE SET THE VOLUME BY DIV POSITION *********** //
$('[id^="note"]').on('vmousemove', function(e) {

    getVolume(e, this.parentNode.id, $(this).height());
    // console.log(e);

});

// ********* MOUSE OVER PLAYS A NOTE *********** //
$('[id^="note"]').on('vmouseover', function(e) {
    //get note from ID
    var note = this.id.split('-').pop();
    //play note
    playsound(note, theVolume);
    //keep playing note while mouseover
    timeout = setInterval(function () {
        playsound(note, theVolume)
    }, 500);
    return false;
    //stop when mouse removed
}).on('vmouseup', function() {
    clearInterval(timeout);
    return false;
}).on('vmouseout', function() {
    clearInterval(timeout);
    return false;
});
// ******************************************************************* //


// ********* PLAY A NOTE *********** //
function playsound(note, theVolume) {
    // console.log(theVolume);
    if (theVolume >= 0 && theVolume <= 1) {
        harmonica.play({ pitch : note, env : { release : 0.5 } , volume: theVolume });  
    }
    else {
        theVolume = 0.5;
        harmonica.play({ pitch : note, env : { release : 0.5 } , volume: theVolume });  
    }  
}
// ******************************************************************* //



// ********* CHANGE KEY WITH BUTTONS *********** //

$('[id^="play"]').on('click', function(e) {

    $('#intro-box').addClass('js-hide');

    $('[id^="play"]').removeClass('active');
    $(this).addClass('active');
    var key = this.id.split('-').pop();
    
    $('.key-selected').removeClass('key-selected');
    $('#harmonica-notes-' + key).addClass('key-selected');

    var scale = $('#row-blow-' + key).children();
    
    //loop through 10 sounds in scale
    var i = 0;                     
    function soundLoop () {           
       setTimeout(function () {

          var noteSelect =  scale[i].id.split('-').pop();
          //highlight bar
          $(scale[i]).toggleClass('highlight-row');
          //play sound
            playsound(noteSelect, 0.8);         
          i++;                     
          if (i < 10) {            
             soundLoop();              
          } else {
            //remove highlight classes at end
            setTimeout(function(){
              $('#row-blow-' + key).children().toggleClass('highlight-row'); 
            }, 400);            
          }                       
       }, 50)
    }

    soundLoop();

});

// ******************************************************************* //



$('#hide-all').on("click", function (){
    $(this).addClass('js-hide');
    $('body').addClass('opacity-up');
    $('#harmonica').addClass('wiggle');
});






}); // END ALL