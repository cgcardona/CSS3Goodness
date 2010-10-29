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
    $("#submit-button").click(function() {
      // get input value and assign to var
      var newBorderRadiusValue = $("#newBorderRadiusInput").val();

      // get input value and assign to var
      var newBoxShadowColorValue = $("#newBoxShadowColorInput").val();
      var newBoxShadowXValue = $("#newBoxShadowXInput").val();
      var newBoxShadowYValue = $("#newBoxShadowYInput").val();
      var newBoxShadowFadeValue = $("#newBoxShadowFadeInput").val();
      var newBoxShadowValue = newBoxShadowColorValue + " " + newBoxShadowXValue + " " + newBoxShadowYValue + " " + newBoxShadowFadeValue;

      // get input value and assign to var
      var newTextShadowValue = $("#newTextShadowInput").val();

      // change the border-radius value of #dynamic
      $("#dynamic").css("border-radius", newBorderRadiusValue + "px");

      // change the -webkit-box-shadow value of #dynamic
      $("#dynamic").css("webkit-box-shadow", newBoxShadowValue);

      // change the text-shadow value of #dynamic
      $("#dynamic").css("text-shadow", newTextShadowValue);

      // call refreshFooter()
      refreshFooter();
    }); // end of click
    refreshFooter();
  });
