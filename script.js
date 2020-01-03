script id = "date">
    var thisDay = moment();
            $("#currentDay").append(thisDay.format('LL'));


$(document).ready(function(){
    $(".saveBtn").click(function(){
        var currentButton = $(this).val()
        var input = $(currentButton).val()
console.log(input);
    })
})




// localStorage.setItem(saveBtn, "9am");


// var input = ("#saveBtn").text(moment)
//     console.log(moment);

// use .past .present .future for moment.js

