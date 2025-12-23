// I know it a bit weird in order of learning but let's learn .then .catch Promise!!!

function first(mode){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (mode === 1){
                resolve('First!!!')
            }
            else reject('BAD!!!')
        },1500)
    })
}

function second(){
    setTimeout(()=>{
        console.log('Second')
    },3000)
}

first(1).then((Ans)=>{console.log(Ans); second();})