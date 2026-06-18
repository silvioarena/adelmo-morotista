const ownerWhatsAppNumber = "5599999999999";
const buttons = document.querySelectorAll(".button");
const travelForm = document.querySelector("#travel-form");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Solicitacao de viagem iniciada pelo site Adelmo Motorista.");
  });
});

travelForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(travelForm);
  const nome = formData.get("nome");
  const telefone = formData.get("telefone");
  const destino = formData.get("destino");
  const horario = formData.get("horario");
  const pessoas = formData.get("pessoas");

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_whatsapp",
    form_name: "solicitacao_viagem_executiva",
    nome,
    telefone,
    destino,
    horario,
    quantidade_pessoas: pessoas,
  });

  const message = `Olá! Gostaria de solicitar uma viagem executiva.

Nome: ${nome}
Telefone: ${telefone}
Destino: ${destino}
Horário: ${horario}
Quantidade de pessoas: ${pessoas}`;

  const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener");
});
