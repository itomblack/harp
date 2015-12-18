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
                var scale = height * 2 / 100;
                var scaleAdd = height * 2 / 100;
            } else {
                var scale = width * 2 / 100;
                var scaleAdd = width * 2 / 100;
            }
            

            //set initial direction - 0 = up, 1 = right, 2 = down, 3 = left
            var direction = 0;

            for ( i = 1; i <= 100; i++ ) {            
                    
                
                if (direction === 0) { //if up then

                    pointY = pointY - scale;
                    path1.add(new Point(pointX, pointY));
                    //set next direction
                    direction = direction + 1;

                }

                else if (direction === 1) {  //if right then

                    pointX = pointX - scale;
                    path1.add(new Point(pointX, pointY));
                    //set next direction
                    direction = direction + 1;
                    //increase scale
                    scale = scale + scaleAdd; 
            
                }

                
                else if (direction === 2) { //if down then
                    
                    pointY = pointY + scale;
                    path1.add(new Point(pointX, pointY));
                    //set next direction
                    direction = direction + 1;
                }

                
                else if (direction === 3) { //if left then
                    
                    pointX = pointX + scale;
                    path1.add(new Point(pointX, pointY));
                    //set next direction (reset to 0)
                    direction = 0;
                    //increase scale
                    scale = scale + scaleAdd;

                }

                // path1.smooth();



                // var myPath = new Path();
                // myPath.strokeColor = 'lightblue';
                // myPath.strokeWidth = 2;
                // myPath.add(new Point(0, 0));
                // myPath.add(new Point(width, height / i));

                // var myPath2 = new Path();
                // myPath2.strokeColor = 'lightblue';
                // myPath2.strokeWidth = 2;
                // myPath2.add(new Point(width, 0));
                // myPath2.add(new Point(0, height / i));

                // path1.add(new Point( (width / 10 * i), (height / 10 * i) ))



               
                

            }
            

            

            // var y = view.size.height / 2;
            // var width = view.size.width;
            // var vector = new Point({
            //     angle: 45,
            //     length: width / 5
            // });
            // var offset = width / 30;
            // var path = new Path({
            //     strokeWidth: 5,
            //     strokeColor: 'black'
            // });

            // path.segments = [
            //     [[offset, y], null, vector.rotate(-90)],
            //     [[width / 2, y], vector.rotate(-180), vector],
            //     [[width - offset, y], vector.rotate(90), null]
            // ];

        }

        function onFrame(event) {
            
        }

        function onMouseMove(event) {
           
        }

        function onMouseDown(event) {
           
        }

        // Reposition the path whenever the window is resized:
        function onResize(event) {
            initializePath();
        }