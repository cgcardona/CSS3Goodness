function checkForInput(inputValue, placeholderValue) {
  // check to see if the form input has a value
  if (inputValue === '') {
     postFunctionInputValue = placeholderValue;
  } else {
     postFunctionInputValue = inputValue;
  }
    return postFunctionInputValue;
}
  function refreshFooter() {

      // get #dynamic's current style's and assign them to vars
      var borderRadiusValue = $("#dynamic").css("border-top-left-radius");

      // box-shadow value assigned to vars
      var boxShadowValue = $("#dynamic").css("-webkit-box-shadow");

      // text-shadow value assigned to var
      var textShadowValue = $("#dynamic").css("text-shadow");

      // print values to screen for the user to copy/paste on their way to
      // victory
      $("#border-bottom-left-radius span").html(borderRadiusValue);
      $("#box-shadow span").html(boxShadowValue);
      $("#text-shadow span").html(textShadowValue);

  }  // end of refreshFooter()

 $(document).ready(function() {
 
   var roundedCornersCurrentSliderValue = "";
   var newBoxShadowXInputCurrentSliderValue = "";
   var newBoxShadowYInputCurrentSliderValue = "";
   var newBoxShadowFadeCurrentSliderValue = "";
   var newTextShadowXInputCurrentSliderValue ="";
   var newTextShadowYInputCurrentSliderValue = "";
   var newTextShadowFadeCurrentSliderValue = "";


  $("#roundedCornersSlider").slider({
     min: 1,
     max: 85,
     stop: function(event, ui) {
       roundedCornersCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newBoxShadowXInputSlider").slider({
     min: -100,
     max: 100,
     stop: function(event, ui) {
       newBoxShadowXInputCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newBoxShadowYInputSlider").slider({
     min: -100,
     max: 100,
     stop: function(event, ui) {
       newBoxShadowYInputCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newBoxShadowFadeSlider").slider({
     min: 1,
     max: 100,
     stop: function(event, ui) {
       newBoxShadowFadeCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newTextShadowXInputSlider").slider({
     min: -100,
     max: 100,
     stop: function(event, ui) {
       newTextShadowXInputCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newTextShadowYInputSlider").slider({
     min: -100,
     max: 100,
     stop: function(event, ui) {
       newTextShadowYInputCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

  $("#newTextShadowFadeSlider").slider({
     min: 1,
     max: 10,
     stop: function(event, ui) {
       newTextShadowFadeCurrentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });

    $("#color").click(function() {
      $("#colorpicker").slideDown();
      $("#showpicker1").text("Hide Colorpicker");
      return false;
    });

    $("#color").blur(function() {
      $("#colorpicker").slideUp();
      $("#showpicker1").text("Show Colorpicker");
    });

    $("#showpicker1").toggle(function() {
      $("#colorpicker").slideDown();
      $("#showpicker1").text("Hide Colorpicker");
    }, function() {
      $("#colorpicker").slideUp();
      $("#showpicker1").text("Show Colorpicker");
    });

    $('#colorpicker').farbtastic('#color');

    // color picker 2
    $("#color2").click(function() {
      $("#colorpicker2").slideDown();
      $("#showpicker2").text("Hide Colorpicker");
      return false;
    });

    $("#color2").blur(function() {
      $("#colorpicker2").slideUp();
      $("#showpicker2").text("Show Colorpicker");
    });

    $("#showpicker2").toggle(function() {
      $("#colorpicker2").slideDown();
      $("#showpicker2").text("Hide Colorpicker");
    }, function() {
      $("#colorpicker2").slideUp();
      $("#showpicker2").text("Show Colorpicker");
    });

    $('#colorpicker2').farbtastic('#color2');

    $("#submit-button").click(function() {
      // BORDER-RADIUS
      // get input value and assign to var
      var newBorderRadiusValue = roundedCornersCurrentSliderValue;

      // create placeholder var
      var newBorderRadiusPlaceholder = 6;

      // Check for input
      checkForInput(newBorderRadiusValue, newBorderRadiusPlaceholder);

      // assign post variable function
      var postFunctionBorderRadiusValue = postFunctionInputValue;

      // BOX-SHADOW
      var newBoxShadowColorValue = $('#color').val();
      var newBoxShadowColorPlaceholder = '#000';
      checkForInput(newBoxShadowColorValue, newBoxShadowColorPlaceholder);
      var postFunctionBoxShadowColorValue = postFunctionInputValue;

      var newBoxShadowXValue = newBoxShadowXInputCurrentSliderValue + "px";
      var newBoxShadowXPlacholder = '1px';
      checkForInput(newBoxShadowXValue, newBoxShadowXPlacholder);
      var postFunctionBoxShadowXValue = postFunctionInputValue;

      var newBoxShadowYValue = newBoxShadowYInputCurrentSliderValue + "px";
      var newBoxShadowYPlacholder = '1px';
      checkForInput(newBoxShadowYValue, newBoxShadowYPlacholder);
      var postFunctionBoxShadowYValue = postFunctionInputValue;

      var newBoxShadowFadeValue = newBoxShadowFadeCurrentSliderValue + "px";
      var newBoxShadowFadePlaceholder = '20px';
      checkForInput(newBoxShadowFadeValue, newBoxShadowFadePlaceholder);
      var postFunctionBoxShadowFadeValue = postFunctionInputValue;

      var newBoxShadowValue = postFunctionBoxShadowColorValue + " " + postFunctionBoxShadowXValue + 
      " " + postFunctionBoxShadowYValue + " " + postFunctionBoxShadowFadeValue;

      // TEXT-SHADOW
      var newTextShadowColorValue = $('#color2').val();
      var newTextShadowColorPlaceholder = '#000';
      checkForInput(newTextShadowColorValue, newTextShadowColorPlaceholder);
      var postFunctionTextShadowColorValue = postFunctionInputValue;

      var newTextShadowXValue = newTextShadowXInputCurrentSliderValue + "px";
      var newTextShadowXPlacholder = '1px';
      checkForInput(newTextShadowXValue, newTextShadowXPlacholder);
      var postFunctionTextShadowXValue = postFunctionInputValue;

      var newTextShadowYValue = newTextShadowYInputCurrentSliderValue + "px";
      var newTextShadowYPlacholder = '1px';
      checkForInput(newTextShadowYValue, newTextShadowYPlacholder);
      var postFunctionTextShadowYValue = postFunctionInputValue;

      var newTextShadowFadeValue = newTextShadowFadeCurrentSliderValue + "px";
      var newTextShadowFadePlaceholder = '20px';
      checkForInput(newTextShadowFadeValue, newTextShadowFadePlaceholder);
      var postFunctionTextShadowFadeValue = postFunctionInputValue;

      var newTextShadowValue = postFunctionTextShadowColorValue + " " + postFunctionTextShadowXValue + 
      " " + postFunctionTextShadowYValue + " " + postFunctionTextShadowFadeValue;
      // get input value and assign to var

      // change the border-radius value of #dynamic
      $("#dynamic").css("border-radius", postFunctionBorderRadiusValue + "px");

       // -moz-border-radius for firefox rounded corners
      $("#dynamic").css("-moz-border-radius", postFunctionBorderRadiusValue + "px");

      // change the -webkit-box-shadow value of #dynamic
      $("#dynamic").css("-webkit-box-shadow", newBoxShadowValue);

      // change the -moz-box-shadow value of #dynamic
      $("#dynamic").css("-moz-box-shadow", newBoxShadowValue);

      // change the text-shadow value of #dynamic
      $("#dynamic").css("text-shadow", newTextShadowValue);

      // call refreshFooter()
      refreshFooter();
    }); // end of click
    refreshFooter();
  });
