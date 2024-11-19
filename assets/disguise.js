
  document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const redirectUrl = "/pages/entry.html"; 

    document.querySelectorAll('.icon.icon-generic').forEach(element => {
      element.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
          window.location.href = redirectUrl;
        }
      });
    });
  });
