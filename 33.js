// learning callback and revisit timeout lol

function first(callback, mode){
    function lovely(mode){
        if (mode === 1){
            console.log('First!!!')
        }
        else console.log('Ohhhh that is not one');
    }

    setTimeout(()=>{
        lovely(mode)
        callback(third ,mode)
    }, 1500)
    
}

function second(callback, mode){
    setTimeout(()=>{
        console.log(`Second mode is ${mode}`)
        callback()
    }, 3000)
    
}

function third(){
    console.log('ENd')
}

first(second,1);