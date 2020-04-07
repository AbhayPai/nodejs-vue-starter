const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');

const login = require('./cms/login');
const content = require('./cms/content');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.post('/api/v1/login', (request, response) => {
    if(request.method !== 'POST') {
        return;
    }

    login(request, response);
});

app.get('/api/v1/home', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.home(request, response);
});

app.get('/api/v1/blog', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.blog(request, response);
});

app.get('/api/v1/menu', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.menu(request, response);
});

app.get('/api/v1/contact', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.contact(request, response);
});

app.get('/api/v1/ourstory', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.ourstory(request, response);
});

app.get('/api/v1/footer', (request, response) => {
    if(request.method !== 'GET') {
        return;
    }

    content.footer(request, response);
});

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
