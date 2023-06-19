const fs = require('fs');
const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("choose a file: ", (filename) => {
    if (filename) {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) { console.error(err); return; };
            
            let modifiedData = '';
            const words = data.split(' ');
            let modifiedWord = '';

            words.forEach((words, index) => {
                modifiedWord = words.replace(/a/g, 'e');
                modifiedData += modifiedWord;

                if (index !== words.length - 1)
                    modifiedData += ' ';
            });

            fs.writeFile('output.txt', modifiedData, 'utf-8', (err) => {
                if (err) { console.error(err); return; };
            });
            console.log("File saved succesfully.");
        });
    }
    readl.close();
})