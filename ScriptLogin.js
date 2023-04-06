let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
function logar(){
    let guarda_email = document.getElementById('email').value
    let guarda_senha = document.getElementById('senha').value
    if(procura_usuario(guarda_email, guarda_senha) != -1){
        alert("Bem-vindo!")
        location.assign('home.html')
    }else{
        alert("Esse usuário não existe!")
    }
}
function procura_usuario(guarda_email, guarda_senha) {
    let index = usuarios.findIndex((element) => {
        return element.email == guarda_email && element.senha == guarda_senha
    })
    return index
}

let bot_email = document.getElementById('email')
let bot_senha = document.getElementById('senha')

bot_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        logar();
    }
})
bot_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        logar();
    }
})