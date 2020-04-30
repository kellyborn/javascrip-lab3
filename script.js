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
    let newObject = { name: newName, score: newScore, date: newDate, passed: newScore >= 60 };
    array.push(newObject);
}
addScore(scores, "Jake", 55, "2020-02-14");
console.log(scores);


//3. Declare a function named deleteScoreByIndex
const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
}
// deleteScoreByIndex(scores, 0);
// console.log(scores);

//4. Declare a function named deleteScoreByName
const deleteScoreByName = (array, name) => {
    const index = array.findIndex(person => {
        return person.name === name;
    });
    array.splice(index, 1);
}

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

//change an object
let human = {
    name: "Bob",
    age: 6,
};
human.age = 7;



//6. Declare a function named findScoreByName 
const findScoreByName = (array, name) => {
    return array.find((score) => {
        return score.name === name;
    });
};
console.log(findScoreByName(scores, "Jill")); //returns an object

//7. Declare a function named findLowestScore
const findLowestScore = (array) => {
    let currentlowestScore = array[0];
    array.forEach((score) => {
        if (score.score < currentlowestScore.score) {
            currentlowestScore = score;
        }
    })
    return currentlowestScore;
};
console.log(findLowestScore(scores));

//8. Declare a function named findAverageQuizScore
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let obj of array) {
        currentScores += obj.score;
    }
    return currentScores / array.length;
}
console.log(findAverageQuizScore(scores));

//9
//come back to
const filterScores = (array, value) => {
    return array.filter((obj) => {
        return obj.name === value;
    });
};
console.log(filterScores(scores, "Joe"));

//10. Declare a function named sortScoresAsc
const sortScoresAsc = (array) => {
    return array.sort((a, b) => {
        return a.score < b.score
    });
}
console.log(sortScoresAsc(scores));