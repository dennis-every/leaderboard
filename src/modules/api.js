const root = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const baseUrl = `${root}/games/nPhX20R2L0PP0EThfrA4/scores`;

export const getScores = async () => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  return response.result;
};

export const postScore = async (name, score) => {
  const postObj = {
    user: name,
    score,
  };
  const request = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postObj),
  });
  const response = await request.json();
  return response.result;
};
