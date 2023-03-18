const shuffleBtn = document.getElementById('suffle-btn');
const heroName = document.getElementById('hero-name');
const heroImg = document.getElementById('img-hero');
const maxNumber = 731;
const generateNumber = () => Math.floor(Math.random() * maxNumber);
const URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/';

const getHero = () => {
  const shuffledId = generateNumber();
  fetch(`${URL}${shuffledId}.json`)
    .then((response) => response.json())
      .then(({ name, images }) => {
        heroName.innerHTML = name
        heroImg.src = images.sm
      })
  .catch()

}

shuffleBtn.addEventListener('click', getHero)