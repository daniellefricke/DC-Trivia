// AM: Nice! Your code is really concise and clocks in at under 80 lines, comments included!
/*
Set these up as an array object with 2 keys (question & answer).
Envoke a function that takes the input and evaluates it aganst the answer
Add points when player is correct
Prompt a total after 10 questions
*/
// AM: Think about how you could re-organize all your code into an object(s) or class(es)
$(document).ready(function () {

  var clickCounter = 0;
  var intClickCounter = -1;
  var pointsTotal = 0;
  var pointsCorrect = 10;


//questions
  let questions = [
    {que: 'Metro collects around 250 lost items every month', answer: "false", backup: 'Metro collects around 1,000 to 1,200 lost items a month!'},
    {que: 'There is no J Street', answer: "true", backup: 'This is true! There is no such thing as a J street in DC.'},
    {que: 'Georgetown was incorporated into DC in 1871', answer: "true", backup: 'This is true!'},
    {que: 'DC residents drink more wine per capita than any other state', answer: "true", backup: 'This is true! Cheers!'},
    {que: 'There is a sunken ship beneath the Capitol building', answer: "false", backup: 'This is false. There is an empty crypt beneath the Capitol!'},
    {que: 'Three alligators have lived at the White House.', answer: "true", backup: 'This is true! John Quincy Adams had one and Herbert Hoover had a son with two.'},
    {que: 'DC residents could vote for President since only 1961', answer: "true", backup: 'This is true! DC had no representation in the Senate until 1961'},
    {que: 'There is an underground private subway that connects the Capitol building with the White House', answer: "false", backup: 'This is false! There is a subway but it connects the Capitol with House and Senate office buildings, not the White House.'},
    {que: 'The Library of Congress is the biggest library in the world', answer: "true", backup: 'This is true! It has more than 162 million objects in its collection'},
    {que: 'President Roosevelt started the baseball tradition of the 7th inning stretch in DC.', answer:"false", backup: 'This is false. President Taft started the trend. He stood up to stretch at a game and everyone around him thought he was leaving, so out of respect they stood too. Now you have the 7th inning stretch!'},
    {que: 'Press restart button below to play again!'}
  ]

  var output = questions[clickCounter].que;
  var currentQuestion = [];
  $(".appfield .qwindow").text(output)
  // console.log(output)
  // console.log(questions[0].backup)
  $(".appfield .go").click(function() {
    // AM: Isn't `.keypress` an event listener? If so, it's going to need some arguments...
    $(".appfield .answerfield").keypress
      clickCounter++
      output = questions[clickCounter].que;
      $(".appfield .qwindow").text(output)
      //console.log(output)
      //console.log(questions[clickCounter].backup)
      })

//evaluat answer and award points
  $(".appfield .go").click(function() {
    // AM: Isn't `.keypress` an event listener? If so, it's going to need some arguments...
    $(".appfield .answerfield").keypress
    // AM: Can you elaborate on the purpose of the two click counters? Might help shed some light on the issue you mentioned in your project submission. You can leave a comment on this PR.
    intClickCounter++
    var currentAnswer = questions[intClickCounter].answer;
    var userAnswer = $(".appfield .answerfield").val();
    //protect userAnswer - convert to lowercase
    var userAnswerClean = userAnswer.toLowerCase();
      // AM: Remember to remove console.log statements from your final submission. Assume potential employers will be looking at this!
      // AM: If you want to keep these debugging statements, consider putting them in a separate branch.
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
// AM: How would you do this without using `location.reload()`?
// AM: What would you need to show/hide? What data values would you need to reset/adjust?
$(".appfield .restart").click(function() {
  location.reload();
})
})
