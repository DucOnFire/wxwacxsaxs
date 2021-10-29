//https://teachablemachine.withgoogle.com/models/kRSCVG6Kc/
Webcam.set({
   width:320, height:300, image_format:"png", png_quality:100
});

camera=document.getElementById("camel");
Webcam.attach("#camel");
function snapshot() {
 Webcam.snap(function(data_uri){
    document.getElementById("webcamel").innerHTML='<img id=" img_img_img" src="'+data_uri+'"/>'
 })  
}

dogeadd=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kRSCVG6Kc/model.json", modelloaded);
function modelloaded() {
   console.log("model is loaded with doge power!");
}

function idst() {
   pic=document.getElementById("img_img_img");
   dogeadd.classify(pic, gotresult);
}

function gotresult(error, results) {
   if(error) {
      console.log(error);
   }   
   else{
      console.log(results);
      document.getElementById("object_span").innerHTML=results[0].label;
      document.getElementById("accuracy_span").innerHTML=results[0].confidence;
   }
}