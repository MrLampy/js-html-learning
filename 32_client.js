const readline = require("readline/promises");

async function main(){
    let username;
    const input = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    while (1){
        if (!username){
            username = await input.question('What is your username?\n> Enter : ')
        }
        const message = await input.question('> ')
        if (message === "Exit"){
            input.close()
            return;
        }
        if (message === 'sign out'){
            username = null;
        }
        else{
            const response = await fetch('http://192.168.10.169:3000/upload', {
                method : 'POST',
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    author: username,
                    message: message
                })
            })
        const text = await response.text();
        console.log(`[server : ${text}]`)
        }
    }
}

main();