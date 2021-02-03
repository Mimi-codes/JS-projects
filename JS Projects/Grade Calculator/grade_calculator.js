document.getElementById('output').style.visibility = 'hidden';
document.getElementById('gcInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let gc = e.target.value;
document.getElementById('scoreOutput').innerHTML = (gc/100) * 100;

document.getElementById('rstOutput').innerHTML = lbs/2.2046;

//document.getElementById('ozOutput').innerHTML = lbs*16;

});