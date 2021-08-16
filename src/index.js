
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return Math.min.apply(Math, array);
  }else{
    return 0;
  }
  }
  

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return Math.max.apply(Math, array);
  }else{
    return 0;
  }
 
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let sum=0;
    for(let i=0;i<array.length;i++){
     sum+=array[i];
    }

    return sum/array.length;
  }else{
    return 0;
  }
}
