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
        let signDiv = document.getElementById("sign-container")
    
        signDiv.innerHTML +=
        `
        <ul>
            <li> Zodiac: ${this.name} </li>
            <li> Sign: <img src=${this.username}></img width="20px"> </li>
            <li> Description: ${this.description} </li>
        </ul>
        `
    }
}