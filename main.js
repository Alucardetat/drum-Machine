// Setup 'tick' and 'tock' sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
// Load snare drum and hi-hat similarly

// Global variable to keep track of metronome count
let count = 0;

// This function is called every 600ms
function update() {
    count++;

    const metronomeCount = (count % 4) + 1;

    const metronomeCheckbox = document.querySelector('#metronome');
    const kickDrumCheckbox = document.querySelector('#kick-drum');
    const kickDrumTimingInput = document.querySelector('#kick-drum-timing');
    // Get snare drum and hi-hat checkboxes and timing inputs similarly

    if (metronomeCheckbox.checked) {
        if (metronomeCount === 4) {
            tock.play();
        } else {
            tick.play();
        }
    }

    if (kickDrumCheckbox.checked && Number(kickDrumTimingInput.value) === metronomeCount) {
        kickDrum.play();
    }
    // Play snare drum and hi-hat similarly

    // Update metronome count on the page
    updateMetronomeCount(metronomeCount);
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

// Function to update the metronome count on the page
function updateMetronomeCount(count) {
    const metronomeCountElement = document.querySelector('.metronome-count');
    metronomeCountElement.innerText = count;
}
