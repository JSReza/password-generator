const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.getElementById("password-form").addEventListener("submit", function(e) {
    e.preventDefault()
    const length = parseInt(document.getElementById("length").value)
    let passwordOne = generatePassword(length)
    let passwordTwo = generatePassword(length)
    document.getElementById("password-one").textContent = passwordOne
    document.getElementById("password-two").textContent = passwordTwo
    document.getElementById("message").textContent = "just click to copy"


})

function generatePassword(length){
    if(length >= 4 && length < 21){
    let password = " "

    let firstLetter = Math.floor(Math.random()*25) 
    password += characters[firstLetter]
    length--

    for(let i = 0; i < 2; i++){
        let letter = Math.floor(Math.random()*26) + 25
        password += characters[letter]
        length--
    }

    let firstElement = Math.floor(Math.random()*28)+61
    password += characters[firstElement]
    length--

    while(length > 0){
        let element1 = Math.floor(Math.random()*10) + 51
        password += characters[element1]
        length--

        let element2 = Math.floor(Math.random()*10) + 25
        password += characters[element2]
        length--   
    }

    return password

    }else if (length < 4){
        alert("Length has to be greater than 4");
    }else if (length > 21){
        alert("length is too long")
    }
}

function addCopyOnClick(id) {
    
    const el = document.getElementById(id)
    el.style.cursor = "pointer"
    el.title = "Click to copy"
    el.addEventListener('click', function() {
        const text = el.textContent
        if (text.trim() !== "") {
            navigator.clipboard.writeText(text)
                .then(() => {
                    el.textContent = "Copied!"
                    setTimeout(() => {
                        el.textContent = text
                    }, 1000)
                })
        }
    })
}

addCopyOnClick('password-one')
addCopyOnClick('password-two')