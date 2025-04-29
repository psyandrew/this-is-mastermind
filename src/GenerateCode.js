  const generateCode= () => {
    //choices
    const codeRef = ['YLW', 'BLU', 'ORG', 'GRN', 'RED', 'VLT', 'BLK', 'WHT']

    let res =[]

    for(let i = 0; i < 4 ; i++) {
      res.push(codeRef[Math.floor(Math.random() * codeRef.length)])
    }

    return res

  }


export default generateCode