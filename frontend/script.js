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
