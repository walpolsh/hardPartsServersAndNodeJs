let num = 4;
const multiplyBy = inputNumber => inputNumber * num;
const cubeValue = multiplyBy(multiplyBy(num)); //new execution context, its a mini-app

module.exports = {
  cubeValue
};
//the server object listens on port 8080

// 99% of Node API's messages from the client side interaction, and return approprate messages.

// node js allows us to connect to C++ features because it gives us labels to C++ functionality.

//we need to understand how Node interacts with C++ which interacts with the interal computer which iteracts with the network.

//JS => Node => C++ => Computer Internals => Network  <<=

//JS has a store of data: Global Memory. Available the whole time the program is running.

//Functions are completed work.

// Theres a label in Javascript Node for the network: HTTP, it is the way you make reqs and resps to browsers.

// its a format of data and rules to communicate
