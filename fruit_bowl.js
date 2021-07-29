var res3;
var img3;
var status3;
var length3;

function preload(){
    img3 =loadImage("bowl.jpeg") ;
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(800,400);
    objectdetector = ml5.objectDetector("cocossd" , modelloaded);
}

function draw(){
    image(img3,0,0,600,450);

}

function modelloaded(){
    console.log("loaded");
    objectdetector.detect(img3,gotresults);
    status3 = "true"
}



function gotresults(results , error){
if(error){
    console.log(error);
} else if(results.length > ""){
    
    res3=results;
    length3=results.length;
    console.log(res3);
console.log("a");
    
        r3 = random(255);
        b3 = random(255);
        g3 = random(255);
    
    console.log("a");
        for(i = 0; i< length; i = i+1 ){

            document.getElementById("status").innerHTML="Object(s) Detected";
            document.getElementById("objects").innerHTML=length;
    console.log("b");
            fill(r3,b3,g3);
            percent3 =floor( res3[i].confidence * 100);
            text(res3[i].label+ "  " + percent3 + "%",res3[i].x,res3[i].y);
            noFill();
            stroke(r3,b3,g3);
            rect(res3[i].x,res3[i].y,res3[i].width,res3[i].height);
        }
    
   
}
}










