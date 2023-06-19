const fs = require('fs');
const readline = require('readline');
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question('Choose your file ', (filename) => {
    if (filename)
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) { console.error(err); return; };

            fs.writeFile('file_one.txt', data, 'utf-8', (err) => {
                if (err) {console.error(err); return;};
            });
            console.log("first file saved !");

            fs.writeFile('file_two.txt', data, 'utf-8', (err) => {
                if (err) {console.error(err); return;};
            });
            console.log("Second file saved !");
    });
    readl.close();
});

