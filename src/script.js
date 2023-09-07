// Select DOM elements
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let startTime = 0; // Initialize the timer at 0 seconds
let isRunning = false;

// Function to format time as MM:SS
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display with the current time
function updateDisplay() {
    minutesDisplay.textContent = formatTime(Math.floor(startTime / 60));
    secondsDisplay.textContent = formatTime(startTime % 60);
}

// Start the timer
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'Pause';
        timerInterval = setInterval(() => {
            startTime++;
            updateDisplay();
        }, 1000);
    } else {
        isRunning = false;
        startButton.textContent = 'Resume';
        clearInterval(timerInterval);
    }
});

// Stop the timer
stopButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        startButton.textContent = 'Start';
        clearInterval(timerInterval);
    }
});

// Reset the timer
resetButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        startButton.textContent = 'Start';
        clearInterval(timerInterval);
    }
    startTime = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();
