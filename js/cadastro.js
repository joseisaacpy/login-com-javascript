// banco de dados no localstorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// inputs
// input de login
let loginUser = document.getElementById("login");
// input de senha
let senhaUser = document.getElementById("senha");

let mensagemCadastro = document.getElementById("mensagemCadastro");

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
  // login
  const login = loginUser.value.trim();
  // senha
  const senha = senhaUser.value.trim();
  // se não tiver login ou senha, emitir erro
  if (!login || !senha) {
    alert("Por favor, preencha todos os campos!");
  }
  // pesquisa usuario no array
  const usuarioExistente = usuarios.find((user) => {
    return user.login === login;
  });

  if (usuarioExistente) {
    mensagemCadastro.style.display = "block";
    mensagemCadastro.textContent = "Usuário já existe!";
    return;
  }
  // dados do novo usuario
  const novoUsuario = {
    id: Date.now(),
    login: login,
    senha: senha,
  };
  // adiciona o novo usuario no array de usuarios do local
  usuarios.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  // mensagem de cadastro
  alert("Usuário cadastrado com sucesso!");
  // Limpa os campos
  loginUser.value = "";
  senhaUser.value = "";
}
