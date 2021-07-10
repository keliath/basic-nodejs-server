const {
    Module
} = require('module');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>tarea</title><head>');
        res.write('<body><h1>Some Title</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>tarea</title><head>');
        res.write('<body><h1>Users</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            res.write('<html>');
            res.write('<head><title>Tarea</title><head>');
            res.write(`<body><h1>Hello ${username}</h1></body>`);
            res.write('</html>');
            return res.end();
        });

    }
}

module.exports = {
    handler: requestHandler,
    someText: 'dummy text'
}