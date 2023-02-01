import { postScore } from './api.js';
import { refresh } from './refresh.js';

const submitEventHandler = async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  await postScore(name, score);
  refresh();
  form.reset();
};

export default submitEventHandler;
