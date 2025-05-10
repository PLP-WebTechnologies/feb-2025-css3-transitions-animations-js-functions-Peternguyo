// Set up references
const animateBtn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color preference
const savedColor = localStorage.getItem('favColor');
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Save color preference to localStorage and update background
colorPicker.addEventListener('input', () => {
  const chosenColor = colorPicker.value;
  localStorage.setItem('favColor', chosenColor);
  document.body.style.backgroundColor = chosenColor;
});

// Trigger bounce animation on button click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');

  // Remove class after animation ends so it can be triggered again
  setTimeout(() => {
    animateBtn.classList.remove('animate');
  }, 600);
});
