var util = require('util');
var levelup = require('levelup');
var leveldown = require('leveldown');

module.exports = function(zetta) {
  var PeerRegistry = zetta.PeerRegistry;  
  var MemPeerRegistry = function() {
    var db = levelup('./.peers', { db: leveldown });
    PeerRegistry.call(this, { db: db, collection: 'peers' });
  }
  util.inherits(MemPeerRegistry, PeerRegistry);
  return MemPeerRegistry;
};
