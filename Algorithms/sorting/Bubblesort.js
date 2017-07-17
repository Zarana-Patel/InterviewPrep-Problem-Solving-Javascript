/**
 * Created by zaranapatel on 6/21/17.
 */
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function BubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

BubbleSort(a);
console.log(a);