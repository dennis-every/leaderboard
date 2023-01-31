import './styles.css';
import submitHandler from './submitHandler.js';
import refreshHandler from './refreshHandler.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshHandler);
submitBtn.addEventListener('click', submitHandler);
