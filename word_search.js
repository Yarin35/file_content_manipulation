const fs = require('fs');
const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("Choose a file: ", (filename) => {
    if (filename) {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                readl.close();
                return;
            }

            readl.question("Choose a word: ", (word_target) => {
                if (word_target) {
                    const words = data.split(/ |\n/);
                    let count = 0;

                    for (let i = 0; i < words.length; i ++)
                        if (words[i] === word_target)
                            count ++;

                    console.log("There are: ", count);
                    console.log("Occurrences of ", word_target);
                }

                readl.close();
            });
        });
    } else
        readl.close();
});
