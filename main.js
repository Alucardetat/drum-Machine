const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');

let count = 0;

function update() {
  count++;
  const metronomeCount = (count % 4) + 1;

  const metronomeCheckbox = document.querySelector('#metronome');
  const kickDrumCheckbox = document.querySelector('#kick-drum');
  const snareDrumCheckbox = document.querySelector('#snare-drum'); // Added
  const hiHatCheckbox = document.querySelector('#hi-hat'); // Added

  const kickDrumTimingInput = document.querySelector('#kick-drum-timing');
  const snareDrumTimingInput = document.querySelector('#snare-drum-timing'); // Added
  const hiHatTimingInput = document.querySelector('#hi-hat-timing'); // Added

  if (metronomeCheckbox.checked) {
    playMetronomeSound(metronomeCount);
  }

  if (kickDrumCheckbox.checked && Number(kickDrumTimingInput.value) === metronomeCount) {
    kickDrum.play();
  }

  if (snareDrumCheckbox.checked && Number(snareDrumTimingInput.value) === metronomeCount) {
    snareDrum.play();
  }

  if (hiHatCheckbox.checked && Number(hiHatTimingInput.value) === metronomeCount) {
    hiHat.play();
  }

  updateMetronomeCount(metronomeCount);
}

function playMetronomeSound(metronomeCount) {
  if (metronomeCount === 4) {
    tock.play();
  } else {
    tick.play();
  }
}

function setupUpdate() {
  setInterval(update, 600);
}

setTimeout(setupUpdate, 300);

function updateMetronomeCount(count) {
  const metronomeCountElement = document.querySelector('.metronome-count');
  metronomeCountElement.innerText = count;
}
