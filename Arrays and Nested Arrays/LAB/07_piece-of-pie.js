function pieceOfPie(pieFlavorsArr, firstFlavor, secondFlavor) {
  
    let indexFirstFlavor = pieFlavorsArr.indexOf(firstFlavor);
    let indexSecondFlavor = pieFlavorsArr.indexOf(secondFlavor);
    let result = pieFlavorsArr.slice(indexFirstFlavor, indexSecondFlavor + 1);
    console.log(result)
  }
pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie', 'Lemon Meringue Pie')
