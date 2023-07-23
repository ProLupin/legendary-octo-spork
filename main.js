function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(250,150)
    canvas=createCanvas(400,400);
    canvas.position(900,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function draw(){
    background("white");
    textSize(difference);
    fill("blue");
    text('shreya',30,400);
}
function modelLoaded(){
    console.log("Model is Loaded.");
}
rightWristx=0;
leftWristx=0;
difference=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        difference=floor(leftWristx-rightWristx);

    }
}

