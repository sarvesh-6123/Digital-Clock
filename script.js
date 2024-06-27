function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10  
    var def = 'AM';
    h = parseInt(h);
    if (h >= 12) {
        h %= 12;
        def = 'PM';
    }
    if (h == 0) {
        h = 12;
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + " : " + m + " : " + s + " " + def;
    document.getElementById("date").innerHTML = today.toDateString();
    setTimeout(function () { getTime() }, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
getTime();