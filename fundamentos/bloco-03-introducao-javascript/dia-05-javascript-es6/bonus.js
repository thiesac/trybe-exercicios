const substitute = (person) => {
  const sentence = `Tryber x aqui!`;
  let sentenceWithoutX;
  sentenceWithoutX = sentence.split("x");
  console.log(sentenceWithoutX);
  let newSentence = [];
  newSentence.push(sentenceWithoutX[0]);
  newSentence.push(person);
  newSentence.push(sentenceWithoutX[2]);

  return console.log(newSentence);
  // return newSentence;
};

substitute("Mafalda");
