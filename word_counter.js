const fs = require('fs');
const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("Choose a file: ", (filename) => {
    if (filename) {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) { console.error(err); fs.close(); return; };

            const wordcount = data.trim().split(/\s+/).length;
            console.log("The number of words in the file is: ", wordcount);
        });
    }
    readl.close();
})