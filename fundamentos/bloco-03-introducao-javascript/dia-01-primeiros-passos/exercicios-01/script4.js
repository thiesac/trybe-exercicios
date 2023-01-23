const angle1 = -90;
const angle2 = 45;
const angle3 = 45;
const sum = angle1 + angle2 + angle3;

if (sum === 180) {
  true;
} else if (sum >= 0 && sum < 180) {
  false;
} else if (sum > 180) {
  false;
}

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("O ângulo precisa ter valor positivo.");
}
