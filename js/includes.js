$(function(){
    $("#footer").load("footer.html");
    $("#navbar").load("navbar.html");
});


//scrolling background
$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('body').css('background-position','0 ' + x + 'px');
    }, 80);
})
