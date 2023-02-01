import './styles.css';
import submitHandler from './modules/submitHandler.js';
import refreshHandler from './modules/refreshHandler.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshHandler);
submitBtn.addEventListener('click', submitHandler);
