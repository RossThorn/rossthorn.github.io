$(function(){
    var x = document.getElementsByClassName("overlay");
    for(i=0; i<x.length; i++) {
    x[i].style.display = 'inline';
    console.log(x[i].style.display);
  }

    //$("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});


// //scrolling background
// $(function(){
//     var x = 0;
//     setInterval(function(){
//         x-=1;
//         $('body').css('background-position','0 ' + x + 'px');
//     }, 200);
// })
