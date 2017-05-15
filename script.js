/*facts about DC
Which 2 presidents are buried at Arlington? Kennedy & Taft
DC's official bird: Wood Thrush
What house, formerly owned by a member of the Lincoln Cabinet, is now the guesthouse of the executive branch? The Blair house
What festival attracts over a million visitors to DC every year: Cherry Blossom festival
How large is the landmass of DC? 100sq miles
Official Flower: American Beauty Rose
What river runs by washington DC? Potomac
What is the name of the statue on top of the capitol building? Freedom
DC is between which two states? MD and VA
When was Georgetown incorporated into DC? 1871
DC's football team: Redskins
How many daVinvi's are at the national art gallery? 1
Who attacked and burned the white house and in what year? British 1914
First president to live in the white house? John Adams
Tree of DC? Scarlett Oak
Motto of DC? Justitia Omnibus
What was the capital called before it was called DC? Federal City

Set these up as an array object with 2 keys (question & answer).
 Envoke a function that takes the input and evaluates it aganst the answer
Add points when player is correct
Prompt a total after 10 questions
*/

$(document).ready(function () {
console.log("Hello");

//event handlers
$("#big .qwindow").click(function(currentQuestion) {

let questions = [
  {que: 'Kennedy and Taft are the only two presidents buried at Arlington National Cemetary', answer: 'true'},
  {que: 'The Liberty Rose is the official flower of DC', answer: 'false'},
  {que: 'Georgetown was incorporated into DC in 1871', answer: 'true'},
  {que: 'DCs pro football team is the Redskins', answer: 'true'},
  {que: 'Thomas Jefferson was the first president to live in the White House', answer: 'false'},
  {que: 'DCs landmass is 100 square miles', answer: 'true'},
  {que: 'The official tree of DC is the Scarlett Oak', answer: 'true'},
  {que: 'The official motto of DC is Ab Ordine Libertas - from order comes freedom', answer: 'false'},
  {que: 'Before being called The District of Columbia, DC was called Federal City', answer: 'true'},
  {que: 'The official bird of DC is the Bald Eagle', answer:'false'}
]

//show and change questions
  var currentQuestion = questions.que[0];
  for(let i=0; i<questions.length; i++) {
    console.log("Check out the questions!")
  }
})

//event handler for submit & functiom to eval answer against questions




//function to add, maintain, and display score




//prompt after 10 questions with score & response

});
