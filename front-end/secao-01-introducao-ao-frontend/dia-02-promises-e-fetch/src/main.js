fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json())
    .then((data) => {
        // console.log(data.length);
        const generateNumber = Math.floor(Math.random() * data.length)
        console.log(generateNumber);
  });