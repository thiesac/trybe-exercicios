// A partir do objeto yearSeason, desestruture as estações do ano e espalhe-as em um array de meses do ano

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const months = { ...winter, ...spring, ...summer, ...autumn }
console.log(months);