# zetta leveldb registry

## Install

`npm install zetta-leveldb-registry`

## Usage

```js
var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
var LevelRegistries = require('zetta-leveldb-registry')(zetta);
var PeerRegistry = LevelRegistries.PeerRegistry;
var DeviceRegistry = LevelRegistries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);

```

## License

MIT
