
const express = require('express');
const path  =require('path');

const compliments = [
  'You look nice today',
  'Fancy seeing you here',
  'Have you been working out?',
  'Hello, good looking.',
  'I would share my dessert with you.',
  'I feel the need to impress you.',
  'You could probably lead a rebellion.',
  'Being awesome is hard, but you\'ll manage.',
  'My mom always asks me why I can\'t be more like you',
  'The Force is strong with you.',
  'You complete me',
  'Glorious things are waiting for you.',
  'You\'re crazy hygienic, always brushing and flossing',
  'Your eyes are hella disarming',
  'You have a great sense of humor - that\'s personality',
  'You\'re a good listener even when you\'re exhausted'
]

function getRandomCompliment(){
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/compliment', (req, res) => {
  res.json({compliment: getRandomCompliment()}).end();
})

app.use('/public', express.static('./public'));
app.listen(3000);
