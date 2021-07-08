const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);

console.log(1)
console.log(arr3)

const arr4 = arr1.reverse();

console.log(2)
console.log(arr4)

const arr0 = [1, 2, 3];

const arr5 = arr0.push(4, 5, 6)

console.log(3)
console.log(arr0)

const arr01 = [1, 2, 3];
const arr6 = arr01.unshift(4, 5, 6)

console.log(4)
console.log(arr01)

const arr8 = ['js', 'css', 'jq'];

// alert(arr8[0])
// alert(arr8[arr8.length - 1])

console.log(5)
console.log(6)

const arr9 = [1, 2, 3, 4, 5];

const arr91 = arr9.slice(0,3);
const arr92 = arr9.slice(3)

console.log(7)
console.log(arr91)
console.log(8)
console.log(arr92)

const arr10 = [1, 2, 3, 4, 5];
const arr101 = arr10.splice(1,2)

console.log(9)
console.log(arr10)

const arr93 = arr9.slice(1,4)

console.log(10)
console.log(arr93)

const ex = [1, 2, 3, 4, 5];

const arr11 = ex.splice(3,0, 'a','b','c')

console.log(11)
console.log(ex)

const ex2 = [1, 2, 3, 4, 5];

const arr12 = ex2.splice(1,0,'a','b')
const arr13 = ex2.splice(6,0,'c')
const arr14 = ex2.splice(8,0,'e')

console.log(12)
console.log(ex2)

const ex3 = [3, 4, 1, 2, 7];
ex3.sort()

console.log(13)
console.log(ex3)

const arr15 = [5, 6, 7, 8, 9];

// let sum = arr15.map(item => sum);

const sum = arr15.reduce((sum, current) => sum + current, 0);


console.log(14)
console.log(sum)


const arr16 = [5, 6, 7, 8, 9];


function map(arr,func){

    const degree = []

    for(let i = 0;i <= arr.length - 1; i ++){

        degree[i] = func(arr[i], i ,arr)
    }

    return degree
}

function degree(currentValue,index,array){

    return currentValue ** 2;
}


console.log(15)
console.log(map(arr16,degree))



const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
const negativ = arr17.filter(item => item < 0)

console.log(16)
console.log(negativ)

const arr18 = [1,-3, 5, 6,-7, 8, 9,-11];
const even = arr18.filter(item => item % 2 === 0)

console.log(17)
console.log(even)

const arr19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'saa', 'q', 'az']

const fiveNumb = arr19.filter(item => item.length >= 5)

console.log(18)
console.log(fiveNumb)

const arr20 = [1, 2, [3, 4], 5, [6, 7]];
const under = arr20.filter(item => item.length >= 2)


console.log(19)
console.log(under)

const arr21 = [5,-3, 6,-5, 0,-7, 8, 9];
const counter = arr21.filter(item => item < 0)

console.log(20)
// console.log(counter)
console.log(counter.length)









