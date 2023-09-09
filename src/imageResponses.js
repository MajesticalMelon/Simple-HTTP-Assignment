const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
    response.writeHead(200, { 'Content-type': 'image/png' });
    response.write(image);
    response.end();
};

module.exports = { getImage };