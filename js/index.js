// importa a lista de usuarios
import usuarios from "./usuarios.js";
// input login
let inputNome = document.getElementById("login");
// input senha
let inputSenha = document.getElementById("senha");
// formulario
let form = document.querySelector("form");

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
    return console.log("Usuário não encontrado!");
  }
  // se encontrado, retorna mensagem confirmando que o usuário está no 'sistema'
  console.log("Usuário encontrado!");
}

// evento de submissao do form
form.addEventListener("submit", (e) => {
  // impede o comportamento padrao de recarregamento
  e.preventDefault();
  validarUsuario();
});
