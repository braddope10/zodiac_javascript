document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
})

const BASE_URL = "http://localhost:3000"

let zodiacSignList = []

// READ - Fetch /users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.name, user.username, user.email, user.day, user.month, user.sign_id)
            u.renderUser();
        }
    })
}



// CREATE - Create a new user

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <form>
        Name: <input type="text" id="name"><br><br>
        Username: <input type="text" id="username"><br><br>
        Email: <input type="text" id="email"><br><br>
        Month: <input type="number" id="month" style="width: 40px" min="1" max="12"> 
        Day: <input type="number" id="day" style="width: 40px" min="1" max="31"><br><br>
        <input type="submit" value="Find Your Zodiac Sign">
    </form>
    `

    usersForm.addEventListener("submit", userFormSubmit)
}

function userFormSubmit() {
    event.preventDefault();
    let name = document.getElementById("name").value
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    let user = {
        name: name,
        username: username,
        email: email,
        month: month,
        day: day
    }

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json'
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.name, user.username, user.email, user.day, user.month, user.sign_id)
        u.renderUser();
    })
}



// DELETE - Delete a user


function deleteUser() {
    let userId = parseInt(event.target.datset.id)

    fetch(`${BASE_URL}/users/${userID}`, {
        method: "DELETE"
    })

    this.location.reload()
}