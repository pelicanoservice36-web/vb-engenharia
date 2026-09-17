/**
 * Lightbox com melhoria progressiva: cada foto é um <a href="{imagem em
 * tamanho real}">, então sem JS (ou em navegadores sem suporte a
 * <dialog>) o clique simplesmente abre a imagem normalmente. Com JS,
 * interceptamos o clique simples (sem modificador) e abrimos num
 * <dialog> reutilizado na própria página.
 */
const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const dialogImg = dialog?.querySelector<HTMLImageElement>('[data-lightbox-img]');
const dialogCaption = dialog?.querySelector<HTMLElement>('[data-lightbox-caption]');
const triggers = document.querySelectorAll<HTMLAnchorElement>('[data-lightbox-trigger]');

if (dialog && dialogImg && typeof dialog.showModal === 'function') {
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      event.preventDefault();
      dialogImg.src = trigger.href;
      dialogImg.alt = trigger.dataset.lightboxAlt ?? '';
      if (dialogCaption) {
        dialogCaption.textContent = trigger.dataset.lightboxCaption ?? '';
      }
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
