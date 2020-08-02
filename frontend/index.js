document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
})

const BASE_URL = "http://localhost:3000"

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
        Month: <input type="number" id="day" style="width: 40px" min="1" max="31"> 
        Day: <input type="number" id="month" style="width: 40px" min="1" max="12"><br><br>
        <input type="submit" value="Find Your Zodiac Sign">
    </form>
    `

}

function userFormSubmit() {
    
}






// DELETE - Delete a user