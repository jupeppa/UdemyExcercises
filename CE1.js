
//*******  My solution  ********//
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let el of str1){
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1
    }
    for(let el of str2){
        frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1
    }


    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


//*******  Udemy solution  ********//
function validAnagram2(first, second){
    if(first.length !== second.length){
        return false
    }

    let lookup = {}

    for(let i =0; i<first.length; i++){
        let letter = first[i] 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1 
    }

    for(let i = 0; i< second.length; i++){
        let letter = second[i];

        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}



validAnagram('cat', 'tcaa');
validAnagram('cat', 'tca');
validAnagram('anagramm', 'nagarams');
validAnagram('', '');
validAnagram('texttwisttime', 'timetwisttext');
