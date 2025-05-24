// importa o array de usuarios
// import usuarios from "./usuarios.js";
// banco de dados no localstorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// inputs
// input de login
let loginUser = document.getElementById("login");
// input de senha
let senhaUser = document.getElementById("senha");

// form de cadastro
let formCadastro = document.getElementById("form-cadastro");
// evento de submissao do form
formCadastro.addEventListener("submit", (e) => {
  // impede o recarregamento da pagina
  e.preventDefault();
  // chama a funcao de cadastro
  cadastrarUsuario();
});

function cadastrarUsuario() {
  const login = loginUser.value.trim();
  const senha = senhaUser.value.trim();
  if (!login || !senha) {
    alert("Por favor, preencha todos os campos!");
  }
  const usuarioExistente = usuarios.find((user) => {
    return user.login === login;
  });
  if (usuarioExistente) {
    alert("Usuário já existe!");
    return;
  }
  const novoUsuario = {
    id: Date.now(),
    login: login,
    senha: senha,
  };
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário cadastrado com sucesso!");
  // Limpa os campos
  loginUser.value = "";
  senhaUser.value = "";
}
