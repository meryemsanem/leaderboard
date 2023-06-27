import './styles/style.css';
import { leaderboard } from './modules/leaderboard';

const showTasks = () => {
  const list = document.querySelector('.list');
  for (let i = 0; i < leaderboard.length; i += 1) {
    const listUsers = document.createElement('div');
    listUsers.classList.add('list-items');
    listUsers.innerHTML = `<div class="list-items">
    ${leaderboard[i].name}: ${leaderboard[i].score}
  </div>
  `;
    list.appendChild(listUsers);
  }
};

showTasks();
