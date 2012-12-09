var html = require('./template'),
    classes = require('classes'),
    create = require('domify')
    
var pos = ['one', 'two', 'three'];

module.exports = function (element, ms) {
  var dots = create(html).pop();
  var cl = classes(dots);
  var interval = null;
  var returns = {};
  if(!ms) ms = 250;
  var i = 0;
  
  var run = function () {
    cl.remove(pos[i]);
    if(i < (pos.length-1)) i += 1;
    else i = 0;
    cl.add(pos[i]);
  };
  
  returns.start = function () {
    if(interval) return;
    element.appendChild(dots);
    interval = setInterval(run, ms);
    return returns;
  };
  
  returns.stop = function () {
    clearInterval(interval);
    interval = null;
    return returns;
  };
  
  returns.rm = function () {
    element.removeChild(dots);
    clearInterval(interval);
    interval = null;
  };
  
  return returns;
};