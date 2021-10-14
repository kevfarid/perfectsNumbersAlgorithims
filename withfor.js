const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Insert un numero: ', function(res){
  var num = Number(res)
  perfectNumbers(num)
})

function perfectNumbers(num){
  for(var i = 1; i <= num; i++){
    var count = 0;
    for(var j = 1; j < i; j++){
      if(i % j == 0){
        count += j
      }
    }

    if(i === count){
      console.log(count)
    }
  }

  rl.close()

}