const form = document.getElementById("agendamentoForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const objetivo = document.getElementById("objetivo").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, gostaria de agendar uma aula experimental.

Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email}

Objetivo: ${objetivo}

Data desejada: ${data}
Horário desejado: ${hora}

Mensagem:
${mensagem}`;

    const numero = "5581999999999";

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});