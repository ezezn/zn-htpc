define(['./module'], function (navigator) {
    'use strict';

  navigator.factory('navigatorCommandCreator',[
    'NAV_KEY_CODES',
    'NAV_CMD',
    'NAV_CMD_ALLOW_HOLD',
    function (NAV_KEY_CODES, NAV_CMD, NAV_CMD_ALLOW_HOLD) {

    function findByCode (k) {
      for (var key in NAV_KEY_CODES) {
        if (NAV_KEY_CODES.hasOwnProperty(key)) {
          if (k == key) return NAV_KEY_CODES[k];
        }
      }
      return false;
    }

    function canHoldKey (code) {
      return NAV_CMD_ALLOW_HOLD[code];
    }

    var prevHoldingKey = false;
    return {
      createCommand : function(commandData) {
        var cmd = {};
        var keyName = findByCode(commandData.code);
        if (keyName) {
          if (commandData.origin == 'keyUp') {
            if (prevHoldingKey) {
              cmd.id = prevHoldingKey +'_stop';
              prevHoldingKey = false;
            } else {
              cmd.id = keyName;
            }
            cmd.origin = commandData;
            return cmd;
          } else if (commandData.holding && canHoldKey(keyName)) {
            cmd.id = keyName + '_start';
            cmd.origin = commandData;
            prevHoldingKey = keyName;
            return cmd;
          }
        }
        return false;
      }
    }
  }]);
    
});