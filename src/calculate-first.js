function single_element(arr) {
	var res = new Array();
	var evenArray = arr.filter(function(x,i){
		return i%2 === 1;
	});
	var tmp = evenArray.filter(x=>x);
	for(var i = 0; i < evenArray.length; i++){
		tmp.splice(i,1);
		if(tmp.indexOf(evenArray[i]) === -1)
			res.push(evenArray[i]);
		tmp = evenArray.filter(x=>x);
	}
	return res;
}
