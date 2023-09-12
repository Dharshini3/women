$(document).ready(function () {
  $("a.close_lrpopup").click(function () {
    $(".lrpopup").fadeOut();
    $(".loginblock").fadeOut();
    $(".registerblock").fadeOut();
  });
  $("a.login_btn").click(function () {
    $(".lrpopup").fadeIn();
    $(".loginblock").fadeIn();
    $(".registerblock").hide();
    $(this).addClass("active");
    $("a.register_btn").removeClass("active");
  });
  $("a.register_btn").click(function () {
    $(".lrpopup").fadeIn();
    $(".loginblock").hide();
    $(".registerblock").fadeIn();
    $(this).addClass("active");
    $("a.login_btn").removeClass("active");
  });
});

// var pg = document.getElementsByClassName("rgpg");
//         console.log(pg)
//         function rgpg(a){
//             for (var i = 0; i < pg.length; i++){
//                 console.log(i)
//                 if(i == a){
//                     pg[i].style.display = "block";
//                 }
//                 else{
//                     pg[i].style.display = "none";
//                 }
//             }
//         }
