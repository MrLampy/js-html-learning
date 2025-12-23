// let's try the 33.js with Async!!!

function first(mode){
    return new Promise((good, bad) => {
        setTimeout(() => {
            if (mode === 1){
                good('First!');
            }
            else bad('BAD!!!!') // bad == reject
            }, 1500
        )
    })
}

function second(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {resolve('Second!!')}, 3000);
    })
}

function third(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('End')
        }, 0);
    })
}

async function main(mode){
    try {
        const result1 = await first(mode)
        console.log(result1)

        const result2 = await second()
        console.log(result2)

        const result3 = await third()
        console.log(result3)
    }
    catch(error){
        console.error(error)
    }
}

main(1)