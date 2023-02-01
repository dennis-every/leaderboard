import { getScores } from './api.js';
import show from './show.js';

export const refresh = async () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
  const games = await getScores();
  games.forEach((game) => {
    show(game);
  });
};

export const refreshEventHandler = (e) => {
  e.preventDefault();
  refresh();
};
