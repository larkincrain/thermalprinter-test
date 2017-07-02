var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyAMA0", {
  baudRate: 19200
});
var Printer = require('thermalprinter');

console.log('about to print')

port.on('open',function() {

    console.log('port is open');

    var printer = new Printer(port);

    printer.on('ready', function() {
        console.log('printer is ready');

        printer
          .bold(true)
          .printLine('test message, it works')
          .print(function() {
              console.log('done');
          });
      });
  });
