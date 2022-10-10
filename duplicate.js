function duplicate(arr1,arr2)
{
    const arr3=[...arr1,...arr2]
    const arr4=[... new Set(arr3)]
    console.log(arr4.sort);
  
    
}

duplicate([1,2,3],[6,5,4,5,4,3,2,1])