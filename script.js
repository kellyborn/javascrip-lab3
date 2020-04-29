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
deleteScoreByIndex(scores, 0);
console.log(scores);

//4. Declare a function named deleteScoreByName
const deleteScoreByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name;
    })
    array.splice(index, 1);
}
