function even_group_calculate_average(arr) {
  var res = new Array();
  var sum = 0;
  var digit = 0;
  var pos = 0;
  var evenInEvenArray = arr.filter(function(x,i){
      return i%2 === 1;
  }).filter(function(x,i){
      return x%2 === 0;
  });
  evenInEvenArray = evenInEvenArray.sort(function(a,b){
    return a-b;
  });
  if(evenInEvenArray.length == 0)
    res.push(0);
  else{
    digit = howMuchDigit(evenInEvenArray[0]);
    sum = evenInEvenArray[0];
    for(var i = 1; i < evenInEvenArray.length; i++){
      if (digit != howMuchDigit(evenInEvenArray[i])){
        res.push(sum/(i-pos));
        sum = evenInEvenArray[i];
        pos = i;
        digit = howMuchDigit(evenInEvenArray[i]);
      }else{
        sum += evenInEvenArray[i];
      }
    }
    res.push(sum/(evenInEvenArray.length - pos));
  }
  return res;
}

function howMuchDigit(num){
  if(num < 10 && num > -10)
    return 1;
  else
    return 1+howMuchDigit(num/10);
}
