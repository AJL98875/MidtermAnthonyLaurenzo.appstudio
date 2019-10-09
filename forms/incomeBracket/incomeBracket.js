
let bottomBracket = "8%"

let middleBracket = "15%"

let upperBracket = "25%"

btnSubmit.onclick=function(){

if (Number(inptIncome.value < 30000 )) {
  lblTaxBracket.value = (`With your income of ${inptIncome.value}, you are in a tax bracket of ${bottomBracket}`)
  }

else if (Number(inptIncome.value < 99999 && inptIncome.value > 30000)) {
  lblTaxBracket.value = (`With your income of ${inptIncome.value}, you are in a tax bracket of ${middleBracket}`)
  }

else if (Number(inptIncome.value >= 99999)) {
  lblTaxBracket.value = (`With your income of ${inptIncome.value}, you are in a tax bracket of ${upperBracket}`)
  }
  
}

btnGoAgain.onclick=function() {
  lblTaxBracket.incomeBracket.reset()

}