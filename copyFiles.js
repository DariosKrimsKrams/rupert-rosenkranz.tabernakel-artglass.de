const fs = require('fs');
var files = ['_redirects', 'robots.txt'];
var output = 'dist/rupert-rosenkranz/browser';

files.forEach((file) => {
    fs.copyFile(file, output + '/' + file, (err) => {
        if (err) throw err;
        console.log('File ' + file + ' was copied to build');
    });
})