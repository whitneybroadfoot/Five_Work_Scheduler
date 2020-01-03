$(document).ready(function () {
//script for current day
    "date"
    var thisDay = moment();
    $("#currentDay").append(thisDay.format('LL'));
//current, past, present determining colors
    function colorFunction() {
        var now = parseInt(moment().format("H"))
        console.log(now);
        for (var i = 9; i < 18; i++) {
            var id = "#" + i;
//determining what colors
            if (i < now) {
                $(id).removeClass()
                $(id).attr("class", "past")
            } else if (i === now) {
                $(id).removeClass()
                $(id).attr("class", "present")
            } else if (i > now) {
                $(id).removeClass()
                $(id).attr("class", "future")
            }
        }
    }


