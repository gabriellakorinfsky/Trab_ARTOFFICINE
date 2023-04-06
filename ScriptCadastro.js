let usuarios = [];
if (localStorage.getItem('comconta')) {
  usuarios = JSON.parse(localStorage.getItem('comconta'));
}

function cadastrar() {
  let guardaNome = document.getElementById('nome').value;
  let guardausername = document.getElementById('username').value;
  let guardacpf = document.getElementById('cpf').value;
  let guardaSenha = document.getElementById('senha').value;
  let guardadata = document.getElementById('dataN').value;
  let guardaemail = document.getElementById('email').value;
  let data = new Date();

  let usuario = { 
    nome: guardaNome, 
    username: guardausername, 
    senha: guardaSenha, 
    confirmar: guardaconfirmar, 
    cpf: guardacpf,
    dataN: guardadata,
    dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  };

  if (
    guardaNome.length >= 3 &&
    guardaNome.trim().length != 0 &&

    guardausername.length >= 3 &&
    guardausername.trim().length != 0 &&

    guardacpf.length == 11 &&
    guardacpf.trim().length != 0 &&

    guardaSenha.trim().length != 0 &&
    guardaSenha.length >= 3&&

    guardaemail.length >= 3&&
    guardaemail.trim().length != 0 
    
    ) 

    {
      if(procurar_user(usuario.email)==-1){
        usuarios.push(usuario);
        localStorage.setItem('cadastrados', JSON.stringify(usuarios));
        alert('Cadastro realizado!');
        location.assign('login.html');
      }else{
        alert("Esse email já está sendo utilizado");
      }
      
   }

  if (guardaemail.length < 3 || guardaemail.trim().length == 0) {
    document.getElementById('alerta-email').innerHTML = 'Mínimo de 3 caracteres!';
    setTimeout(() => {
      document.getElementById('alerta-email').innerHTML = ``;
    }, 3000);
  }
  if (guardausername.length < 3 || guardausername.trim().length == 0) {
    document.getElementById('alerta-username').innerHTML = 'Mínimo de 3 caracteres!';
    setTimeout(() => {
      document.getElementById('alerta-username').innerHTML = ``;
    }, 3000);
  }
  if (guardacpf.length < 11 || guardacpf.length > 11 || guardacpf.trim().length == 0) {
    document.getElementById('alerta-cpf').innerHTML = 'CPF invalido!';
    setTimeout(() => {
      document.getElementById('alerta-cpf').innerHTML = ``;
    }, 3000);
  }
  if (guardaSenha.length < 3 || guardaSenha.trim().length == 0) {
    document.getElementById('alerta-senha').innerHTML =
      'Mínimo de 3 caracteres';
    setTimeout(() => {
      document.getElementById('alerta-senha').innerHTML = ``;
    }, 3000);
  }
  if (guardaNome.length < 3 || guardaNome.trim().length == 0) {
    document.getElementById('alerta-Nome').innerHTML =
      'Mínimo de 3 caracteres';
    setTimeout(() => {
      document.getElementById('alerta-Nome').innerHTML = ``;
    }, 3000);
  }
}

let nome = document.getElementById('nome');
let username = document.getElementById('username');
let cpf = document.getElementById('cpf');
let senha = document.getElementById('senha');
let email = document.getElementById('email');

senha.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    cadastrar();;
  }
});
cpf.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar();;
    }
  });
nome.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    cadastrar();;
  }
});
username.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar();;
    }
  });
email.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar();
    }
  });

  function procura_usuario(guarda_email) {
    let index = usuarios.findIndex((element) => {
        return element.email == guarda_email
    })
    return index
}