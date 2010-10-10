 $(document).ready(function() {
    $("#submit-button").click(function() {
      // get input value and assign to var
      var newBorderRadiusValue = $("#newBorderRadiusInput").val()

      // get input value and assign to var
      var newBoxShadowValue = $("#newBoxShadowInput").val()

      // get input value and assign to var
      var newTextShadowValue = $("#newTextShadowInput").val()

      // change the border-radius value of #dynamic
      $("#dynamic").css("border-radius", newBorderRadiusValue + "px")

      // change the -webkit-box-shadow value of #dynamic
      $("#dynamic").css("webkit-box-shadow", newBoxShadowValue)

      // change the text-shadow value of #dynamic
      $("#dynamic").css("text-shadow", newTextShadowValue)

      // call refreshFooter()
      refreshFooter()
    }) // end of click
    refreshFooter()
  })