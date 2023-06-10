// declarations
const mainContainer = document.getElementById('main-container');

// functions
export function displayLoginForm() {
    mainContainer.innerHTML = `
    <div class="card" style="width: 18rem;" id="entryLogin">
        <div class="card-body">
            <h5 class="card-title">Hey there</h5>
            <p class="card-text">To get started, please login ...</p>
            <hr class="hr" />
            <form id="loginForm">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="example@email.com">
                <div id="emailHelp" class="form-text">Please use your company email to login.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword">
            </div>
            <button type="submit" class="btn btn-primary" id="loginButton">Submit</button>
            </form>
        </div>
    </div>`;
}
