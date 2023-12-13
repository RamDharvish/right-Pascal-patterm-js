
function pattern () {
    let result=""
    for(let a=1;a<=5;a++) {
        for(let b=1;b<=a;b++) {
           result+="*"
        }
        result+="\n"
    }
    for(let c=1;c<=5;c++) {
        for(let d=c;d<5;d++) {
            result+="*"
        }
        result+="\n"
    }

    return result
}

let answer=pattern()
console.log(answer)