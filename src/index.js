import './index.css';
import getData from './modules/getData.js';
import addScore from './modules/addScoreToForm.js';
import { close } from './modules/isErrorIsSuccess.js';

addScore();
close();
document.querySelector('.btn-refresh').addEventListener('click', () => {
    getData();
});

window.addEventListener('load', () => {
    getData();
});