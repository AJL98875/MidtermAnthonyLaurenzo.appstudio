

let animals = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]

let newAnimal = prompt("Enter the name of a flying animal")

var lowerCaseNewAnimal = newAnimal.toLowerCase();

animals.push(lowerCaseNewAnimal)

    alert(`The Last Animal is ${animals.slice(-1)}`)
    


