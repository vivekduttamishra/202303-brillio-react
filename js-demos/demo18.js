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



function search(match,values){
    var result=[];
    for(var value of values){

        if(match(value))
            result.push(value);
    }
    return result;
}


var isPrime=(n)=>{
    if(n<2)
        return false;
    for(var i=2;i<n;i++)
        if(n%i===0)
            return false;
    return true;
}

var numbers=[2,11,14,18,22,23,29,40];

var primes = search(isPrime,numbers);

console.log('primes',primes);


//how to search evens
function isEven(n){ return n%2===0;}

var evens = search(isEven, numbers);

console.log('evens',evens);

//we can also use anonymous function to do the searching
//example search odds

var odds = search(function(n){return n%2!==0;}, numbers);
console.log('odds',odds);

// var books by jeffrey archer


var archerBooks = search( b=> b.author==='Jeffrey Archer',  books);

console.log('archerBooks',archerBooks);


var inexpensiveBooks = search(b=>b.price<200, books);
console.log('inexpensiveBooks',inexpensiveBooks);

