let backspaceCount = 0;
let lastBackspaceTime = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    const currentTime = new Date().getTime();
    
    if (currentTime - lastBackspaceTime < 500) {
      backspaceCount++;
    } else {
      backspaceCount = 1;
    }
    
    lastBackspaceTime = currentTime;
    
    if (backspaceCount === 3) {
      window.location.href = 'https://classroom.google.com/';
    }
  }
});
