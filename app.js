const randexp = require('randexp');
const readline = require('readline');
const fs = require('fs');

function init() {
    console.clear();
    console.log('Netflix giftcard generation script by Grango');
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.question('Amount to generate? ~100k is recommended per use.\n\n\n=>', (input) => {
        if(!input || input.length <= 0 || isNaN(input)) {
            console.log("Invalid input!");
            rl.close();
            init();
            return;
        }

        rl.close();
        main(parseInt(input));
    })
}

function main(amount) {
    var writeData = '';
    var generated = 0;

    for (var i = 0; i < amount; i++) {
        var rand = new randexp(/LEQ\d[A-Z]\d\d\d\d\d\d/)
        writeData += `${rand.gen()}\n`;
        generated++;
    }

    fs.appendFileSync('./codes.txt', writeData)
    console.log(`${generated} codes generated!`);
}

init();
