$("h1").css("color","red");
$("a").attr("href","https://www.google.com");


$(document).keydown(function(event){
    $("h1").text(event.key);
})