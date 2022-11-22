const http = require("https");
const urls = [
  "https://osu.ppy.sh/users/12052253",
  "https://www.youtube.com/",
  "https://www.google.com.ar/?hl=es",
];
  

for (const url of urls) {
    console.log(url);
   http.get(url, (response) => {
     console.log(response);
   });
}

let server = http.createServer();
server.listen(3005);

//  const http = require('http')
//  function responsePet(request, responce) {

//      const getUrl = http.get("https://www.youtube.com/");
//      responce.end("getUrl")
//  }

// let server = http.createServer(responsePet)

// server.listen(3005);

// var XMLHttpRequest = require("xhr2");
// var xhr = new XMLHttpRequest();
// const url = "";
// xhr.open("GET", url);
// xhr.send();

// xhr.onreadystatechange = (e) => {
//   console.log(xhr.responseText.data);
// };
