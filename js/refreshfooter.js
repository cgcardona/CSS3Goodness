  function refreshFooter() {

      // get #dynamic's current style's and assign them to vars
      var borderTopLeftRadiusValue = $("#dynamic").css("border-top-left-radius");
      var borderTopRightRadiusValue = $("#dynamic").css("border-top-right-radius");
      var borderBottomRightRadiusValue = $("#dynamic").css("border-bottom-right-radius");
      var borderBottomLeftRadiusValue = $("#dynamic").css("border-bottom-left-radius");

      // box-shadow value assigned to vars
      var boxShadowValue = $("#dynamic").css("-webkit-box-shadow");

      // text-shadow value assigned to var
      var textShadowValue = $("#dynamic").css("text-shadow");

      // print values to screen for the user to copy/paste on their way to
      // victory
      $("#border-top-left-radius span").html(borderTopLeftRadiusValue);
      $("#border-top-right-radius span").html(borderTopLeftRadiusValue);
      $("#border-bottom-right-radius span").html(borderTopLeftRadiusValue);
      $("#border-bottom-left-radius span").html(borderTopLeftRadiusValue);
      $("#box-shadow span").html(boxShadowValue);
      $("#text-shadow span").html(textShadowValue);

  }  // end of refreshFooter()
