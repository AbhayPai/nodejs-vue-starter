const fs = require('fs');
const path = require('path');

const login = (request, response) => {
    let pwd = request.body.pwd || '';
    let name = request.body.name || '';

    var fileData = fs.readFileSync(path.join(__dirname, 'config', 'credentials.json'));
    let parseData = JSON.parse(fileData);

    response.json(
        {
            status: parseData.name === name && parseData.pwd === pwd
        }
    );
};

module.exports = login;
