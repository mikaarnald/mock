let mockServer = require('node-mock-server');
let path = require('path');

mockServer({
    restPath: path.join(__dirname, '/rest'),
    uiPath: '/',
    title: 'Advania API Mock',
    version: 1,
    urlBase: 'http://localhost:3001',
    urlPath: '',
    port: 3001,
    contentType: 'application/json',
    accessControlExposeHeaders: 'X-Total-Count',
    accessControlAllowOrigin: '*',
    accessControlAllowMethods: 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
    accessControlAllowHeaders: 'origin, x-requested-with, content-type',
    accessControlAllowCredentials: 'true',
    headers: {},
    open: true,
    dirName: __dirname,
});
