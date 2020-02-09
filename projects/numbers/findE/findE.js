$("#run").click(function() {
  let digits = parseInt($("#input").val());
  let e = Math.exp(1).toString();
  if (digits > 1){
    e = e.substring(0, digits + 1);
  } else {
    e = e.substring(0, 1);
  }

  console.log(digits);
  console.log(e);
  $("#output").text("Output: " + e);
})
