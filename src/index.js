// Node give you the keys to C++
const http = require("http"); //HTTP methods in an object, it allows us to access the C++ so Node can have access to HTTP.

function insertData(req, res) {
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
}

http
  .createServer(insertData) //
  .listen(8080); //creates an object listening property on port 8080 containing input data and output functions.

// the first object inside contains incoming data (url, header, body)
// the second object has functions which out data back out (end, write)
// C++ opens a channel to the internet at entry point 8080 in two lines with Node
// Request and response is a function big input and output function.
// This is the essence of Node, there is nothing else in this language.
// every time we set up a label to access C++ features to do something on the network we need to design that function so it's ready to access...
//      request and response
// req, res
