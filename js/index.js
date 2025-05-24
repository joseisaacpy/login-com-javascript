// pega os usuarios em formato de texto no localstorage e transforma json
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

// input login
let inputNome = document.getElementById("login");
// input senha
let inputSenha = document.getElementById("senha");

// modal de carragamento
let modal = document.getElementById("modal");

// formulario
let form = document.querySelector("form");

// span de mensagem
let spanMensagem = document.getElementById("mensagem");

// funcao para validar usuario
function validarUsuario() {
  const login = inputNome.value.trim();
  const senha = inputSenha.value.trim();

  // caça o login do usuario e senha com o metodo find no array de usuarios
  const loginEncontrado = usuarios.find((usuario) => {
    return usuario.login === login && usuario.senha === senha;
  });

  // se não encontrado, retorna mensagem
  if (!loginEncontrado) {
    return (spanMensagem.textContent = "Login ou senha incorretos.");
  }

  // se encontrado, retorna mensagem confirmando que o usuário está no 'sistema'
  spanMensagem.style.color = "#fff";
  spanMensagem.textContent = "Usuário logado com sucesso.";
  
  // coloca class de ativo no modal, para mostrar o carregamento
  modal.classList.add("active");
  // manda usuario para nova página (dashboard) após 1 seg
  setTimeout(() => {
    localStorage.setItem("nomeUsuario", inputNome.value);
    window.location.href = `${window.location.origin}/login-com-javascript/dashboard.html`;
  }, 1000);
}

// evento de submissao do form
form.addEventListener("submit", (e) => {
  // impede o comportamento padrao de recarregamento
  e.preventDefault();
  // chama funcao de validar usuario
  validarUsuario();
});
console.log(usuarios);
