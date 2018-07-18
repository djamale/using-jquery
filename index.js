

$(document).ready(function(){
    $("button").click(function(){
        let text = $("input").val()
        if($("input").val().length === 0){
            alert("Silakan isi nama dulu")
        }
        else($("#add").append("<li>"+ text + "<img scr='delete-icon.png' widht='100px'></li>"))
    });
});

$(document).on("click", "li", function(){
    $(this).toggleClass('strike').fadeOut('slow')
})

