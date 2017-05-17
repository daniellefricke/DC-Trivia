/*
Set these up as an array object with 2 keys (question & answer).
Envoke a function that takes the input and evaluates it aganst the answer
Add points when player is correct
Prompt a total after 10 questions
*/
$(document).ready(function () {

  var clickCounter = 0;
  var intClickCounter = -1;
  var pointsTotal = 0;
  var pointsCorrect = 10;


//questions
  let questions = [
    {que: 'The Liberty Rose is the official flower of DC', answer: "false", backup: 'This is false. The official flower is the American Beauty Rose.'},
    {que: 'Kennedy and Taft are the only two presidents buried at Arlington National Cemetary', answer: "true", backup: 'This is true!'},
    {que: 'Georgetown was incorporated into DC in 1871', answer: "true", backup: 'This is true!'},
    {que: 'DCs pro football team is the Redskins', answer: "true", backup: 'This is true!'},
    {que: 'Thomas Jefferson was the first president to live in the White House', answer: "false", backup: 'This is false. John Adams was the first president to live in the White House'},
    {que: 'DCs landmass is 100 square miles', answer: "true", backup: 'This is true!'},
    {que: 'The official tree of DC is the Scarlett Oak', answer: "true", backup: 'This is true!'},
    {que: 'The official motto of DC is Ab Ordine Libertas - from order comes freedom', answer: "false", backup: 'This is false! The official DC motto is Justitia Omnibus'},
    {que: 'Before being called The District of Columbia, DC was called Federal City', answer: "true", backup: 'This is true!'},
    {que: 'The official bird of DC is the Bald Eagle', answer:"false", backup: 'This is false. The official bird is the Wood Thrush'},
    {que: 'Press restart button below to play again!'}
  ]

  var output = questions[clickCounter].que;
  var currentQuestion = [];
  $(".appfield .qwindow").text(output)
  // console.log(output)
  // console.log(questions[0].backup)
  $(".appfield .go").click(function() {
      clickCounter++
      output = questions[clickCounter].que;
      $(".appfield .qwindow").text(output)
      //console.log(output)
      //console.log(questions[clickCounter].backup)
      })

//evaluat answer and award points
  $(".appfield .go").click(function() {

    intClickCounter++
    var currentAnswer = questions[intClickCounter].answer;
    var userAnswer = $(".appfield .answerfield").val();
    //protect userAnswer - convert to lowercase
    var userAnswerClean = userAnswer.toLowerCase();
      //console.log("This is the user answer: " + userAnswerClean);
      //console.log(currentAnswer);
      if (userAnswerClean === currentAnswer){
        alert("You are correct! " + questions[intClickCounter].backup);
            //SCORING
            pointsTotal = (pointsTotal + pointsCorrect);
            $(".appfield .points").text(pointsTotal);
            console.log(pointsTotal);
      } else {
        alert("Not quite... " + questions[intClickCounter].backup);
      }
//ADD PROMPT FOR FINAL SCORE
            if(clickCounter === 10 && pointsTotal >= 100 ){
              alert("CONGRATS! You scored " + pointsTotal + " points and got all the questions correct!");
            }else if (clickCounter === 10 && pointsTotal >= 70){
              alert("Your scored " + pointsTotal + " points! That's pretty good!");
            }else if(clickCounter === 10 && pointsTotal >= 0){
              alert("You scored " + pointsTotal + " points. Time to brush up on your DC facts!");
            }
      })

//restart game button = refresh page
$(".appfield .restart").click(function() {
  location.reload();
})
})
