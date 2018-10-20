
fs = require('fs'),
Docker = require('dockerode')

// DEFINE THE DOCKER CONFIGURATION
var host = 'http://' + "192.168.99.100",
docker = new Docker({
protocol: "https",
  host: host,
  port : 2376,
  ca: fs.readFileSync('./ca.pem'),
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.pem')
});
let out = ""
console.log(docker)
docker.listContainers({all:true},function(err, containers){
  console.log(containers)
  containers.forEach(function(container) {
    out += "\n" + container
  });
});
const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send("xd")

  docker.listContainers({all:true},function(err, containers){
    res.send(containers)
    
  });
});

app.listen(PORT);

// // CREATE AND START HTTP SERVER
// var proxy = httpProxy.createProxyServer(),
// server = http.createServer(function (req, res) {
//   var parsedUrl = parseurl(req),
//   containerToRedirect;
//   for(var name in config.routes) {
//     var dockerConfig = config.routes[name];
//     if ('*' !== dockerConfig.route && (new RegExp('^' + dockerConfig.route, 'i')).exec(parsedUrl.path)) {
//       req.url = req.url.replace(dockerConfig.route, '');
//       containerToRedirect = name;
//     }
//     containerToRedirect = containerToRedirect || config.default_container;
//   }
//   return proxy.web(req, res, { target: host +  ':' + config.routes[containerToRedirect].port.listen});
// });
// server.listen(process.env.PORT || 3000);
