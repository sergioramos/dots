var html = require('./template'),
    classes = require('classes'),
    create = require('domify')

module.exports = function (element, ms) {
  var pos = ['one', 'two', 'three'];
  var dots = create(html);
  var cl = classes(dots);
  var interval = null;
  var returns = {};
  var i = 0;
  
  var run = function () {
    cl.remove(pos[i]);
    if(i < (pos.length-1)) i += 1;
    else i = 0;
    cl.add(pos[i]);
  };
  
  returns.start = function () {
    element.appendChild(dots);
    interval = setInterval(run, ms);
    return returns;
  };
  
  returns.stop = function () {
    clearInterval(interval);
    return returns;
  };
  
  returns.rm = function () {
    element.removeChild(dots);
  };
  
  return returns;
};