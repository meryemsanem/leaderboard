import './styles/style.css';
import { addNewScore, display } from './modules/leaderboard';

const scores = document.getElementById('list');
const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  scores.innerHTML = '';
  display();
});
addNewScore();
display();
