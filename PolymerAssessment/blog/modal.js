var modal= document.getElementById("simpleModal");
var modalBtn= document.getElementById("modalBtn");
var closeBtn= document.getElementById("closeBtn")

//Listen for click
modalBtn.addEventListener('click', openModal)
function openModal() {
    modal.style.display='block';
}
console.log(closeBtn);
closeBtn.addEventListener('click', closeModal)
function closeModal(){
    console.log('in close');
    modal.style.display='none';
}

var resultDiv = document.getElementById("results");

var newsURL = "http://localhost:81/testjs/data.json";


var xmlhttp;

if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        response = JSON.parse(xmlhttp.responseText);
        //here you can manipulate the response as you wish, for example you can:
        var myData = response['JsonProjectIDResult'];
        // myData now is an array of the json object
        var html = '<ul>';
        for(var prop in myData ) {
            if(myData.hasOwnProperty(prop))
                html += '<li>' + prop  + ' = ' + myData[prop] + '</li>';
        }
        html += '</ul>';
        //and so on
        resultDiv.innerHTML = html;
    }
}

xmlhttp.open("GET", newsURL, true);
xmlhttp.send();
