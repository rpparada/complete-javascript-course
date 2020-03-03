/////////////////////////////
// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
*/

// respuesta 7
(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    /*
    this.ask = function(){
      var mensaje = questionPrompt.question+' (Opciones:'
      for (i=0; i<this.answers.length;i++) {
        mensaje = mensaje+' '+this.answers[i]
      }
      mensaje = mensaje+')';
      this.respuesta = prompt(mensaje);
    }

    this.check = function(){
      if (this.respuesta == this.answers[questionPrompt.correctAnswer]){
        console.log("Correcto");
      } else {
        console.log("Incorrecto");
      }
    } */
  }
  /*
  2. Create a couple of questions using the constructor
  */

  Question.prototype.ask = function(){
    var mensaje = questionPrompt.question+' (Opciones:'
    for (i=0; i<this.answers.length;i++) {
      mensaje = mensaje+' '+this.answers[i]
    }
    mensaje = mensaje+')';
    this.respuesta = prompt(mensaje);
  }

  Question.prototype.check = function() {
    if (this.respuesta == this.answers[questionPrompt.correctAnswer]){
      console.log("Correcto");
    } else {
      console.log("Incorrecto");
    }
  }

  var q1 = new Question('¿Cómo me llamo?',['Rodrigo','Ema'],1);
  var q2 = new Question('¿Que edad tengo?',[5,42],0);

  /*
  3. Store them all inside an array
  */
  questions = [q1,q2];
  /*
  4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
  */
  questionPrompt = questions[Math.floor(Math.random() * questions.length)]
  /*
  5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
  */
  questionPrompt.ask();
  /*
  6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
  */
  questionPrompt.check();
  /*
  7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
  */
})();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/
