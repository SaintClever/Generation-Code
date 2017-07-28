function submitAnswers() {
  var total = 5;
  var score = 0;

  // Get User input

  // the below is a grabs the form named quizForm and the value of the named inputs in quizForm
  // a variable named q1 = the dom element, form named quizForm, with an input name of q1, get the value of q1, q2, q3, q4, q5
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  // Validation
  for(i = 1; i <= total; i++){
    if(eval('q' + i) == null || eval('q' + i) == '') {
      alert('You missed question ' + i);
      return false;
    }
  }

  // Set Correct Answers
  var answers = ["b", "a", "d", "b", "d"];

  // Check Answers
  for(i = 1; i <= total; i++) {
    if(eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Display Results
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>'
  alert('You scored ' + score + ' out of ' + total);

  return false;
}