$(document).ready(function(){
    $(".saveBtn").click(function(){
        var currentButton = $(this).val()
        var input = $(currentButton).val()
console.log(input);
    })
})

document.getElementById("saveBtn").addEventListener("click", function(){
    var input = {
        userMeeting: "9am".value()
    };

    localStorage.setItem("userMeeting", value);
console.log(value);
});



// use .past .present .future for moment.js