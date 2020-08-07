document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
    // fetchSigns();
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
            
            let userSignId = user.sign_id
            console.log(userSignId)

            fetchSign(user);
        }
    })
}

// Fetch /signs/user.sign_id

function fetchSign(user) {
    fetch(`${BASE_URL}/signs/${user.sign_id}`)
    .then(resp => resp.json())
    .then(sign => {

        console.log(sign.name)
        

        let signDiv = document.querySelector(`div#sign-container[data-id="${user.id}"]`)
        signDiv.innerHTML +=
        `
        <ul><br>
            <li>Astrological Symbol: <img src=${sign.img_src} width=15px</img></li><br>
            <li>Zodiac Name:${sign.name}</li><br>
            <li>Description:</li>
            <p>${sign.description}</p>
        </ul>
        `

    })
    
}

// CREATE - Create a new user

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <form onsubmit="setTimeout(function(){window.location.reload();},10);">
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

//

function userFormSubmit() {
    event.preventDefault();

    let name = document.getElementById("name").value

    name = name.charAt(0).toUpperCase() + name.substring(1); // Capitalize index[0] of the 'name' string

    let username = document.getElementById("username").value

    let email = document.getElementById("email").value
    
    let month = document.getElementById("month").value
    
    let day = document.getElementById("day").value

    let sign_id = findZodiacSign(month, day);

    let user = {
        name: name,
        username: username,
        email: email,
        month: parseInt(month),
        day: parseInt(day),
        sign_id: sign_id
    }

    fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
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
    let userId = parseInt(event.target.dataset.id)

    // debugger;

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })
    event.target.previousElementSibling.remove()
    event.target.remove()

    // this.location.reload()
}

// The findZodiacSign function has two arguments: month & day.
// It will use the month and day value gathered in the userFormSubmit function to find the correct value(integer) and assign it to the sign_id variable

function findZodiacSign(month, day) {
    
    if((month == 3 && day >= 21) || (month == 4 && day <= 20)) { //Aries
        return 1;

      } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) { //Taurus
        return 2;

      } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) { //Gemini
        return 3;

      } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) { //Cancer
        return 4;

      } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) { //Leo
        return 5;

      } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) { //Virgo
        return 6;

      } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) { //Libra
        return 7;

      } else if((month == 10 && day >= 23) || (month == 11 && day <= 22)) { //Scoprio
        return 8;

      } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) { //Saggitarius
        return 9;

      } else if((month == 12 && day >= 22) || (month == 1 && day <= 19)) { //Capricorn
        return 10;

      } else if((month == 1 && day >= 20) || (month == 2 && day <= 19)) { //Aquarius 
        // If true, match the sign.id to user.sign_id. That will come in handy when creating the User and for displaying the correct Sign object along with the indicated User objects
        return 11;

      } else if((month == 2 && day >= 20) || (month == 3 && day <= 20)) { //Pisces
        return 12;
      }
}