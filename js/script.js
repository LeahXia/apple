$(document).ready(function(){


   $("#shopping-bag").click(function(){
     $(".menu-list .shopbag-dropdown").toggleClass("hide");
   });

   console.log($("#shopping-bag"));

   $(".xsmenu-bag").click(function(){
     $(".toggleNav .shopbag-dropdown").toggleClass("hide");
   });

   $("#search-icon").click(function(){
     $(".search-sideway").removeClass("hide");
   });

   $("#close-btn").click(function(e){
     e.stopPropagation();
     $(".search-sideway").addClass("hide");
   });

   $("#menu-2lines").click(function(){
     $(".menu-dropdown").toggleClass("hide");
     $(".xsmenu-bag").toggleClass("hide");

     $(".toggleNav span:first-of-type").toggleClass("first-span-transform");
     $(".toggleNav span:last-of-type").toggleClass("last-span-transform");


   });

  //  Google Customer Search
   function gSearch() {
     var cx = '005654431027654654152:p2bsfuzcawo';
     var gcse = document.createElement('script');
     gcse.type = 'text/javascript';
     gcse.async = true;
     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(gcse, s);
   };

   gSearch();

   window.onload = function(){
     document.getElementById('gsc-i-id1').placeholder = 'Search apple.com';
     document.getElementById('gsc-i-id2').placeholder = 'Search apple.com';
   };


  //  Footer accordion


  $(".accordion").click(function(){
    if($(".accordion").css("content")=="'\002B'"){
      $(this).addClass("active");
    }else{
      $(this).removeClass("active");
    }


    var panel = $(this).next(".panel")
    if (panel.css("display") == "none"){
      panel.css("display", "block");
      $(this).css("border", "none");
    }else{
      $(this).css("border-bottom", "0.5px solid #ccc");
      panel.css("display", "none");
    }

  })










});
