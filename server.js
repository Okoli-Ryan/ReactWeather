const express = require('express');

const app = express();
console.log(__dirname);
app.use(express.static('static'));

app.listen(3000, function () {
    console.log('app started on prt 3000');
});