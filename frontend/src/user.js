class User{
    constructor(id, name, username, email, day, month, sign_id){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.day = day;
        this.month = month;
        this.sign_id = sign_id;
    }
    
    renderUser() {
        let usersDiv = document.getElementById("users-container")

        usersDiv.innerHTML +=
        `
        <ul>
            <h3> ${this.name}, you are a ${this.sign_id} </h3>
            <li> Username: ${this.username} </li>
            <li> Birthday: ${this.month}/${this.day} </li>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        `
    }
}