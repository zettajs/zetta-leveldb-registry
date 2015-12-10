var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
var LevelRegistries = require('./')(zetta);
var PeerRegistry = LevelRegistries.PeerRegistry;
var DeviceRegistry = LevelRegistries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);
