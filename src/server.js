const http = require('http');
const port = process.env.PORT || 6366;
const router = require('./router')

const server = http.createServer(router);
server.listen(port, () => {
    console.log(`server is running at localhost${port}`);
})