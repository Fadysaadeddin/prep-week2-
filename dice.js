"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];


for ( let i = 0 ; i < sampleSize ; i++){
  let randomNumber = Math.floor(Math.random() * 6 ) + 1 ; 
 
  
  valueCounts[randomNumber - 1]++ ; 
 
}

 const results = [];
for (let num of valueCounts){
  const percentage = (num / sampleSize * 100).toFixed(2) ;
  results.push(percentage)
}



  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (let size of sampleSizes){
       const result = runExperiment(size);
    console.log(result  , size)
  }

  

//    the output should be :
//   [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
//   [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
//   [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000
}

main();