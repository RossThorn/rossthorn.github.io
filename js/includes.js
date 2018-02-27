$(function(){
    // changes overlays from having display:none to display inline on load
    // so they don't flash when the page loads.
    var x = document.getElementsByClassName("overlay");
    for(i=0; i<x.length; i++) {
    x[i].style.display = 'inline';
    }
    var foot = document.getElementById("index-foot");
    // if statement used to determine size of index footer
    if (x.length % 3 != 0){
      if(x.length % 2 != 0){
        // number of projects is not divisible by 2 or 3.
        foot.className += " col-md-8 col-sm-6 col-xs-12";
        foot.style.height = x[0].style.height;
      } else {
        // number of projects is divisible by 2 but not 3.
        foot.className += " col-md-4 col-sm-6 col-xs-12";
        foot.style.height = x[0].style.height;
      };
    } else {
      if(x.length % 2 != 0){
        // number of projects is divisible by 3 but not 2.
        foot.className += " col-md-12 col-sm-6 col-xs-12";
        foot.style.height = x[0].style.height;
      } else {
        // number of projects is divisible by 2 and 3.
        foot.className += " col-xs-12";
        foot.style.height = x[0].style.height;
      };
    }

    //$("#navbar").load("navbar.html");
    //$("#footer").load("footer.html");
});
