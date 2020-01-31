(function(){
  //const quizContainer = document.getElementById('quiz');
  //const resultsContainer = document.getElementById('results');
  //const submitButton = document.getElementById('submit');
  var count=0;
  var score=0;
  const button = document.getElementById('button');
  const myQuestions = [
    {
      question: "What is 1+1?",
      answers: {
        a: "0",
        b: "1",
        c: "2"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the first President of the United States?",
      answers: {
        a: "Abraham Lincoln",
        b: "George Washington",
        c: "Benjamin Franklin"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the first pokemon?",
      answers: {
        a: "Bulbasaur",
        b: "Rhydon",
        c: "Mew",
        d: "Arceus",
        e: "Trick Question"
      },
      correctAnswer: "e"
    }
  ];

  function buildQuestion(){
    // variable to store the HTML output
    const output = [];
    const answers= [];
    for(letter in myQuestions[count].answers){

      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${count}" value="${letter}">
          ${letter} :
          ${myQuestions[count].answers[letter]}
        </label>`
      );
    }
    console.log(answers);
    output.push(
      `<div class="question"> <h2>${count+1}. ${myQuestions[count].question}</h2> </div>
      <div class="answers"> ${answers.join('<br>')} </div>`
    );
    document.getElementById("questionText").innerHTML = output.join('');
    console.log(output);
    console.log("count: "+count);
  }
  function next(){
    //check correctness
    const quizContainer=document.getElementById("questionText");
    const answerContainers = quizContainer.querySelector('.answers');
    const selector = `input[name=question${count}]:checked`;
    console.log("selector: "+selector);
    const userAnswer = (answerContainers.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === myQuestions[count].correctAnswer){
      // add to the number of correct answers
      score++;
    }

    if(count>=myQuestions.length-1){//end
      document.getElementById("questionText").innerHTML = '';
      document.getElementById("button").remove();
      document.getElementById("score").innerHTML='Final Score: '+score+'/'+myQuestions.length;
      console.log("final score: "+score);
    }
    else{//serve next question
      count++;
      buildQuestion();
      console.log("score: "+score);
    }
  }

  buildQuestion();
  button.addEventListener('click', next);
})();
