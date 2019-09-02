const fs = require('fs');

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sample Page</title></head>')
    res.write('<body><div><form method="POST" action="/message"><input type="text" name="write-box" /> <button>Write Now</button></form></div></body>')
    res.write('<html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString().split("=")[1];
      fs.writeFileSync('message.txt', parsedBody);
      res.statusCode = 302;
      res.setHeader('Location', '/')
      return res.end();
    })
    return;
  }
}

module.exports = requestHandler;