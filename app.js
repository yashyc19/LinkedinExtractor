// imports
import { displayLoginForm} from "./login.js";
import { fillLinkedIn } from "./linkedin.js";


// declarations

// functions
function checkLogin() {
    chrome.storage.sync.get("loggedIn", (data) => {
        console.log("Login status is " + data.loggedIn);
        if (data.loggedIn == true) {
            console.log("User is logged in");
            fillLinkedIn();
        }
        else {
            console.log("User is logged out");
            displayLoginForm();
        }
    });
}



// function calls

chrome.storage.sync.set({ loggedIn: true }).then(() => {
    console.log("Login status changed");
});
checkLogin();