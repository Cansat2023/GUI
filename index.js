// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const SerialPort = require("serialport");

var getPortsList = () => {
  var portsList = [];

  SerialPort.list().then((ports) => {
    ports.forEach((port) => {
      portsList.push(port.path);
    });
  });
  return portsList.includes("COM3");
};

console.log(getPortsList());

const port = new SerialPort("COM3", {
  baudRate: 9600,
});
let boardstatus = 0;

//API
app.get("/boardstatus", (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    // enabling CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });
  if (getPortsList()) {
    boardstatus = 1;
  } else {
    boardstatus = 0;
  }
  res.write(
    "data:" +
      JSON.stringify({ data: boardstatus}) +
      "\n\n"
  );
});

//API2
app.get("/api", (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    // enabling CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });
  port.on("data", function (data) {
    if (data.toString().trim() != "") {
      res.write(
        "data:" +
          JSON.stringify({ data: data.toString().trim(), time: +new Date() }) +
          "\n\n"
      );
      console.log("Data:", data.toString(), "Time:", Date.now());
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});