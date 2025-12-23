// learning async  await and promise
// note to myself: Async is to set boundary that this function is able to use await
// await must use in pair with promise most of the time (example fetch(cuz already return promise))
function main1(){
    console.log("A")
    timer()
    console.log("B")
}

async function main2(){
    console.log('A')
    await timer()
    console.log('B')
}

function timer(){
    return new Promise(resolve => {
        setTimeout(() => {
        console.log('timer')
        resolve()
        },5000)
    })
}

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function input(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, answer => {
            resolve(answer)
        })
    })
}

async function main() {
    const choice = await input("Which choice you'll choose(1,2)?\n1. no async no await\n2. yes async and await\nEnter you choice : ")
    if (choice === '1') {
        main1()
    }
    else if(choice === '2'){
        await main2()
    }
    else {
        console.log('Bad input!')
    }

    rl.close()
}


main()
