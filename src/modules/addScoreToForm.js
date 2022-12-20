import renderScore from './renderScore.js';
import { isSuccess } from './isErrorIsSuccess.js';

const addScoreToForm = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1222/scores', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  isSuccess();
  renderScore();
};

const addScore = () => {
  const form = document.querySelector('#submit-score');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addScoreToForm();
    e.target.reset();
  });
};

export default addScore;