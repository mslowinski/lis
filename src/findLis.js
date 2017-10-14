'use strict';

function findLis(array) {
    let lis = [];
    for (let i = 0; i < array.length; i++) {
        let max =  -1;
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                if (max === -1 || max < lis[j] + 1) {
                    max = 1 + lis[j];
                }
            }
        }
        if (max === -1) {
            max = 1;
        }
        lis[i] = max;
    }
    let result = -1;
    let index = -1;
    for (let i = 0; i < lis.length; i++) {
        if (result < lis[i]) {
            result = lis[i];
            index = i;
        }
    }

    let lisArray = [];
    lisArray.unshift(array[index]);

    let res = result - 1;
    for (let i = index-1; i >= 0; i--) {
        if (lis[i] === res) {
            lisArray.unshift(array[i]);
            res--;
        }
    }

    return lisArray;
}

module.exports = findLis;


