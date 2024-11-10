window.onload = function() {
            const iframe = document.getElementById('myIframe');
            
            // Listen for changes inside the iframe's content
            iframe.onload = function() {
                const iframeWindow = iframe.contentWindow;

                // Override window.open() within the iframe
                iframeWindow.open = function(url) {
                    alert("BRuh");
                    iframe.src = url;  // Change the iframe's src instead of opening a new window
                };
            };
        };
