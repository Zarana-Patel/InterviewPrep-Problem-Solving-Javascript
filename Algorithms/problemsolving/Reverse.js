/**
 * Created by zaranapatel on 6/12/17.
 */
function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

console.log(reverse('zarana'));