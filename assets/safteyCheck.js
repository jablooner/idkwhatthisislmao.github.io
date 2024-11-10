(function() {
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'A' && target.target === '_blank') {
            event.preventDefault();
            alert("Something you did just caused another tab to open, but luckily I am smart and I made this safety check thing so it like didn't open it.");
        }
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            const href = target.getAttribute('href');
            if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                const newWindow = window.open(href, '_blank');
                if (newWindow) {
                    newWindow.close();
                    alert("Something you did just caused another tab to open, but luckily I am smart and I made this safety check thing so it like didn't open it.");
                }
            }
        }
    });
})();
