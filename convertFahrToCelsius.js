/* My first Task */

function convertFahrToCelsius(f){
    let temp = f;
    let celsius = (temp - 32) / 1.8;

    if(temp instanceof Array === true){
        console.log(`"[${temp}] is not a valid number but a/an array."`)
    }else if(typeof temp === 'Object'){
        console.log(`"${JSON.stringify(temp)} is not a valid number but a/an object."`)        
    }else if(typeof temp != 'number' && typeof temp != 'string'){
        console.log(`"${temp} is not a valid number but a/an ${typeof temp}."`)   
    }else if(isNaN(temp) === true || temp === ''){
        console.log(`"${JSON.stringify(temp)} is not a valid number but a/an string."`)
    }else{
        // console.log(Number(celsius.toFixed(4)))
        return Number(celsius.toFixed(4));
    }
}