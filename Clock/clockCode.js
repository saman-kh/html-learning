setInterval(setClock,1000);


const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);
}
setClock();





/**  Gregorian & Jalali (Hijri_Shamsi,Solar) Date Converter Functions
Author: JDF.SCR.IR =>> Download Full Version :  http://jdf.scr.ir/jdf
License: GNU/LGPL _ Open Source & Free :: Version: 2.81 : [2020=1399]
---------------------------------------------------------------------
355746=361590-5844 & 
361590=(30*33*365)+(30*8) & 
5844=(16*365)+(16/4)
355666=355746-79-1 & 
355668=355746-79+1 &  
1595=605+990 &  
605=621-16
990=30*33 & 
12053=(365*33)+(32/4) & 
36524=(365*100)+(100/4)-(100/100)

هر چهار سال با احتساب سال کبیسه
1461=(365*4)+(4/4) &


146097=(365*400)+(400/4)-(400/100)+(400/400)  */

function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m,jy,jm,jd,gy2,days;
    /*0,31,28,31,30,31,30,31,31,30,31,30,31*/
    g_d_m = [0,31,59,90,120,151,181,212,243,273,304,334];

    // The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

    gy2 = (gm > 2) ? (gy + 1) : gy;


    // That ~~ is a double NOT bitwise operator.
    // It is used as a faster substitute for Math.floor() for positive numbers. It does not return the same result as Math.floor() for negative numbers, as it just chops off the part after the decimal
    // ~(5.5)   // => -6
    // ~(-6)    // => 5
    // ~~5.5    // => 5  (same as Math.floor(5.5))
    // ~~(-5.5) // => -5 (NOT the same as Math.floor(-5.5), which would give -6 )

    days = 355666 + (365 * gy) + ~~ ((gy2 + 3) / 4) - ~~ ((gy2 + 99) / 100) + ~~ ((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * ~~ (days / 12053));
    days %= 12053;
    jy += 4 * ~~ (days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += ~~ ((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + ~~ (days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + ~~ ((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
}

ndt = new Date();
g_y = ndt.getFullYear();
g_m = ndt.getMonth() + 1;
g_d = ndt.getDate();
shamsi = gregorian_to_jalali(g_y, g_m, g_d);
// document.write(shamsi[0] + '/' + shamsi[1] + '/' + shamsi[2] + ' :هجری شمسی تبدیل شده از میلادی<br> ');

document.getElementById("persianDate").innerHTML = (shamsi[0] + '/' + shamsi[1] + '/' + shamsi[2] + ' :تاریخ<br> ');






getPersianDate = (format) => { 
    let week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه")
    let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
    let today = new Date();
    let d = today.getDay();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getYear();
    year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
    if (year == 0) {
        year = 2000;
    }
    if (year < 100) {
        year += 1900;
    }
    y = 1;
    for (i = 0; i < 3000; i += 4) {
        if (year == i) {
            y = 2;
        }
    }
    for (i = 1; i < 3000; i += 4) {
        if (year == i) {
            y = 3;
        }
    }
    if (y == 1) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if (y == 2) {
        year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
                break;
            case 4:
                (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
                break;
            case 5:
                (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
                break;
            case 6:
                (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
                break;
            case 7:
                (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
                break;
            case 8:
                (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
                break;
            case 9:
                (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
                break;
            case 10:
                (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
                break;
            case 11:
                (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
                break;
            case 12:
                (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
                break;
            default:
                break;
        }
    }
    if (y == 3) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
                break;
            case 2:
                (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if(format===null || format===undefined)
      return `${week[d]} ${day} ${months[month - 1]} ${year}`
    if(format==="y/m/d")
      return `${year}/${month}/${day}`;
    if(format==="d/m/y")
      return `${day}/${month}/${year}`;
  }
 document.getElementById("persianDate2").innerHTML= getPersianDate();


 var arrayOfWeekdays = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
var dateObj = new Date()
var weekdayNumber = dateObj.getDay()
var weekdayName = arrayOfWeekdays[weekdayNumber]
// weekdayName = "Saturday"


 const date = new Date();
// Results below assume UTC timezone - your results may vary
// Specify default date formatting for language (locale)
var tarikh = new Intl.DateTimeFormat('fa-IR').format(date);
document.getElementById("persianDate3").innerHTML= tarikh +" "+ weekdayName;








