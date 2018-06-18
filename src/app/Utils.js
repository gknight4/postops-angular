function checkStringArray (arr){
// make sure the array has *one* blank element, at the end, only!
  let change = false ;
  if ((arr.length === 0) || (arr[arr.length - 1] !== "")){
    arr.push("") ;
    change = true ;
  }
  for (let i = 0 ; i < arr.length - 1 ; i++){
    if (arr[i] === "") {
      arr.splice(i, 1);
      change = true ;
    }
  }
//  if(change)arr[0] += " " ;
  return change ;
}


export { checkStringArray }