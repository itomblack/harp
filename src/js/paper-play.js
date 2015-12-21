var width, height, center;

initializePath();

function initializePath() {

    center = view.center;
    width = view.size.width;
    height = view.size.height;

    var path1 = new Path();
    path1.strokeColor = 'white';
    path1.strokeWidth = 2;

    var pointX = width / 2;
    var pointY = height / 2;
    path1.add(new Point(pointX, pointY));

    //set jump size for 100 turns - use smaller of width or height
    if (height <= width) {
        var scale = height / 100;
        var scaleAdd = height / 100;
    } else {
        var scale = width / 100;
        var scaleAdd = width / 100;
    }

    //set initial direction - 0 = up, 1 = right, 2 = down, 3 = left
    var direction = 0;
    for ( i = 1; i <= 100; i++ ) { 
        setTimeout(function () {
            makeSpiral(i); 
          }, 80*i);

    }


    function makeSpiral(i) {
        if (direction === 0) { //if up then
            pointY = pointY - scale;
        }

        else if (direction === 1) {  //if right then
            pointX = pointX - scale;
        }
        
        else if (direction === 2) { //if down then
            pointY = pointY + scale;
        }

        else if (direction === 3) { //if left then
            pointX = pointX + scale;
        }

        //increase direction
        if ( direction <=2 ) { 
            direction = direction + 1
        }
        else { direction = 0 };

        //add new point
        path1.add(new Point(pointX, pointY));

        // increase scale on even numbers
        var isEven  = function(i) { return !( i & 1 ); };
        if ( isEven ) { scale = scale + scaleAdd; }

    }
    


}

function onFrame(event) {
    
}

function onMouseMove(event) {
   
}

function onMouseDown(event) {
   
}

// Reposition the path whenever the window is resized:
function onResize(event) {
    project.activeLayer.removeChildren();
    initializePath();
}