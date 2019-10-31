const fs = require('fs');
const path = require('path');

const getfiledata = (dir = 'config', filename) => {
    return JSON.parse(
        fs.readFileSync(path.join(__dirname, dir, filename))
    );
};

module.exports = getfiledata;