function flip(array, n) {
    var lo = 0;
    var hi = n - 1;
    while (lo < hi) {
        //swap elements at the begining and the end
        [array[lo], array[hi]] = [array[hi], array[lo]];
        lo++;
        hi--;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    //reverse the array
    for (var len = array.length; len > 1; len--) {
        //find the largest element 
        var maxIndex = 0;
        for (var i = 1; i < len; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        
        // move the largest element to the end 
        if (maxIndex !== len - 1) {
            //flip to bring the largest element to the front
            if (maxIndex > 0) {
                flip(array, maxIndex + 1);
            }
            //flip to bring the largest element to the end
            flip(array, len);
        }
    }
    return array;
}
