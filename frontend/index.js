document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
})

const BASE_URL = "http://localhost:3000"

// READ - Fetch /users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.name, user.username, user.email, user.bday, user.sign_id)
            u.renderUser();
        }
    })
}



// CREATE - Create a new user

// DELETE - Delete a user