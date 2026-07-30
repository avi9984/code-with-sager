

function anagram(str1,str2){
    if(str1.length !==str2.length) return false;

    for(let i of str1){
      i.include(str2);
       return true
    }
}

let str1="avi";
let str2="aiv";
console.log(anagram(str1,str2))