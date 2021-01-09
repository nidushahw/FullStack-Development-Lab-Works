function openTabs() {
    const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"];

    for (let i = 0; i < siteUrls.length; i++) {
        var page = window.open(siteUrls[i]);
    }
}

openTabs();
