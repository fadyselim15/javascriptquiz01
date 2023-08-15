

function reverser(word){
    const arr = word.split('');
    const reversedarr = [];
    for(let v of arr)
    {
        reversedarr.unshift(v);
    }

    return reversedarr.join('');
}

console.log(reverser('fady'));