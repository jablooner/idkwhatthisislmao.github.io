window.onload = function() {
    var data = [
        { title: "Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico" },
        { title: "Home - Google Drive", favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" },
        { title: "Home", favicon: "https://www.gstatic.com/classroom/ic_product_classroom_144.png" },
        { title: "Google Slides", favicon: "https://ssl.gstatic.com/docs/presentations/images/favicon-2023q4.ico" },
        { title: "Outlook", favicon: "https://res.public.onecdn.static.microsoft/owamail/20241101001.22/resources/images/favicons/mail-seen.ico" },
        { title: "Untitled document - Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico" },
        { title: "Family Portal", favicon: "https://familyportal.renweb.com/favicon-32x32.png" },
    ];

    var randomIndex = Math.floor(Math.random() * data.length);
    var selected = data[randomIndex];

    document.title = selected.title;
    document.getElementById("favicon").href = selected.favicon;
}
