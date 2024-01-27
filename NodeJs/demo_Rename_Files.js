/*  To rename a file with the File System module.

The fs.rename() method renames the specified file:

*/
const fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err
    console.log('File Renamed!')
})