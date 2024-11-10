(function() {
    const originalOpen = window.open;

    window.open = function() {
        alert("Something you did just caused another tab to open, but luckily I am smart and I made this safety check thing so it like didn't open it");
        
        return undefined;
    };
})();
