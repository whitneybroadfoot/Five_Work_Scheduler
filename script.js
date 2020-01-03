$(document).ready(function(){
    $(".saveBtn").click(function(){
        var currentButton = $(this).val()
        var input = $(currentButton).val()
console.log(input);
    })
})




// localStorage.setItem("saveBtn", "9am");


// var input = ("#saveBtn").text(moment)
//     console.log(moment);

// use .past .present .future for moment.js

// //  
// $(document).ready(function() {
//     const date = moment();
//     console.log(moment());
//     $("#currentDay").html(moment().format("LL"));