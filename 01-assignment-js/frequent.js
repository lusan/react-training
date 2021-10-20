function frequent(input) {
    if(!input.length)
        return false;

    let frequencyMap = {};
    let mostFrequent = input[0];
    let count = 1;
    
    for(let i = 0 ; i < input.length; i++) {
        let num = input[i];
        
        if(frequencyMap[num] === undefined) {
          frequencyMap[num] = 1;
        } else {
          frequencyMap[num]++;  
        }

        if(frequencyMap[num] > count) {
            mostFrequent = num;
            count = frequencyMap[num];
        }
    }
    
  return `${mostFrequent} (${count} times)`;
}


console.log(frequent([1,2,4,4,4,4,1,1,1,6]))
