const unSortedArray = [2,1,7,3,8,9,4,3];
function findSecondLargest(array){
    let firstLargestNum = array[0];
    let secondLargestNum = null;
    for(let i=1;i<array.length;i++){
        if(array[i]>firstLargestNum){
            secondLargestNum = firstLargestNum;
            firstLargestNum = array[i]
        }else if(secondLargestNum === null || (array[i]>secondLargestNum&&array[i]!==firstLargestNum)){
            secondLargestNum = array[i]

        }
    }
    return secondLargestNum !== null ? `${secondLargestNum} is the second largest value in the array`: null;
}
console.log(findSecondLargest(unSortedArray))