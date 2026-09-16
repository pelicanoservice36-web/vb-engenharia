/**
 * O site ainda não tem backend/serviço de envio configurado (ver README:
 * "Integrando o formulário de contato"). Este script cuida apenas da
 * validação client-side e nunca finge que a mensagem foi enviada — isso
 * evitaria que um cliente em potencial pense que o contato foi recebido
 * quando, na prática, ele não foi enviado a lugar nenhum.
 */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
const statusEl = form?.querySelector<HTMLElement>('[data-contact-form-status]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (statusEl) {
    statusEl.hidden = false;
    statusEl.textContent =
      'Este formulário ainda não está conectado a um sistema de envio. Para falar agora com nossa equipe, utilize o WhatsApp, o telefone ou o e-mail ao lado.';
  }
});
