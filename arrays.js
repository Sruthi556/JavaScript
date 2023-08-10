var marks=[10,20,30,40,50,60]
console.log(marks[3])

marks[4]=33
console.log(marks[4])

console.log(marks.length)

marks.push(45)

marks.pop()

marks.unshift(22)
console.log(marks)

console.log(marks.indexOf(20))

console.log(marks.includes(10))
console.log(marks.includes(0))

console.log("********")

SubMarks= marks.slice(2,5)
console.log(SubMarks)

console.log("********")

var sum=0
for(i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)
//reduce filter map

let total=marks.reduce((sum,marks)=>sum+marks)
console.log(total)

console.log("***************")

var scores=[12,13,14,16]
var evenScores=[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//reduce the array using fillter method

let newFilterEvenScores=scores.filter(scores=>scores%2==0)
console.log(newFilterEvenScores)

console.log("***********")

let mappedArray= newFilterEvenScores.map(scores=>scores*3)
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

console.log("****")
//chaining the arrays
var scores=[12,13,14,16]
let newTotalScores=scores.filter(scores=>scores%2==0).map(scores=>scores*3).reduce((sum,val)=>sum+val,0)
console.log(newTotalScores)

console.log("*****")
// sorting the string array
let fruits=['bananna','orange','grappse','apple']
console.log(fruits.sort())
console.log(fruits.reverse())

//sorting the number array

var scores1=[12,003,19,16,1,9]
scores1.sort()
console.log(scores1)
console.log(scores1.sort((a,b)=>a-b))//bubble sort using recursive method


