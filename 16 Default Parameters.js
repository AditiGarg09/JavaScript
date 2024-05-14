// Passed all required Arguments

function prd1(a,b){
    return a*b;
}
console.log(prd1(2,3));

// Only single argument passed

function prd2(x,y){
    return x*y;
}
console.log(prd2(3));

// Only single argument passed but set default parameter also

function prd3(i,j=5){
    return i*j;
}
console.log(prd3(9));