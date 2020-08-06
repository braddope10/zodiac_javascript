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
        // debugger;
        let usersDiv = document.getElementById("users-container")

        usersDiv.innerHTML +=
        `
        <div id="list-user" data-id=${this.id}>
        <h3> ${this.name}, here are your details: </h3>
            <ul>
                <li> Username: ${this.username} </li><br>
                <li> Birthday: ${this.month}/${this.day} </li>
                <div id="sign-container" data-id=${this.id}> </div>
            </ul>
        </div>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete ${this.name}</button>
        `
    }
}