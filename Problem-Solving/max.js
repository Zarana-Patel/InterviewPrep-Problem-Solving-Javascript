// max number
function Maxnum(array)
{
		var max=0;

    for(var i = 0;i<array.length;i++){
    		if(array[i]>max){
        	max = array[i];
        }
    }
    return max;
};

console.log(Maxnum([44,66,88]));
