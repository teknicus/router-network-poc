# Installation Instructions

### The Front end nodes

- Change working directory to the node red config folder 
  `cd ~/.node-red`
- Install the custom node pack
  `npm install <path to repo>/node-pack/router-network/`

### For the storage plugin

- Install the custom node
  `npm clean-install node-red-mongo-storage-plugin`
- Run the node-red instance
  `node script/node-red-app.js`

### `server.js` is a simple REST POST endpoint

Run it with the command `node server.js`

