/*window.onload = function newf(){
    var dt = new Date();
    var months = ["دی", "بهمن", "اسفند", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر"];
    document.getElementById("datetime").innerHTML = months[dt.getMonth()];
    
    // document.getElementById("demo").innerHTML = months[d.getMonth()];
    // document.getElementById("demo").innerHTML = dt.toUTCString();
}
*/

setInterval (displayClock,500);

function displayClock(){
    var dt = new Date();
    var hrs = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    var am = 'AM';

    if(hrs > 12)
    {
        am = 'PM';
    }
    // if(hrs == 0)
    // {
    //     hrs = 24;
    // }
    if(hrs < 10)
    {
        hrs = '0' + hrs;
    }
    if(min < 10)
    {
        min = '0' + min;
    }
    if(sec < 10)
    {
        sec = '0' + sec;
    }
    var timerShow = am +" "+ hrs + ":" + min + ":"+ sec;

    document.getElementById("datetime").innerHTML = timerShow;
}