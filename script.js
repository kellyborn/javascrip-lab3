// //Declare a variable named scores that is initialized to an array with the following
// objects

let scores = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

//2. Declare a function named addScore
const addScore = (array, newName, newScore, newDate) => {
    let newObject = { name: newName, score: newScore, date: newDate, passed: score >= 60 };
    array.push(newObject);
}
//addScore(scores, "Jake", 55, "2020-02-14");
//console.log(scores);


//3. Declare a function named deleteScoreByIndex
//index is position, 1 is how many to delete
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1)
}
// deleteScoreByIndex(scores, 0);
// console.log(scores)

//4. Declare a function named deleteScoreByName
const deleteScoreByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name
    });
    array.splice(index, 1);
}
//deleteScoreByName(scores, "Jane")
//console.log(scores)

//5. Declare a function named editScore
const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true;
    } else {
        passed = false;
    }
    array[index].score = score;
    array[index].passed = passed;
}
// editScore(scores, 0, 40);
// console.log(scores);

//Another option
// const editScore = (array, index, score) => {
//     array[index].score = score;
//     array[index].passed = score >= 60;
// }

//editScore(scores, 2, 99)
//console.log(scores)


//change an object
let human = {
    name: "Bob",
    age: 6,
};
human.age = 7;



//6. Declare a function named findScoreByName 
const findScoreByName = (array, name) => {
    let foundPerson = array.find(person => {
        return person.name === name;
    })
    return foundPerson;
}
//console.log(findScoreByName(scores, "Jill")) //returns an object

//7. Declare a function named findLowestScore
const findLowestScore = (array) => {
    let currentlowestScore = array[0];
    array.forEach(person => {
        if (person.score < currentlowestScore.score) {
            currentlowestScore = person;
        }
    })
    return currentlowestScore.score;
}
//console.log(findLowestScore(scores));

//8. Declare a function named findAverageQuizScore
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let obj of array) {
        currentScores += obj.score;
    }
    return currentScores / array.length;
}
//console.log(findAverageQuizScore(scores));

//9
//come back to
const filterScores = (array, property, value) => {
    return array.filter(person => {
        return person[property] === value;
    })
}
//console.log(filterScores(scores, "passed"));

//10. Declare a function named sortScoresAsc
const sortScoresAsc = (array) => {
    return array.sort((a, b) => {
        return a.score < b.score ? 1 : -1
    });
}
//console.log(sortScoresAsc(scores));

//11.
const sortScoresDsc = (array) => {
    return array.sort((a, b) => {
        //b should come before
        if (a.score > b.score) {
            return -1;
        } else if (a.score < b.score) {
            return 1;
        } else {
            return 0;
        }
    })
}
