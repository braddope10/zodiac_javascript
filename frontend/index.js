document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
})

const BASE_URL = "http://localhost:3000"

let zodiacSignList = []

// let user = {
//     name: name,
//     username: username,
//     email: email,
//     month: month,
//     day: day,
//     sign_id: sign_id
// }


// Fetch /sings index and push them to zodiacSingList's array

function fetchSigns() {
    fetch(`${BASE_URL}/signs`)
    .then(resp => resp.json())
    .then(signs => {
        for (const sign of signs){
            let s = new Sign(sign.id, sign.name, sign.img_src, sign.description)
            console.log(s)
            s.addSign(zodiacSignList);
            s.renderUser(); // Users will be able to see the info provided 
        }
    })
}


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


    // In order for the user to be created you must have the all the attributes required
    // Create an if/else statement to append the correct Zodiac sign to the user based on their birth day and month
    // Attach the correct sign_id to the user based on those qualifications

    function findZodiacSign(month, day) {

        let sign = ""

        if((month == 3 && day <= 21) || (month == 4 && day >= 20)) { //Aries
            sign = "1";

          } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) { //Taurus
            sign = "2";

          } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) { //Gemini
            sign = "3";

          } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) { //Cancer
            sign = "4";

          } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) { //Leo
            sign = "5";

          } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) { //Virgo
            sign = "6";

          } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) { //Libra
            sign = "7";

          } else if((month == 10 && day >= 23) || (month == 11 && day <= 22)) { //Scoprio
            sign = "8";

          } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) { //Saggitarius
            sign = "9";

          } else if((month == 12 && day >= 22) || (month == 1 && day <= 19)) { //Capricorn
            sign = "10";

          } else if((month == 1 && day >= 20) || (month == 2 && day <= 19)) { //Aquarius 
            // If true, match the sign.id to user.sign_id. That will come in handy when creating the User and for displaying the correct Sign object along with the indicated User objects
            sign = "11";

          } else if((month == 2 && day >= 20) || (month == 3 && day <= 20)) { //Pisces
            sign = "12";
          }

          signId.push(id)
    }

    let user = {
        name: name,
        username: username,
        email: email,
        month: month,
        day: day,
        // sign_id: sign_id
    }

    console.log(user)

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

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    this.location.reload()
}

