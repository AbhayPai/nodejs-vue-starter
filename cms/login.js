const getfiledata = require('./getfiledata');

const login = (request, response) => {
    let pwd = request.body.pwd || '';
    let name = request.body.name || '';

    let filedata = getfiledata('config', 'credentials.json');

    response.json({
        status: filedata.name === name && filedata.pwd === pwd
    });
};

module.exports = login;
