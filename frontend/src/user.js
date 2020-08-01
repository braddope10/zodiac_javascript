class User{
    constructor(id, name, username, email, bday, sign_id){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.bday = bday;
        this.sign_id = sign_id;
    }
    
    renderUser() {
        let usersDiv = document.getElementById("users-container")
        usersDiv.innerHTML +=
        `
        <ul>
            <h3>${this.name}, you are a Leo </h3>
            <li>Name: ${this.name} - Username: ${this.username}</li>
        </ul>
        `
    }
}