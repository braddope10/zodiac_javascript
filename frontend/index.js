document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
    // fetchSigns();
})

const BASE_URL = "http://localhost:3000"

let zodiacSignList = []



// let usersDiv = document.getElementById("users-container")

// Fetch /sings index and push them to zodiacSingList's array



// READ - Fetch /users index

function fetchUsers(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.name, user.username, user.email, user.day, user.month, user.sign_id)
            u.renderUser();
            
            let userId = user.id

            console.log(userId)

            fetchSigns(userId);
        }
    })
}

// Fetch /sings index and push them to zodiacSingList's array

function fetchSigns(id) {
    fetch(`${BASE_URL}/signs`)
    .then(resp => resp.json())
    .then(signs => {
        for (const sign of signs){
            let s = new Sign(sign.id, sign.name, sign.img_src, sign.description)
            s.addSign(zodiacSignList);
            s.renderSign();

            matchUserAndSign(id, zodiacSignList);
            // console.log(zodiacSignList)

            // let aries = zodiacSignList[0]
            // console.log(aries.description)
            // let taurus = zodiacSignList[1]

            // let newTaurus = taurus.description

            // console.log(newTaurus);
            // s.renderSign();
            // s.renderUser(); // Users will be able to see the info provided 
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

    name = name.charAt(0).toUpperCase() + name.substring(1); // Capitalize index[0] of the 'name' string

    let username = document.getElementById("username").value

    let email = document.getElementById("email").value
    
    let month = document.getElementById("month").value
    
    let day = document.getElementById("day").value

    let sign_id = findZodiacSign(month, day);


    console.log(month, day)
    
    console.log(sign_id)


    let user = {
        name: name,
        username: username,
        email: email,
        month: parseInt(month),
        day: parseInt(day),
        sign_id: sign_id
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



function matchUserAndSign(id, list) {
    if( id == 1) { //Aries
        let aries = list[0]
        return aries.renderSign();

    } else if( id == 2) { //Taurus
        let taurus = list[1]
        return taurus.renderSign();

    } else if( id == 3) { //Gemini
        let gemini = list[2]
        return gemini.renderSign();

    } else if( id == 4) { //Cancer
        let cancer = list[3]
        return cancer.renderSign();

    } else if( id == 5) { //Leo
        let leo = list[4]
        return leo.renderSign();

    } else if( id == 6) { //Virgo
        let virgo = list[5]
        return virgo.renderSign();

    } else if( id == 7) { //Libra
        let libra = list[6]
        return libra.renderSign();

    } else if( id == 8) { //Scoprio
        let scorpio = list[7]
        return scorpio.renderSign();

    } else if( id == 9) { //Saggitarius
        let saggitarius = list[8]
        return saggitarius.renderSign();

    } else if( id == 10) { //Capricorn
        let capricorn = list[9]
        return capricorn.renderSign();

    } else if( id == 11) { //Aquarius 
        let aquarius = list[10]
        return aquarius.renderSign();

    } else if( id == 12) { //Pisces
        let pisces = list[11]
        return pisces.renderSign();
    }
}

