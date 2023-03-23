var books=[
    {
        title:'The Accursed God',
        author:'Vivek Dutta Mishra',
        price:299,
        rating:4.5
    },
    {
        title:'Kane and Abel',
        author:'Jeffrey Archer',
        price:499,
        rating:4.1
    },
    {
        title:'The Brethren',
        author:'John Grisham',
        price:300,
        rating:3.9
    },
    {
        title:'Sons of Fortune',
        author:'Jeffrey Archer',
        price:199,
        rating:3.7
    },
]

var isPrime=function(n){
    if(n<2)
        return false;
    for(var i=2;i<n;i++)
        if(n%i===0)
            return false;
    return true;
}


function searchEvens(values){
    var result=[];
    for(var value of values){

        if(value%2===0)
            result.push(value);
    }
    return result;
}

function searchPrimes(values){
    var result=[];
    for(var value of values){

        if(isPrime(value))
            result.push(value);
    }
    return result;
}

function searchBookByJeffreyArcher(values){
    var result=[];
    for(var value of values){

        if(value.author==="Jeffrey Archer")
            result.push(value);
    }
    return result;
}




var numbers=[2,11,14,18,22,23,29,40];


var evens=searchEvens(numbers);

console.log('evens',evens);

var primes= searchPrimes(numbers);

console.log('primes',primes);

var archerBooks= searchBookByJeffreyArcher(books);

console.log('archerBooks',archerBooks);


