const fs = require('fs');

fs.readFile('./lista.txt', (err, data) => {
    err ? console.log(err) : console.log(data.toString());
})