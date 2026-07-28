document.getElementById("agendamentoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    const consulta = document.getElementById("consulta").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const duvida = document.getElementById("duvida").value;

    const mensagem =
`✨ NOVO PEDIDO DE AGENDAMENTO

👤 Nome: ${nome}

📱 WhatsApp: ${whatsapp}

📧 E-mail: ${email}

🔮 Consulta: ${consulta}

📅 Data desejada: ${data}

🕒 Horário: ${hora}

💬 Dúvida:
${duvida}`;

    const numero = "5535997452341";

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );
});