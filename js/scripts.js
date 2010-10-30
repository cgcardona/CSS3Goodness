function checkForInput(inputValue, placeholderValue) {
  // check to see if the form input has a value
  if (inputValue === '') {
     postFunctionInputValue = placeholderValue;
  } else {
     postFunctionInputValue = inputValue;
  }
    return postFunctionInputValue;
}

 $(document).ready(function() {
 
   var roundedCornersCurrentSliderValue = "";
   var newBoxShadowXInputCurrentSliderValue = "";
   var newBoxShadowYInputCurrentSliderValue = "";
   var newBoxShadowFadeCurrentSliderValue = "";
  $("#roundedCornersSlider").slider({
     min: 1,
     max: 85,
     stop: function(event, ui) {
       roundedCornersCurrentSliderValue = ui.value;
       $("#afterSliderRoundedCornersValue").text(roundedCornersCurrentSliderValue);
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

      // get input value and assign to var
      var newTextShadowValue = $("#newTextShadowInput").val();

      // change the border-radius value of #dynamic
      $("#dynamic").css("border-radius", postFunctionBorderRadiusValue + "px");

      // change the -webkit-box-shadow value of #dynamic
      $("#dynamic").css("webkit-box-shadow", newBoxShadowValue);

      // change the text-shadow value of #dynamic
      $("#dynamic").css("text-shadow", newTextShadowValue);

      // call refreshFooter()
      refreshFooter();
    }); // end of click
    refreshFooter();
  });
