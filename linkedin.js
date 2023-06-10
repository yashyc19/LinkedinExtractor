// // imports

// // declarations
const mainContainer = document.getElementById('main-container');

// // functions
export function fillLinkedIn() {
    console.log("Filling LinkedIn");
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        var url = currentTab.url;
        console.log("Current page url is " + url);
        if (url.includes("linkedin.com")) {
            console.log("Current page is LinkedIn");
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                var currentTab = tabs[0];
                if (url.includes("linkedin.com/in/")) {
                    console.log("Filling LinkedIn profile page");
                    mainContainer.innerHTML = `
                    <div class="card" style="width: 18rem;" id="linkedin-scraper">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Hi, User</h5>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-outline-danger" id="logout-user">Logout</button>
                                </div>
                            </div>
                            <hr class="hr" />
                            <div class="p-3 text-start">
                                <div id="linkedin-details">
                                    <div class="mb-3">
                                        <h5 class="card-title" id="linkedin-title">Profile title</h5>
                                        <p class="card-text" id="linkedin-title-name">${currentTab.title}</p>
                                    </div>
                                    <div>
                                        <h5 class="card-title" id="linkedin-url">Profile Url</h5>
                                        <p class="card-text" id="linkedin-url-link">${currentTab.url}</p>
                                    </div>
                                </div>
                                <div class="mt-4 row">
                                    <button type="button" class="btn btn-outline-primary col me-1" id="save-as-lead-btn">Lead</button>
                                    <button type="button" class="btn btn-outline-primary col ms-1" id="save-as-company-btn">Company</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
                else if (url.includes("linkedin.com/company/")) {
                    console.log("Filling LinkedIn company page");
                    mainContainer.innerHTML = `
                    <div class="card" style="width: 18rem;" id="linkedin-scraper">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Hi, User</h5>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-outline-danger" id="logout-user">Logout</button>
                                </div>
                            </div>
                            <hr class="hr" />
                            <div class="p-3 text-start">
                                <div id="linkedin-details">
                                    <div class="mb-3">
                                        <h5 class="card-title" id="linkedin-title">Company title</h5>
                                        <p class="card-text" id="linkedin-title-name">${currentTab.title}</p>
                                    </div>
                                    <div>
                                        <h5 class="card-title" id="linkedin-url">Company Url</h5>
                                        <p class="card-text" id="linkedin-url-link">${currentTab.url}</p>
                                    </div>
                                </div>
                                <div class="mt-4 row">
                                    <button type="button" class="btn btn-outline-primary col me-1" id="save-as-lead-btn">Lead</button>
                                    <button type="button" class="btn btn-outline-primary col ms-1" id="save-as-company-btn">Company</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
                else {
                    console.log("Not a Linkedin profile or company page");
                    mainContainer.innerHTML = `
                    <div class="card" style="width: 18rem;" id="linkedin-scraper">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="card-title">Hi, User</h5>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-outline-danger" id="logout-user">Logout</button>
                                </div>
                            </div>
                            <hr class="hr" />
                            <div class="p-3 text-start">
                            <div id="linkedin-details">
                            <div class="alert alert-warning d-flex align-items-center" role="alert">
                                <div>
                                    Alert: Not a LinkedIn profile or company page
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>`;
                }
            });
        }
        else {
            console.log("Current page is not LinkedIn");
            mainContainer.innerHTML = `
            <div class="card" style="width: 18rem;" id="linkedin-scraper">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col">
                            <h5 class="card-title">Hi, User</h5>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-danger" id="logout-user">Logout</button>
                        </div>
                    </div>
                    <hr class="hr" />
                    <div class="p-3 text-start">
                    <div id="linkedin-details">
                    <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <div>
                            Error: Not a LinkedIn page
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>`;
        }
    });
}
