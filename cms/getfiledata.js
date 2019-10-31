const fs = require('fs');
const path = require('path');

const getfiledata = (dir = 'config', filename) => {
    var fileData = fs.readFileSync(path.join(__dirname, dir, filename));
    let parseData = JSON.parse(fileData);
    return parseData;
};

module.exports = getfiledata;