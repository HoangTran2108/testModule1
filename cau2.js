function tryRemoveFormArray(arr, Y) {
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]==Y){
            arr.splice(arr[i],1)
            newArr = arr
        }else {
            return arr;
        }
    }console.log(newArr)
}
tryRemoveFormArray([1,2,3],2)