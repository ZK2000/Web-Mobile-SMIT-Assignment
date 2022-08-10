// Question# 01
function Obj(x){
    let RevObj= x.toString().split('').reverse().join('');
    return RevObj;
}
console.log(Obj(32243))




// Question# 02
function Obj(val){
    let RevObj= val.toString().split('').reverse().join('');
    let StrVal= val.toString();

    if (RevObj === StrVal){
        alert('"'+val+'" is a Palindrome');
    }
    else{
        alert('"'+val+'" is not a Palindrome');
    }
}
console.log(Obj('radar'))




// Question# 03
function splword(str){
let l1= str.split('')
console.log(l1)
let i= l1[0]
let ii= l1[0]+l1[1]
let iii= l1[0]+l1[1]+l1[2]
let iv= l1[1]
let v= l1[1]+l1[2]
let vi= l1[2]
console.log(i+" , "+ii+" , "+ iii+" , "+ iv+" , "+ v+" , "+ vi)
}
splword('dog')




// Question# 04
function alphabeticOrder(str){
    return str.split('').sort().join('');
}
console.log(alphabeticOrder('webmaster'));




// Question# 05
function caplet(string){
    let str= string.split(' ');
    let newarr= [];
    for(i=0; i<str.length; i++){
       newarr.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
    return newarr.join(' ');
}
console.log(caplet('the quick brown fox'));




// Question# 06
function longestStr(string){
    let str= string.split(' ');
    if (str[0].length > str[1].length && str[0].length > str[2].length){
        console.log('"'+str[0]+'" is the longest word')
    }
    else if (str[1].length > str[0].length && str[1].length > str[2].length){
        console.log('"'+str[1]+'" is the longest word')
    }
    else if (str[2].length > str[0].length && str[2].length > str[1].length){
        console.log('"'+str[2]+'" is the longest word')
    }
}
console.log(longestStr('Web Development Tutorial'))




// Question# 07
function vowelInStr(str){
    let vowelCount= 0;
    let str1= str.toLowerCase();
    for(i=0; i<str1.length; i++){
        if (str1.charAt(i)==='a' || str1.charAt(i)==='e' || str1.charAt(i)==='i' || str1.charAt(i)==='o' || str1.charAt(i)==='u'){
            vowelCount= vowelCount+1;
        }
    }
    return vowelCount;
}
console.log(vowelInStr('The quick brown fox'))




// Question# 08
function primeNum(num){
        if (num%2 === 0){
            console.log(num+' is not a prime number')
        }
        else{
            console.log(num+' is a prime number')
        }
}
console.log(primeNum(21))




// Question# 09
function checkType(val){
    console.log(typeof(val))
}
checkType(2)




// Question# 10
function sl_sg(){
    arr= [1,2,3,4,5];
    let sl= Math.min(arr)
    sl=sl-1
    console.log('2nd Lowest number in array is '+ sl)
    let sg= Math.max(arr)
    sg=sg+1
    console.log('2nd Greatest number in array is '+ sg)
}
sl_sg()