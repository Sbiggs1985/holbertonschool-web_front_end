/** @format */

function createStudent() {
  const student = Object.create(studentHogwarts);
  return student;
}

const studentHogwarts = (function () {
  let privateScore = 0;
  let name = null;

  const changeScoreBy = function (points) {
    privateScore += points;
  };

  const setName = function (newName) {
    name = newName;
  };

  const rewardStudent = function () {
    changeScoreBy(1);
  };

  const penalizeStudent = function () {
    changeScoreBy(-1);
  };

  const getScore = function () {
    return `${name}: ${privateScore}`;
  };

  return {
    setName: setName,
    rewardStudent: rewardStudent,
    penalizeStudent: penalizeStudent,
    getScore: getScore,
  };
})();

let harry = createStudent();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = createStudent();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
