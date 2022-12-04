const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('find myka');
  }
  if (req.url === '/about') {
    res.end('myka isnt here. look elsewhere');
  }
  // if (req.url === '/about/elsewhere') {
  //   res.end('you found myka! congrats!');
  // }
  res.end(`
  <h1>myka isnt here</h2>
  <h2>try 'about'</h2>
  <a href="/">back to home</a>
  `)
});

server.listen(5000);