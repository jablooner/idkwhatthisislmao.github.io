window.onload = function() {
    // List of names and corresponding favicons
    var data = [
        { title: "Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico" },
        { title: "Home - Google Drive", favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" },
        { title: "Home", favicon: "https://www.gstatic.com/classroom/ic_product_classroom_144.png" },
        { title: "Physical Science 24-25", favicon: "https://www.gstatic.com/classroom/ic_product_classroom_144.png" },
        { title: "Outlook", favicon: "https://res.public.onecdn.static.microsoft/owamail/20241101001.22/resources/images/favicons/mail-seen.ico" },
        { title: "Untitled document - Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico" },
    ];

    // Randomly select an entry from the list
    var randomIndex = Math.floor(Math.random() * data.length);
    var selected = data[randomIndex];

    // Set the tab title and favicon
    document.title = selected.title;
    document.getElementById("favicon").href = selected.favicon;
}