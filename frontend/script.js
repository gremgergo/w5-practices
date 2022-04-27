const firstPerson = {
    name: "peter",
    sex: "male"
}

const secondPerson = {
    name: "sara",
    sex: "female"
}

function detectSex(person) {
    console.log(person);
    if (person.sex === "female") {
        return "this person is a female"
    } else if (person.sex === "male") {
        return "this person is a male"   
    }  else {
          return "this persons sex is not female or male"  
    }    
}

console.log(detectSex(firstPerson));

console.log(detectSex(secondPerson));

console.log(detectSex({
    name: "penelope",
    sex: "female2"
}));

// talald meg a legkisebb szamot codewars

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // valamilyen modon elmenti az elso szamot
        // let firstNumber = args[0];
        let smallestNumber = args[0];
        for (let index = 0; index < args.length; index++) {
            // for ciklus elso eleme i, index, kiskutya mi az elso szam
            // i++ nullatol addig szamolunk amig tart a szamsor
            // let currentNumber = args[index] nem kell, roviditunk
            // ha a current number kisebb akkor felulirhatjuk a smallestNumber erteket
            if (/*currentNumber*/args[index] < smallestNumber) {
                smallestNumber = /*currentNumber*/ args[index]
            }// nem szep megoldas returnulni for cikluson belul, mert azzal lezarjuk a ciklust
        }
        return smallestNumber
    }
}
// args.sort meghivhato minden tombon
// arrow function jobb oldalt van a kacsacsor - =<,=> sorrba rendezes