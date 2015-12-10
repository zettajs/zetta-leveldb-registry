var util = require('util');
var levelup = require('levelup');
var leveldown = require('leveldown');

module.exports = function(zetta) {
  var Registry = zetta.DeviceRegistry;
  var MemRegistry = function() {
    var db = levelup('./.devices', { db: leveldown });
    Registry.call(this, { db: db, collection: 'devices' });
  }
  util.inherits(MemRegistry, Registry);
  
  return MemRegistry;
};
