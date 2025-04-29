  const codeTest = (arr, code) => {

    let ref
      
    let res = arr

    arr = arr.map((el, i) => {if (el === code[i]) {return 'H' } else return el}) ;


    // send when problem is solved 
    if (arr.every(el => el === 'H')) return res.concat(arr)
    //

  

    ref = code.map((el, i) => { if (arr[i] === 'H') { return 'H'} else return el});

    arr = arr.map((el) => {
        if (el === 'H') return el;
        if (ref.includes(el)) {
           ref[ref.indexOf(el)]  = null  
          return 'M'
        };
        return 'F';
        });

    res = res.concat(arr.sort().reverse());

    return res

  }


export default codeTest