function showSurprise() {
  const text = document.getElementById('surpriseText');
  text.classList.toggle('hidden');

  // Show confetti only when text becomes visible
  if (!text.classList.contains('hidden')) {
    launchConfetti();
  }
}

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
