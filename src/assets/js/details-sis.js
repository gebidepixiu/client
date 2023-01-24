export const hide =() =>(function () {
   var nvs = true;
   return function () {
      if (nvs){
         $(".details_list").animate({
            width:"0px"
         },500);
         $(".drop").animate({
            left:"20px"
         },500);
         $(".drop").css("transform","rotate(180deg)");
         $(".heand-hes").slideUp(500);
         nvs = false;
      }else {
         $(".details_list").animate({
            width:"300px"
         },500);
         $(".drop").animate({
            left:"300px"
         },500);
         $(".drop").css("transform","rotate(0deg)");
         $(".heand-hes").slideDown(500);
         nvs = true;
      }
   }
})();
