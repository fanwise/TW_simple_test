function calculate_median(arr) {
  var evenArray = arr.filter(function(x,index){
    return index%2 === 1;
  });
  evenArray = evenArray.sort(function(a,b){
    return a-b;
  });
  if(evenArray.length%2 === 1){
    return evenArray[evenArray.length/2 - 0.5];
  }else{
    return (evenArray[evenArray.length/2] + evenArray[evenArray.length/2-1])/2;
  }
}
