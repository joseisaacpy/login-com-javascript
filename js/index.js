// importa a lista de usuarios
import usuarios from "./usuarios.js";
// input login
let inputNome = document.getElementById("login");
// input senha
let inputSenha = document.getElementById("senha");
// formulario
let form = document.querySelector("form");
// span de mensagem
let spanMensagem = document.querySelector("form span");
// funcao para validar usuario
function validarUsuario() {
  // caça o login do usuario e senha com o metodo find no array de usuarios
  const loginEncontrado = usuarios.find((usuario) => {
    return (
      usuario.login === inputNome.value && usuario.senha === inputSenha.value
    );
  });
  // se não encontrado, retorna mensagem
  if (!loginEncontrado) {
    return (spanMensagem.textContent = "Login ou senha incorretos.");
  }
  // se encontrado, retorna mensagem confirmando que o usuário está no 'sistema'
  spanMensagem.textContent = "Usuário logado com sucesso.";
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
