function submitQuiz() {
    const answers = {
        question1: 'Paris',
        question2: '4'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');

    const userAnswers = {
        question1: form.querySelector('input[name="question1"]:checked'),
        question2: form.querySelector('input[name="question2"]:checked')
    };

    if (userAnswers.question1 && userAnswers.question1.value === answers.question1) {
        score++;
    }

    if (userAnswers.question2 && userAnswers.question2.value === answers.question2) {
        score++;
    }

    document.getElementById('result').textContent = `You scored ${score} out of 2.`;
}
