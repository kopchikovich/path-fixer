const fs = require('fs');
const FILE = 'build/index.html';

if (fs.existsSync(FILE)) {

    const WRONG_PATH = '="/static';
    const CORRECT_PATH = '="./static';
    const html = fs.readFileSync(FILE, 'utf8');
    
    let newHtml = html;
    let counter = 0;
    while (newHtml.includes(WRONG_PATH)) {
        newHtml = newHtml.replace(WRONG_PATH, CORRECT_PATH);
        counter++;
    }
    
    fs.writeFileSync(FILE, newHtml);
    console.log(counter === 1? '1 path fixed' : counter + ' paths fixed');
    
} else {
    console.log(FILE + ' not found');
}
