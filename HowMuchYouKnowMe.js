var rls = require('readline-sync');

var qsnAnsList = [
  {
    qsnInfo:'---- Here\'s the First question ----\n',
    question:"What is my name?\n",
    answer:"Surya",
  },
  {
    qsnInfo:'------------ Second question ------------\n',
    question:"My favorite movie name?\n",
    answer: "Phir Hera Pheri",
  },
  {
    qsnInfo:'------------ Third question ------------\n',
    question:"Am I a Tea person or a Coffee person\n",
    answer: "Tea"
  },
  {
    qsnInfo:'------------ Forth question ------------\n',
    question:"My favorite sport\n",
    answer: "Cricket"
  },
  {
    qsnInfo:'------------ Fifth question ------------\n',
    question:"My favorite Amine\n",
    answer: "Naruto",
  },
  ];
console.log('Lets Find out how much you know Me\n');
console.log('Here are 5 questions, answer carefully!\n');
console.log('Lets begin then :) \n');
let score = 0;
for(let i = 0;i<5;i++){
  console.log(qsnAnsList[i]["qsnInfo"]);
  var ans = rls.question(qsnAnsList[i]["question"]);
  if(ans.toLowerCase() === qsnAnsList[i]['answer'].toLowerCase()){
    score++;
    console.log('Amazing!! you are correct.')
  } else{
    console.log('Sorry but thats not correct.')
  }
  console.log(`Total Score ${score} / 5 \n`);
}
console.log(`Your final score is ${score} / 5\n`);
// var name = rls.question('What is my name\n');
// console.log(qsnAnsList[1]['question']);