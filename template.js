(function(){
  const questions=[];
  var index=0;
  const button = document.getElementById('new');
  const table=document.getElementById("questionsBox");
  function addQuestion(){
    var row=table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    const output=[];
    questions.push(//default values
      {
        question: "",
        answers: {
          a: "",
          b: ""
        },
        correctAnswer: "a",
        difficulty:1
      }
    );
    index=questions.length-1;
    cell1.innerHTML=`<p>${questions.length}.${questions[index].question} <input type="text" name="question${index}question"></p>
                    <label>a:<input type="text" name="question${index}a"></label>
                    <br>
                    <label>b:<input type="text" name="question${index}a"></label>
    `;
    cell2.innerHTML=`<label>Number of Choices:<input type="number" name="question${index}" value=2 min=2 step=1></label><br>
                    <label>Correct Choice:<select>
                                      <option value="a">a</option>
                                      <option value="b">b</option>
                                  </select><label><br>
                    <label>Difficulty:<input type="number" name="question${index}" min=1 max=5 step=1 value=1></label>
    `;
  }
  button.addEventListener('click', addQuestion);

})();
