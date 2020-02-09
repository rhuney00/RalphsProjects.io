$("#run").click(function() {
  let input = parseInt($("#input").val());
  let selection = $("input[name=selection]:checked").val();

  let fibseq = [0, 1]
  let n = 2;

  if (input > 1){
    if (selection == "before") {
      do  {
        fibseq.push(fibseq[fibseq.length-1] + fibseq[fibseq.length-2]);
      } while(fibseq[fibseq.length-1] < input)
    } else {
      do {
        fibseq.push(fibseq[fibseq.length-1] + fibseq[fibseq.length-2]);
        n = n + 1;
      } while(n <= input)
    }

    if(selection == "before"){
      $("#output").text("Output: " + fibseq[fibseq.length-2]);
    } else {
      $("#output").text("Output: " + fibseq[fibseq.length-1]);
    }
  } else {
    if (selection == "nth") {
      console.log("here");
      if(input >= 0){
        console.log("here");
        $("#output").text("Output: " + fibseq[input]);
      } else {
        $("#output").text("Output: ERROR! nth number cannot be less than zero!");
      }
    } else {
      if(input == 1) {
        $("#output").text("Output: " + 0);
      } else {
        $("#output").text("Output: ERROR! There are no other numbers less than zero!");
      }
    }
  }

  console.log(input);
  console.log(selection);
  console.log(fibseq[fibseq.length-1]);
})
