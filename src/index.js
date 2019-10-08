module.exports = function multiply(first, second) {
  if (first.length>=second.length) {
    var first_arr = first.split('');
    var second_arr = second.split('');
  }
  else{
    var first_arr = second.split('');
    var second_arr = first.split('');
  }
  var tmp = 0;
  var terms = [];
  var ml = [];
  for (let i = 0; i < second_arr.length; i++) {
    for (let j = 0; j < first_arr.length; j++) {
      ml.push(((second_arr[second_arr.length-1-i]*first_arr[first_arr.length-1-j])+tmp)%10);
      tmp = Math.floor(((second_arr[second_arr.length-1-i]*first_arr[first_arr.length-1-j])+tmp)/10);
    }
    if (tmp != 0) {
      ml.push(tmp)
    }
    tmp = 0;
    ml.reverse();
    ml.push('0'.repeat(i));
    terms.push(ml.join(''));
    ml = [];
  }
  let len = terms[terms.length-1].length;
  terms.reverse();
  for (let i = 0; i < terms.length; i++) {
    if (terms[i].length<len) {
      terms[i] = '0'.repeat(len-terms[i].length)+terms[i];
    }    
  }
  sum = terms[0].split('');
  for (let i = 1; i < terms.length; i++) {
    for (let n = 0; n < len; n++) {
      tr = sum[len-1-n];
      sum[len-1-n] = (Number(sum[len-1-n]) + Number(terms[i].split('')[len-1-n]) + tmp)%10;
      tmp = Math.floor((Number(tr) + Number(terms[i].split('')[len-1-n]) + tmp)/10);
    }
    if(tmp != 0){
      sum.reverse().push(tmp);
      sum.reverse();
      tmp = 0;
    }
  }
  return sum.join('');
}
