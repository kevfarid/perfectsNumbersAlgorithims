const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Insert un numero: ', function(res){
  var num = Number(res)
  perfectNumbers(num, 1)
})

function perfectNumbers(num, index){
  if(index <= num){
    var count = sumDivisors(index, 1, 0)

    if(index === count){
      console.log(count)
    }

    perfectNumbers(num, index + 1, 0)
  }

  rl.close()
}

function sumDivisors(num, index, count){
  if(index < num) {
    if(num % index == 0){
      count += index
    }
    return sumDivisors(num, index + 1, count)
  }else {
    return count;
  }
}