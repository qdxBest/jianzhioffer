function checkchongfu(arr,_p,_q) {
    for(let i = _p;i<_q;i++){
        if (arr[_q] === arr[i]) {
            return false;
        }
    }
    return true;
}

function f(arr, p ,q) {
    if (p === q) {
            console.log(arr.join(''));
    } else {
        for(let i = p;i <q;i++){
            if(checkchongfu(arr,p,i)) {
                [arr[p], arr[i]] = [arr[i], arr[p]];
                f(arr, p + 1, q);
                [arr[p], arr[i]] = [arr[i], arr[p]];
            }
        }
    }
}

let arr = ['a','b','b'];
f(arr,0,arr.length);