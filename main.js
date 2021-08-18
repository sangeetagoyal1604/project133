status="";
object=[];
function preload() {
  picture=loadImage('almirah.jpg');
  picture1=loadImage('almirah.jpg');
    picture2=loadImage('bed.jpg');
    picture3=loadImage('chair.jpg');
    picture4=loadImage('slippers.jpg');
    picture5=loadImage('tv.jpg');


}
function setup() {
  canvas=  createCanvas(500,350);
canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status=detecting object";
}
function draw() {
    image(picture,0,0,500,350); 
    if (status!="") {
      for (let i= 0; i< object.length; i++) {
        document.getElementById("status").innerHTML="status object detected";
        fill("red");
     
     percent=object[i].confidence*100;
     console.log(percent);
     percentage=floor(percent);
     text(object[i].label+" "+percentage,object[i].x,object[i].y);
     noFill();
     stroke("orange");
     rect(object[i].x,object[i].y,object[i].width,object[i].height);
     
     }
        }    
        }
function Almirah() {
  picture=picture1;
}
function bed() {
  picture=picture2;
}
function chair() {
  picture=picture3;
}
function slippers() {
  picture=picture4;
}
function televison() {
  picture=picture5;
}
function modelloaded() {
    console.log ('modelloaded'); 
    status=true;
    objectdetector.detect(picture,gotresult);
   }
   function gotresult(error,result) {
     if (error) {
       console.log(error);
     }
     else{
       console.log(result);
     }
   }
 
  
