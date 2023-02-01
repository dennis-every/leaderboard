import { getScores } from './api.js';
import show from './show.js';

export const refresh = () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
  const response = getScores();
  response.then((games) => {
    games.forEach((game) => {
      show(game);
    });
  });
};

export const refreshEventHandler = (e) => {
  e.preventDefault();
  refresh();
};
