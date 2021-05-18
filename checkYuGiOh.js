/* My Second Task */

function checkYuGiOh (n){
    let num = n;
    let multiples = [];

    if(typeof num === 'undefined' || isNaN(num) === true || num === ""){
        console.log(`"invalid parameter: ${JSON.stringify(num)}"`)
    }

    for(let i = 1; i <= num; i++) {
        // check if number is a factor

        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            multiples.push('yu-gi-oh');
        }else if (i % 2 === 0 && i % 3 === 0){
            multiples.push('yu-gi');
        }else if (i % 2 === 0 && i % 5 === 0){
            multiples.push('yu-oh');
        }else if (i % 3 === 0 && i % 5 === 0){
            multiples.push('gi-oh');
        }else if(i % 2 === 0){
            multiples.push('yu');
            
        }else if(i % 3 === 0){
            multiples.push('gi');
            
        }else if(i % 5 === 0){
            multiples.push('oh');
            
        }else{
            multiples.push(i);
        }
    }
    return multiples;
}
