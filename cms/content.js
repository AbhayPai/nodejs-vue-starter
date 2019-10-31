const getfiledata = require('./getfiledata');

const ourstory = (request, response) => {
    response.json({
        data: getfiledata('config', 'ourstory.json').data
    });
};

const menu = (request, response) => {
    response.json({
        data: getfiledata('config', 'menu.json').data
    });
};

const home = (request, response) => {
    response.json({
        data: getfiledata('config', 'home.json').data
    });
};

const footer = (request, response) => {
    response.json({
        data: getfiledata('config', 'footer.json').data
    });
};

const contact = (request, response) => {
    response.json({
        data: getfiledata('config', 'contact.json').data
    });
};

const blog = (request, response) => {
    response.json({
        data: getfiledata('config', 'blog.json').data
    });
};

module.exports = {
    blog,
    menu,
    home,
    footer,
    contact,
    ourstory
};
