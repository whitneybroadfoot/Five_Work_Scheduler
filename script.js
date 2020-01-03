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
//running continually with 1000
    setInterval(colorFunction, 1000)
    $(".saveBtn").click(function () {
        var currentButton = $(this).val()
        var input = $(currentButton).val()
        console.log(input);
        localStorage.setItem(currentButton, input);
    })
})
//getting text to stay after page refreshes
var times = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"]

for (var i = 0; i < times.length; i++) {
    var id = times[i]
    var info = localStorage.getItem(id)
    $(id).val(info)
}

