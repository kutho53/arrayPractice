function create(N){
    let a = []
    for (let i = 1; i <= N; i++){
        a.push(i);
    }
    return a
}

let fullArray = create(100);

console.log(fullArray);


function filterEven(){
    let even = [];
    for (let i = 0; i < fullArray.length; i++){
        if (fullArray[i] % 2 === 0)
        even.push(fullArray[i]);
    }
    return even;
}

let even = filterEven();

console.log (even);

function filterOdd(){
    let even = [];
    for (let i = 0; i < fullArray.length; i++){
        if (fullArray[i] % 2 === 0)
        even.push(fullArray[i]);
    }
    return even;
}

