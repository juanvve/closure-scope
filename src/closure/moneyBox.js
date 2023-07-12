// function moneyBoxNormal(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// const myMoneyBoxNormal = moneyBoxNormal;
// myMoneyBoxNormal(5); //se declara el valor en 5
// myMoneyBoxNormal(10); //se declara el valor en 10 y no en 15 como se espera que se sume

function moneyBox(name) {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`${name} your MoneyBox have $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox('Juan');
myMoneyBox(500) //Juan your MoneyBox have $500
myMoneyBox(100) //Juan your MoneyBox have $600
myMoneyBox(80)  //Juan your MoneyBox have $680

const IsaMoneyBox = moneyBox('Isa');
IsaMoneyBox(10) //Isa your MoneyBox have $10
IsaMoneyBox(120) //Isa your MoneyBox have $130
IsaMoneyBox(200) //Isa your MoneyBox have $330