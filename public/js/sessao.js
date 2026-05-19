// sessão

function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;

    var bUsuario = document.getElementById("b_usuario");

    if (id != null && nome != null && email != null) {
        if (bUsuario) {
            bUsuario.innerHTML = nome;
        }
    } else {
        // Caminho absoluto funciona em qualquer subpasta
        window.location = "/login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "/login.html";
}

// Funções de carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "flex";
    }
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "none";
    }

    var divErrosLogin = document.getElementById("div_erros_login");
    if (divErrosLogin && texto) {
        divErrosLogin.style.display = "block";
        divErrosLogin.innerHTML = texto;
    }
}