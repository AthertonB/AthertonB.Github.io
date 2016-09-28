$(document).ready(function () {
    /*day/night background cycle*/
    if (timer.hour >= 6 && timer.hour <= 21) {
        $("body").css("background-color", "lightblue")
    } else {
        $("body").css("background-color", "darkblue")
    }
    if (timer.hour >= 6 && timer.hour <= 21) {
        $(".sun").css("background-color", "yellow")
    } else {
        $(".sun").css("background-color", "lightgrey")
    }
    setInterval(function () {
        $("sky").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem);
    }, 1000);
});