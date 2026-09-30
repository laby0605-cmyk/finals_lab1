// Welcome message
alert('Welcome to GradeNest! Please click OK to continue.');

// Gets the elements from the HTML
const evaluationButton = document.getElementById('startButton');
const nameDisplay = document.getElementById('studentName');
const scoreDisplay = document.getElementById('studentScore');
const remarksDisplay = document.getElementById('studentRemark');


// Function used to evaluate the score
function evaluate(score) {

    const numScore = Number(score);

    // Checks if the score is invalid
    if (isNaN(numScore) || numScore <= 0 || numScore > 100) {
        return 'Invalid score';
    }

    if (numScore >= 90) {
        return 'Excellent';
    } else if (numScore >= 75) {
        return 'Passed';
    } else {
        return 'Failed';
    }

}


// Runs when the Start Evaluation button is clicked
evaluationButton.addEventListener('click', () => {

    let nameInput;
    let scoreInput;
    let numScore;

    // Ask for the student's name
    do {
        nameInput = prompt('Enter your Name:', '');

        if (nameInput === null) return;

        if (nameInput.trim() === '') {
            alert('Invalid Input! Name cannot be empty. Please enter your name.');
        }

    } while (nameInput.trim() === '');


    // Ask for the student's score
    do {
        scoreInput = prompt('Enter your Score:', '');

        if (scoreInput === null) return;

        numScore = Number(scoreInput);

        if (scoreInput.trim() === '') {
            alert('Invalid Score! Please Enter a Score');
        } else if (isNaN(numScore)) {
            alert('Invalid Score! Please Input Numbers Only');
        } else if (numScore <= 0) {
            alert('Invalid Score! Please Input Positive Numbers Only');
        } else if (numScore > 100) {
            alert('Invalid Score! Please Input Numbers Below 100 Only');
        }

    } while (
        scoreInput.trim() === '' ||
        isNaN(numScore) ||
        numScore <= 0 ||
        numScore > 100
    );


    // Ask if the user wants to continue
    const proceedConfirm = confirm('Do you want to Proceed?');

    if (!proceedConfirm) {
        return;
    }


    // Evaluate the score
    const remarks = evaluate(scoreInput);


    // Display the result on the webpage
    nameDisplay.textContent = nameInput;
    scoreDisplay.textContent = scoreInput;
    remarksDisplay.textContent = remarks;

});