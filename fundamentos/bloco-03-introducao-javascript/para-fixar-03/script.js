const grade = 59;

if (grade >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
}
else if (grade < 80 && grade >= 60) {
    console.log("Você está na lista de espera.");
}
else {
    console.log("Infelizmente, você reprovou.");
}