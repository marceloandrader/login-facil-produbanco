/*globals $,self*/
'use strict';

var LFP = {};

LFP.init = function _init() {
  var passwordInput = document.getElementById('txtClave');
  passwordInput.readOnly = false;
};

self.port.on('attached', function() {
  LFP.init();
});
