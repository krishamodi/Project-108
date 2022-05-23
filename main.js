function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2SuzhcxMB/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log (results);
    
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
    
    
        document.getElementById("result_label").innerHTML = "I can hear: "+results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy: "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
    
        img1 = document.getElementById('image');
      
    
        if(results[0].label == "roaring"){
            img1.src = 'lion.jfif';
          
        }else if(results[0].label == "meowing"){
            img1.src = 'cat.jfif';
        
        }
        else if(results[0].label == "barking"){
            img1.src = 'dog.jpeg';
            
        }
        else {
            img1.src = 'ear.png';
        
        }
    }
    }
    