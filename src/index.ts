export type Student = {
  name: string;
  points: number;
  passed: boolean;
};

const students: Student[] = [
  { name: "Anna", points: 82, passed: true },
  { name: "Tom", points: 55, passed: false },
  { name: "Eva", points: 91, passed: true },
  { name: "Pavel", points: 40, passed: false },
];

let totalPoints = 0;
let bestScore = 0;
let passedCount = 0;

for (let i = 0; i <= students.length; i++) {
  totalPoints += students[i].points;

  if (students[i].points > bestScore) {
    bestScore = students[i].points;
  }

  if (students[i].passed === true) {
    passedCount++;
  }
}

const average = totalPoints / students.length;

console.log("Celkový součet:", totalPoints);
console.log("Průměr:", average);
console.log("Nejlepší výsledek:", bestScore);
console.log("Počet úspěšných:", passedCount);