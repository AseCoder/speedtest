# speedtest
 Node.js server for measuring internet speeds and WiFi connections

Run `node server.js` to start the application. Connect to `htttp://localhost:3000` to use the web UI. The web application repeatedly sends pings to and downloads a file from the server. These are used to measure ping and download speed. Being close to an access point or directly connected to the server will yield low pings and high download speeds, while being far away and out of sight will increase ping and decrease download speed.

I made this application to gauge WiFi reach in the house.