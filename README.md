# speedtest
 Node.js server for measuring internet speeds and WiFi connections

Run `node server.js` to start the application. Connect to `htttp://localhost:3000` to use the web UI. The web application repeatedly sends pings to and downloads a file from the server. These are used to measure ping and download speed. Being close to an access point or directly connected to the server will yield low pings and high download speeds, while being far away and out of sight will increase ping and decrease download speed.

I made this application to gauge WiFi reach in the house.

Before use make sure to add 2 files of size between 0.1 and 10 MB (recommendation) onto the server. These will be sent to clients to measure the download speed. In `server.js` on lines 14 and 18 supply absolute paths to the files. Smaller files will give faster but possibly inaccurate results and larger files will take longer to download but the results will maybe be less erroneous.
