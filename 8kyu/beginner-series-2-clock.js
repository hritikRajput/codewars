// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

function past(h, m, s){
    //#Happy Coding! ^_^
    
    let ans =0
    ans = ((h*3600)+(m*60)+(s))*1000
    return ans
  }