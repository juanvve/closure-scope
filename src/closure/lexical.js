const myGlobal = 0

function outerFunction() {
  const myOuter = 1

  console.log(myGlobal)

  function innerFunction() {
    const myInner = 2

    console.log(myGlobal, myOuter)

    function innerMostFunction() {

      console.log(myGlobal, myOuter, myInner)

    }
    innerMostFunction()
  }

  innerFunction()
}

outerFunction()