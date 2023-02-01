import { postScore } from './api.js';
import { refresh } from './refresh.js';

const submitEventHandler = (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  const response = postScore(name, score);
  response.then(() => {
    refresh();
  });
  form.reset();
};

export default submitEventHandler;
