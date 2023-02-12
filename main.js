noseX = 0 ;
noseY = 0 ;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses) ;
}

function draw() {
    background("#98BF64")
    document.getElementById("square").innerHTML = "The Width And Height Of The Square is " + difference + "px."
    fill("pink") ;
    stroke("pink") ;
    square(noseX, noseY, difference) ;
}

function modelLoaded() {
    console.log("poseNet is initialised");
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " and noseY = " + noseY) ;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX) ;
        console.log("leftWrist = " + leftWristX + " , rightWrist = " + rightWristX + " and the difference = " + difference) ;

    }
}

