
var stubFalse = function(){ return false };
var isBuffer = !Buffer ? stubFalse : function(value) {
  return value instanceof Buffer;
}


module.exports =
function deepdup(source) {
  var result;

  if (typeof source !== 'object') {
    return source;
  }

  if (Array.isArray(source)) {
    // array
  }
  else {
    if (isBuffer(source)) {
      return source.slice();
    }

    
  }
}
