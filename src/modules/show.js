const show = (game) => {
  const tbody = document.getElementsByTagName('tbody')[0];
  const gameElement = document.createElement('tr');
  gameElement.innerHTML = `
    <td>${game.user}: ${game.score}</td>
  `;
  tbody.appendChild(gameElement);
};

export default show;
