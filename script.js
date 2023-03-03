
function check(arr1, arr2) {
    if(!arr1 || !arr1.length) return "Lỗi";
    if(!arr2 || !arr2.length) return "Lỗi";
    
    // arr 1
    let max1 = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (max1 < arr1[i]) {
            max1 = arr1[i];
        }
    }
    
    let min1 = arr2[0];
    for (let i = 0; i <= arr1.length; i++) {
        if (min1 > arr1[i]) {
            min1 = arr1[i];
        }
    }

    // arr 2
    let max2 = arr2[0];
    for (let i = 0; i < arr2.length; i++) {
        if (max2 < arr2[i]) {
            max2 = arr2[i];
        }
    }
    
    let min2 = arr2[0];
    for (let i = 0; i <= arr2.length; i++) {
        if (min2 > arr2[i]) {
            min2 = arr2[i];
        }
    }

    if (min1 > min2 || max1 < max2) {
        return true
    } else {
        return false
    }
}

// check 1
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [0, 10];
console.log("arr1 = [1, 2, 3, 4, 5, 6, 7, 8]");
console.log("arr2 = [0, 10]")
console.log(check(arr1, arr2));


// check 2
var arr4 = [1, 2, 3, 4, 5, 7, 8];
var arr5 = [4, 6]
console.log("arr1 = [1, 2, 3, 4, 5]")
console.log("arr2 = [4, 6]")
console.log(check(arr4, arr5));


