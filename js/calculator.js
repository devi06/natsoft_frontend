function displayData(val)
{ 
    document.getElementById('result').value = document.getElementById('result').value  + val
}

function resultData(){
    var textvalue = eval(document.getElementById('result').value)
    document.getElementById('result').value = textvalue
}

function clearData(){
    document.getElementById('result').value=''
}

function addition(){
    var n1 = document.getElementById('first').value
    var n2 = document.getElementById('second').value
    var result = Number(n1) + Number(n2)
    document.getElementById('res1').value = result
}
function sub(){
    var n1 = document.getElementById('first').value
    var n2 = document.getElementById('second').value
    var result = Number(n1) - Number(n2)
    document.getElementById('res1').value = result
}
function mul(){
    var n1 = document.getElementById('first').value
    var n2 = document.getElementById('second').value
    var result = Number(n1) * Number(n2)
    document.getElementById('res1').value = result
}
function div(){
    var n1 = document.getElementById('first').value
    var n2 = document.getElementById('second').value
    var result = Number(n1) / Number(n2)
    document.getElementById('res1').value = result
}




function timestamphome(){
var date;
date = new Date();
var time = document.getElementById('timediv'); 
 time.innerHTML = date.toLocaleTimeString();
}

var interval = setInterval(timestamphome, 1000);
 