const fs = require('fs');
const re = fs.createReadStream('./demofile.txt');
re.on('open', function() {
    console.log('The file is open')
})