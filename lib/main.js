exports.main = function() {
  'use strict';
  var data = require('sdk/self').data;

  var pageMod = require('sdk/page-mod');

  pageMod.PageMod({
    attachTo: ['existing', 'top', 'frame'],
    contentScriptFile: [
      data.url('password.js')
    ],
    onAttach: function(worker) {
      worker.port.emit('attached');
    },
    include: 'https://www.produbanco.com/GFPNetSeguro/Default.aspx?qsCanal='
  });
}
