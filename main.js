function startClassification()
{
    navigator.mediaDevices.getUserMidea({audio: true})
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VY9hjPc9w/modelReady' , modalReady)
    
}

function modalReady(){
    Classifier.classify( gotResults)
}

function gotResults( error , results) {
    console.log(' Got Result')
}