$(document).ready(function(){
    $(".saveBtn").click(function(){
        var currentButton = $(this).val()
        var input = $(currentButton).val()
        
        console.log(input);
    })
})

