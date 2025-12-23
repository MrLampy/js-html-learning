// Doing some exercise create by GPT
//set up input
const readline = require("readline/promises");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const random_max = 2;
const rando = Math.floor(Math.random() * random_max);

// 1.1
function downloadData(callback){
    setTimeout(()=>{
        console.log('Data downloaded')
        callback()
    },1000)
}

function processData(){
    console.log("Processing Data")
}

function main1_1(){
    downloadData(processData);
}

//1.2
function downloadData2(callback){
    setTimeout(()=>{
        callback('FILE_OK')
    },1000)
}

function processData2(str){
    console.log(`Processing: ${str}`)
}

function main1_2(){
    downloadData2(processData2)
}

//1.3
function downloadData3(callback){
    setTimeout(()=>{
        if (rando){
            callback(null,"FILE_OK")
        }
        else callback('DOWNLOAD_FAILED',null)
    },1000)
}

function processData3(F,A){
    if (A){
        console.log(`Processing: ${A}`)
        return
    }
    console.log(`Error: ${F}`)
}

function main1_3(){
    downloadData3(processData3)
}

//2
function downloadData2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (rando){
                console.log('Data Downloaded')
                resolve("FILE_OK")
            }
            else reject('DOWNLOAD_FAILED')
        },1000)
    })
}

function saveData(){
        console.log('Saved successfully')
}

function main2(){
    downloadData2().then(()=>{
        saveData()
    }).catch((result) => {
        console.error(result)
    })
}

//3.1
async function main3_1(){
    function downloadData3_1(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
            if (rando){
                console.log('Data Downloaded')
                resolve("FILE_OK")
            }
            else reject('DOWNLOAD_FAILED')
            },1000)
        })
    }
    try{
        await downloadData3_1()
        console.log('Saved successfully')
    }
    catch(err){
        console.error(err)
    }
}

//3.2
function taskA() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task A done')
            resolve('A')
        }, 2000)
    })
}

function taskB() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task B done')
            resolve('B')
        }, 3000)
    })
}

async function main3_2(){
    console.time('sequential')
    console.log('Sequential : ')
    await taskA()
    await taskB()
    console.timeEnd('sequential')

    console.time("Parallel")
    console.log('\nParallel : ')
    await Promise.all([taskA(), taskB()])
    console.timeEnd('Parallel')
    
}

async function main(){
    let ans = await input.question('What answer you wanna see?\nI wanna see (1.1/1.2/1.3/2/3.1/3.2): ')
    if (ans == '1.1') main1_1()
    else if (ans == '1.2') main1_2()
    else if (ans == '1.3') main1_3()
    else if (ans == '2') main2()
    else if(ans == '3.1') main3_1()
    else if(ans == '3.2') main3_2()
    else console.log("There is something wrong mate")
    input.close()
}

main()