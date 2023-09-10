const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// Create an array to store game data
let gameState = Array(9).fill(null);

app.get('/api/board', (req, res) => {
  res.json({ board: gameState });
});

app.post('/api/move/:index', (req, res) => {
  const { index } = req.params;

  if (gameState[index] === null) {
    gameState[index] = 'X'; // For future multiplayer
    res.sendStatus(200);
  } else {
    res.status(400).send('Invalid move');
  }
});

// Listen to port if connected or not connected
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});