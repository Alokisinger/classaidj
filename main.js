song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist=0
scoreleftWrist=0
function preload()
{
    song1 = loadSound("peter_pan.mp3");
    song2 = loadSound("music1.mp3");

}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 600, 500);
song1_status=song1.isPlaying()
song2_status=song2.isPlaying()
    fill("#FF0000");
    stroke("#FF000");

    if(scoreRightWrist > 0.2){
 circle(rightWristX,rightWristY,20);
song2.stop()
if(song1_status==false)
song=song1
song.play()
document.getElementById("song").innerHTML="peter pan"
    }

    if(scoreleftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song1.stop()
        if (song2_status==false) {
          song=song2
          song.play()
          document.getElementById("song").innerHTML="frozen"
        }
            }
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function pause()
{
song.pause()
}
function stop()
{
song.stop()
}
function gotPoses(results){
    if(results.length> 0)
    {
        console.log(results);
        scoreleftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreleftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX = "+leftWristX +" leftWristY = "+ leftWristY );

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX +" rightWristY = "+ rightWristY );

        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].scosol.
        console.log("RightWrist =" + scoreRightWrist + "LeftWrist =" + scoreleftWrist);
    }
}