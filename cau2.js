let arr=[1,3,4,2,5,6,8,7,9]
function tryRemoveFromArray(arr,index){
    if(index>(arr.length-1)){
        return arr
    }
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(i<index){
            result[i]=arr[i]
        }else if(i==index){
            continue
        }else{
            result[i-1]=arr[i]
        }
    }
    return result
}
console.log(tryRemoveFromArray(arr,5))