function isPrime(number) {
  if (number == 2){
    return [true, number];
  }
  for(let i=2; i<=parseInt(Math.sqrt(number)); i++){
    if (number % i == 0){
      return [false, i, number/i];
    }
  }
  return [true, number];
}

$("#run").click(function() {
  let input = parseInt($("#input").val());
  let factors = [];
  let output = [];
  let nextNum = input;

  // get prime factors
  do {
    output = isPrime(nextNum);
    if(!output[0]){
      if(isPrime(output[1])){
        factors.push(output[1]);
        nextNum = output[2];
      } else {
        console.log("need extra coding cause " + output[1] + " isn't prime");
        break;
      }
    } else {
      factors.push(output[1]);
    }
  } while (!output[0]);

  console.log(output);
  console.log(factors);
  $("#output").text("Output: " + factors.join(", "));
})
