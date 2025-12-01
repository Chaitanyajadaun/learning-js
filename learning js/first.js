const x=10
arr = [1,3,5,7,9]
arr.push(arr[arr.length-1]+2)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)
function add(a,b){
    console.log(a,b)
    return a+b
}
console.log(add(arr[0],arr[arr.length-1]))