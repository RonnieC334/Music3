song = "";

L_wrist_x = 0;
L_wirst_y = 0;

R_wrist_x = 0;
R_wirst_y = 0;

function preload() {
    song = loadSound("Ed_Sheeran_-_Shape_Of_You.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is intialized");
}

function draw() {
    image(video, 0, 0, 600,500);

}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        L_wrist_x = results[0].pose.leftWirst.x;
        L_wirst_y = results[0].pose.leftWirst.y;
        console.log("Left wrist x = " + L_wrist_x + "left wrist y = " + L_wirst_y);
        
        R_wrist_x = results[0].pose.rightWirst.x;
        R_wirst_y = results[0].pose.rightWirst.y;
        console.log("Right wrist x = " + R_wrist_x + "Right wrist y = " + R_wirst_y);
    }
}