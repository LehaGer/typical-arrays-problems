
exports.min = function min (array) {
    if(array && array.length > 0){
        let minVal = array[0];
        array.forEach(element => {
            if(element < minVal) minVal = element;
        });
        return minVal;
    }else{
        return 0;
    }
}

exports.max = function max (array) {
    if(array && array.length > 0){
        let maxVal = array[0];
        array.forEach(element => {
            if(element > maxVal) maxVal = element;
        });
        return maxVal;
    }else{
        return 0;
    }
}

exports.avg = function avg (array) {
    if(array && array.length > 0){
        let sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return sum / array.length;
    }else{
        return 0;
    }
}
