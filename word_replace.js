const fs = require('fs');
const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("Choose a file: ", (filename) => {
    if (filename)
        pick_a_word(filename);
    else
        readl.close();
});


function pick_a_word(filename) {
    readl.question("Choose a word: ", (word_target) => {
        if (word_target)
            pick_another_word(filename, word_target);
        else
            readl.close();
    });
};

function pick_another_word(filename, word_target) {
    readl.question("pick the word you want instead: ", (final_word) => {
        if (final_word)
            replace_word(filename, word_target, final_word);
        else
            readl.close();
    });
};


function replace_word(filename, word_target, final_word) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) { console.error(err); readl.close(); return; };

        const lines = data.split('\n');
        let newData = "";

        for (let i = 0; i < lines.length; i ++) {
            const words = lines[i].split(' ');
            let newWords = "";

            for (let y = 0; y < words.length; y ++) {
                if (words[y] !== word_target)
                    newWords += words[y];
                else
                    newWords += final_word;
                if (y + 1 !== words.length)
                    newWords += ' ';
            };
            newData += newWords;
            if (i + 1 !== lines.length)
                newData += '\n';
        };
        fs.writeFile(filename, newData, (err) => {
            if (err) { console.error(err); readl.close(); return; };
        });
    });
    readl.close();
};