const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>Home page<h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Ewerthon",
        age: 21,
      },
      {
        name: "Rafaela",
        age: 18,
      },
    ];
    res.writeHead(200, { "content-Type": "text/html" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log("server rodando na porta " + port + "!");
});
