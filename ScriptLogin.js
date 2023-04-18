let usuarios = []
if (localStorage.getItem('cadastrado')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrado'))
function logar(){
    let guarda_Email = document.getElementById('email').value
    let guarda_Senha = document.getElementById('senha').value
    if(procura_usuario(guarda_Email, guarda_Senha) != -1){
        alert("Bem-vindo!")
        location.assign('home.html')
    }else{
        alert("Esse usuário não existe!")
    }
}
function procura_usuario(guarda_Email, guarda_Senha) {
    let index = usuarios.findIndex((element) => {
        return element.email == guarda_Email && element.senha == guarda_Senha
    })
    return index
}

let bot_Email = document.getElementById('email')
let bot_Senha = document.getElementById('senha')

bot_Email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        logar();
    }
})
bot_Senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        logar();
    }
})