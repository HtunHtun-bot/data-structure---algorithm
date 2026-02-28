function binarySearch(array, search) {
    let first = 0;
    let last = array.length - 1;
    while (first <= last) {
        let mid = (first + last) // 2;
        let mid_value = array[mid];
        if (mid_value === search) {
            return array.indexOf(mid_value);
        }
        else {
            if (mid_value > search) {
                last = mid - 1;
            }
            else
                last = mid + 1;
        }
    }
    return false
}

console.log(binarySearch([8,14,18,20,26,66,78],18))