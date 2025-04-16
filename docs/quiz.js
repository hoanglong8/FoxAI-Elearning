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

function generateCertificate(userName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Certificate of Completion', 20, 30);
    doc.text(`This is to certify that ${userName} has completed Unit 1 of the E-learning Course.`, 20, 40);
    doc.save('certificate.pdf');
}

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

    if (score === 2) {
        generateCertificate('John Doe');
    }
}
