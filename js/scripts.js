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

  $("#roundedCornersSlider").slider({
     min: 1,
     max: 100,
     stop: function(event, ui) {
       currentSliderValue = ui.value;
       $("#submit-button").click();
    }
  });
    $("#submit-button").click(function() {
      // BORDER-RADIUS
      // get input value and assign to var
      var newBorderRadiusValue = currentSliderValue;

      // create placeholder var
      var newBorderRadiusPlaceholder = 6;

      // Check for input
      checkForInput(newBorderRadiusValue, newBorderRadiusPlaceholder);

      // assign post variable function
      var postFunctionBorderRadiusValue = postFunctionInputValue;

      // BOX-SHADOW
      var newBoxShadowColorValue = $("#newBoxShadowColorInput").val();
      var newBoxShadowColorPlaceholder = '#000';
      checkForInput(newBoxShadowColorValue, newBoxShadowColorPlaceholder);
      var postFunctionBoxShadowColorValue = postFunctionInputValue;

      var newBoxShadowXValue = $("#newBoxShadowXInput").val();
      var newBoxShadowXPlacholder = '1px';
      checkForInput(newBoxShadowXValue, newBoxShadowXPlacholder);
      var postFunctionBoxShadowXValue = postFunctionInputValue;

      var newBoxShadowYValue = $("#newBoxShadowYInput").val();
      var newBoxShadowYPlacholder = '1px';
      checkForInput(newBoxShadowYValue, newBoxShadowYPlacholder);
      var postFunctionBoxShadowYValue = postFunctionInputValue;

      var newBoxShadowFadeValue = $("#newBoxShadowFadeInput").val();
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
