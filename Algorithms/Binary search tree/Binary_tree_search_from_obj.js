/**
 * Created by zaranapatel on 6/27/17.
 */

/*
 Please write a function that determines if a given value is in the tree
 (returning a boolean indicating the values, true if found, false if not).

 Given a tree like this:

 - Every node has 0 or 2 children ('left' and 'right')
 - left child value < parent value
 - right child value > parent value
 - No duplicate values
 // Every node has 0 or 2 children
 // left.value < value
 // right.value > value
 */

(function() {
    'use strict';

    var binTree1 = {
        value: 15,
        left: {
            value: 10,
            left: {
                value: 8
            },
            right: {
                value: 12
            }
        },
        right: {
            value: 20,
            left: {
                value: 16
            },
            right: {
                value: 25
            }
        }
    };
    function BinaryTreesearch(obj,target)
    {
        if(obj === undefined){
            return false;
        }
        if(obj.value === target ){
            return true;
        }
        else if (target < obj.value ){

            return BinaryTreesearch(obj.left,target);
        }
        else if(target > obj.value ){
            return BinaryTreesearch(obj.right,target);
        }
        else{
            return false;
        }
    };
    console.log(BinaryTreesearch(binTree1,10));

}());
