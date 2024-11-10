window.onload = function() {
            const iframe = document.getElementById('iframe');
            console.log("safety check 2 loaded iframe ohio SIGMA")
            iframe.onload = function() {
                const iframeWindow = iframe.contentWindow;

                iframeWindow.open = function(url) {
                    alert("BRuh");
                    iframe.src = url;  
                };
            };
        };
