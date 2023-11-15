// min number
function MinimumNum(array){
		var min=array[0];

    for(var i = 0;i<array.length;i++){
    		if(array[i]<min){
        	min = array[i];
        }
    }
    return min;
};

console.log(MinimumNum([44,66,88]));
