// imports
import { displayLoginForm, doLogin} from "./login.js";
import { fillLinkedIn } from "./linkedin.js";


// declarations
const loginButton = document.getElementById('loginButton');

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

// chrome.storage.sync.set({ loggedIn: false }).then(() => {
//     console.log("Login status changed");
// });
checkLogin();