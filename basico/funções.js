function parimpar(n){
    if (n%2 != 0){
        return 'Impar!'
    } else {
        return 'Par!'
    }
}

console.log(parimpar(5))

var s = function somar(n1,n2){
    return n1 + n2;
}

console.log(s(2,5))

// RECURSIVIDADE 

r = function recursiva(n){
    if (n == 1){
        return 1
    } else {
        return n * recursiva(n - 1)
    }
}

console.log(r(4))