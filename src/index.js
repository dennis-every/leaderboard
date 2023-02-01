import './styles.css';
import submitEventHandler from './modules/submit.js';
import { refresh, refreshEventHandler } from './modules/refresh.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshEventHandler);
submitBtn.addEventListener('click', submitEventHandler);

window.onload = () => {
  refresh();
};
