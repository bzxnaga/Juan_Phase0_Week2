function xo(asddsa){
    let countX = 0;
    let countO = 0;
    for(let i=0; i<asddsa.length;i++){
      if(asddsa[i] === 'x'){
        countX = countX + 1
      }else{
        countO = countO + 1
      }
    }
    if(countX === countO){
      return true
    }else{
      return false
    }
  }
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true


