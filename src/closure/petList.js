function createPetList(name) {
  let petList = []
  function newPet(pet) {
    petList.push(pet)
    console.log(`${name} your Pets List is: ${petList}`)
  }
  return newPet
}

const myPets = createPetList('Juan')
myPets('Agustin')
myPets('Emilio')
myPets('Geronimo')
myPets('Olivia')