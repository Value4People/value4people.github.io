const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');

function parseEmotions(emotions) {
  return `Emoções encontradas: ${emotions.join(', ')}`;
}

function parseCriminalIntent(criminalIntent) {
  return criminalIntent ?
    'Possui intenção criminosa' :
    'Não possui intenção criminosa';
}

(async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  const res = response.data;

  cardText.textContent = res.tweet;
  emotionsText.textContent = parseEmotions(res.result.emotions);
  criminalIntentText.textContent = parseCriminalIntent(res.result.hasCriminalIntent);
})();
