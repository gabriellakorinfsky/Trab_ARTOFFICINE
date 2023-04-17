let usuarios = [];
if (localStorage.getItem('cadastrado')) {
  usuarios = JSON.parse(localStorage.getItem('cadastrado'));
}

function cadastrar() {
  let guarda_Nome = document.getElementById('nome').value;
  let guarda_Username = document.getElementById('username').value;
  let guarda_Cpf = document.getElementById('cpf').value;
  let guarda_Senha = document.getElementById('senha').value;
  let guarda_Data = document.getElementById('dataN').value;
  let guarda_Email = document.getElementById('email').value;
  let data = new Date();

  let usuario = { 
    nome: guarda_Nome.toLowerCase().trim(), 
    username: guarda_Username.toLowerCase().trim(), 
    cpf: guarda_Cpf.trim(),
    senha: guarda_Senha, 
    dataN: guarda_Data,
    email: guarda_Email,
    dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  };

  if (guarda_Nome.length >= 3 &&
      guarda_Username.length >= 3 &&
      guarda_Cpf.length == 11 &&
      guarda_Senha.length >= 3&&
      guarda_Email.length >= 3&&


      guarda_Nome.trim().length != 0 &&
      guarda_Username.trim().length != 0 &&
      guarda_Cpf.trim().length != 0 &&
      guarda_Senha.trim().length != 0 &&
      guarda_Email.trim().length != 0   
    ){
        if(procurar_user(usuario.email)==-1){
          usuarios.push(usuario)
          localStorage.setItem('cadastrado', JSON.stringify(usuarios))
          alert('Cadastro realizado!')
          location.assign('login.html')
        }else{
          alert("Usuário já existe!");
        }
      }


  if (guarda_Email.length < 3 || 
      guarda_Email.trim().length == 0) {
      document.getElementById('erro-message1').innerHTML = 'Email: Mínimo de 3 caracteres!'
      setTimeout(() => {
        document.getElementById('erro-message1').innerHTML = ``
      }, 3000)
  }
  if (guarda_Username.length < 3 || 
      guarda_Username.trim().length == 0) {
      document.getElementById('erro-message2').innerHTML = 'Username: Mínimo de 3 caracteres!'
      setTimeout(() => {
        document.getElementById('erro-message2').innerHTML = ``
      }, 3000)
  }
  if (guarda_Cpf.length < 11 ||
      guarda_Cpf.length > 11 ||
      guarda_Cpf.trim().length == 0) {
    document.getElementById('erro-message3').innerHTML = 'CPF invalido!'
    setTimeout(() => {
      document.getElementById('erro-message3').innerHTML = ``
    }, 3000)
  }
  if (guarda_Senha.length < 3 ||
      guarda_Senha.trim().length == 0) {
    document.getElementById('erro-message4').innerHTML = 'Senha: Mínimo de 3 caracteres'
    setTimeout(() => {
      document.getElementById('erro-message4').innerHTML = ``
    }, 3000)
  }
  if (guarda_Nome.length < 3 ||
      guarda_Nome.trim().length == 0) {
    document.getElementById('erro-message5').innerHTML = 'Nome: Mínimo de 3 caracteres';
    setTimeout(() => {
      document.getElementById('erro-message5').innerHTML = ``
    }, 3000)
  }
}

let bot_Nome = document.getElementById('nome');
let bot_Username = document.getElementById('username');
let bot_Cpf = document.getElementById('cpf');
let bot_Senha = document.getElementById('senha');
let bot_Email = document.getElementById('email');
let bot_Data = document.getElementById("dataN");

bot_Senha.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    cadastrar();
  }
})
bot_Cpf.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      cadastrar();
    }
  })
bot_Nome.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
  cadastrar();
}
})
bot_Username.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      cadastrar();
    }
  })
  bot_Email.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      cadastrar();
    }
  })
  bot_Data.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      cadastrar();
    }
  })

  function procurar_user(guarda_Email) {
    let index = usuarios.findIndex((element) => {
        return element.email === guarda_Email
    })
    return index
}