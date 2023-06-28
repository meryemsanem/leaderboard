const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/meryemsanemZl4d7IVkemOTTVg2fUdz/scores/';

const scores = document.getElementById('list');

const addNewScore = () => {
  const score = document.getElementById('board');
  score.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const userScore = document.getElementById('score').value;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          score: userScore,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  });
};

const listElements = (user, score) => `<div class="list-items">
  ${user}: ${score}</div>`;
const display = async () => {
  try {
    await fetch(url)
      .then((result) => result.json())
      .then((data) => {
        data.result.forEach((player) => {
          const htmlToAdd = listElements(player.user, player.score);
          scores.insertAdjacentHTML('afterbegin', htmlToAdd);
        });
      });
  } catch (error) {
    console.log(error);
  }
};
export { addNewScore, display };
