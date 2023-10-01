// const highScoresList = document.getElementById("highScoresList");
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// highScoresList.innerHTML= highScores
// //console.log(highScores);
// .map(score => {
// return `<li class="high-score">${score.name} - ${score.score}</li>`;
  
//    // console.log(`<li class ="high-score">${score.name} - ${score.score}</li>`);
// })
// .join("");

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");