$("#run").click(function() {
  let digits = parseInt($("#input").val());
  let pi = Math.PI.toString()
  if (digits > 1) {
    pi = pi.substring(0, digits + 1);
  } else {
    pi = pi.substring(0, 1);
  }

  console.log($("#input").val());
  console.log(pi);
  $("#output").text("Output: " + pi);
})
