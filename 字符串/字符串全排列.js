function f(arr, start ,end) {
    if (start === end) {
            console.log(arr.join(''));
    } else {
        for(let i = start;i <end;i++){
            [arr[start],arr[i]] = [arr[i],arr[start]];
             // console.log("第一："+arr.join(''));
            f(arr,start+1,end);
            // console.log("第二："+arr.join(''));
            [arr[start],arr[i]] = [arr[i],arr[start]];
             // console.log("第二："+arr.join(''));
        }
    }
}

let arr = ['a','b','c'];
f(arr,0,arr.length);