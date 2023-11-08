const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');

        const myQuestions = [
            {
                question: "Qual e a capital do Brasil?",
                answers: {
                    a: "Brasilia",
                    b: "rio de janeiro",
                    c: "Goias",
                    d: "Espirito Santo"
                },
                correctAnswer: "a"
            },
            {
                question: "Quantos estados o Brasil tem?",
                answers: {
                    a: "17",
                    b: "26",
                    c: "27",
                    d: "23"
                },
                correctAnswer: "b"
            },
            {
                question: "Quando os Portuguê chegaram ao Brasil? ",
                answers: {
                    a: "1400",
                    b: "1558",
                    c: "1500",
                    d: "1600"
                },
                correctAnswer: "c"
            },
          
        ];
        
        function showQuiz() {
            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answers = [];
                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
                quizContainer.innerHTML += `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`;
            });
        }

        function getResults() {
            let numCorrect = 0;
            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = quizContainer.querySelectorAll('.answers')[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                if(userAnswer === currentQuestion.correctAnswer){
                    numCorrect++;
                }
            });
            resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length} perguntas.`;
        }

        showQuiz();