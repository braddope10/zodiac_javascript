class Sign{
    constructor(id, name, img_src, description){
        this.id = id;
        this.name = name;
        this.img_src = img_src;
        this.description = description;
    }

    addSign(array) {
        array.push(this)
    }

    renderSign() {
        let singsDiv = document.getElementById("users-container")

        singsDiv.innerHTML +=
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