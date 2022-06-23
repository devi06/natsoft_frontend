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