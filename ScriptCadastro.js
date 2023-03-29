let usuarios = [];
if (localStorage.getItem('comconta')) {
  usuarios = JSON.parse(localStorage.getItem('comconta'));
}

function cadastrar() {
    let guardaNome = document.getElementById('nome').value;
  let guardasobrenome = document.getElementById('sobrenome').value;
  let guardacpf = document.getElementById('cpf').value;
  let guardaSenha = document.getElementById('senha').value;
  let guardaconfirmar = document.getElementById('confirmar').value;
  let usuario = { nome: guardaNome, sobrenome: guardasobrenome, senha: guardaSenha, confirmar: guardaconfirmar, cpf: guardacpf };
  if (
    guardaNome.length >= 3 &&
    guardaNome.trim().length != 0 &&

    guardasobrenome.length >= 3 &&
    guardasobrenome.trim().length != 0 &&

    guardacpf.length == 11 &&
    guardacpf.trim().length != 0 &&

    guardaSenha.trim().length != 0 &&
    guardaSenha.length >= 3 &&
    
    guardaconfirmar.length == guardasenha.length &&
    guardaconfirmar.trim().length != 0 
    ) 

    {
    usuarios.push(usuario);
    localStorage.setItem('cadastrados', JSON.stringify(usuarios));
    alert('Cadastro realizado!');
    location.reload();
  }
  if (guardaNome.length < 3 || guardaNome.trim().length == 0) {
    document.getElementById('alerta-nome').innerHTML = 'Mínimo de 3 caracteres!';
    setTimeout(() => {
      document.getElementById('alerta-nome').innerHTML = '';
    }, 3000);
  }
  if (guardasobrenome.length < 3 || guardasobrenome.trim().length == 0) {
    document.getElementById('alerta-sobrenome').innerHTML = 'Mínimo de 3 caracteres!';
    setTimeout(() => {
      document.getElementById('alerta-sobrenome').innerHTML = '';
    }, 3000);
  }
  if (guardacpf.length < 11 || guardacpf.length > 11 || guardacpf.trim().length == 0) {
    document.getElementById('alerta-cpf').innerHTML = 'CPF invalido!';
    setTimeout(() => {
      document.getElementById('alerta-cpf').innerHTML = '';
    }, 3000);
  }
  if (guardaSenha.length < 3 || guardaSenha.trim().length == 0) {
    document.getElementById('alerta-senha').innerHTML =
      'Mínimo de 3 caracteres';
    setTimeout(() => {
      document.getElementById('alerta-senha').innerHTML = '';
    }, 3000);
  }
  if (guardaconfirmar.length != guardaSenha.length || guardaconfirmar.trim().length == 0) {
    document.getElementById('alerta-confirmar').innerHTML =
      'Confirmação invalida!';
    setTimeout(() => {
      document.getElementById('alerta-confirmar').innerHTML = '';
    }, 3000);
  }
}

let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let cpf = document.getElementById('cpf');
let senha = document.getElementById('senha');
let confirmar = document.getElementById('senha');

senha.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    document.getElementById('cadastrar').click();
  }
});
cpf.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      document.getElementById('cadastrar').click();
    }
  });
nome.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    document.getElementById('cadastrar').click();
  }
});
sobrenome.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      document.getElementById('cadastrar').click();
    }
  });
confirmar.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      document.getElementById('cadastrar').click();
    }
  });