/**
 * Created by zaranapatel on 6/12/17.
 */
function balancedstring(str){
    var list=[];
    var open={'{':'}','[':']','(':')'};
    var close ={')': 1,'}':1,']':1};
    for(var i =0;i<str.length;i++){
        var char = str[i];
        if(open[char]){
            list.push(open[char]);
        }
        else if(close[char]){
            if(list[list.length-1] === char){
                list.pop();
            }
            else{
                return false;
            }
        }
    }
    return !list.length;
}
console.log(balancedstring('{([)}'));

// using map 
/*
const BalanceStr = (s) => {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  let stacklist = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stacklist.push(s[i])
    } else if (stacklist[stacklist.length - 1] === map[s[i]]) {
      stacklist.pop()
    } else {
      return false
    }
  }
  return stacklist.length ? false : true
}
console.log(BalanceStr("{[(])}"))
*/
