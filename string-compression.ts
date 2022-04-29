let word = "aabcccccaaa"
let count = 0;
let output:string[] = []

for(let i = 0; i < word.length; i++){
    let char = word[i];
    count++;
    
    if((output[output.length-1] != char)) output.push(char)
    
    if(i != word.length)
    if(word[i+1] != word[i]) {
        output.push(count.toString())
        count = 0;
    }
}

//dont forget the last letter

console.log(output.join(''))