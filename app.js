var btnTranslate = document.querySelector(".btn-primary");
var outputTxt = document.querySelector('.output-div');
var inputTxt = document.querySelector('textarea');

var url = "https://api.funtranslations.com/translate/minion.json";
function inputUrl(text){
    return (url + "?" + "text=" + text);
}
function errorHandling(error){
    console.log("Error is", error);
    alert("An error has occured while loading the request")
}

function clickHandler(){
    var textinput = inputTxt.value; 
    fetch(inputUrl(textinput))
        .then(response => response.json())
        .then(json => {
            var output = json.contents.translated;
            outputTxt.innerText = output;
        })
        .catch(errorHandling)
        
}
btnTranslate.addEventListener("click", clickHandler)

