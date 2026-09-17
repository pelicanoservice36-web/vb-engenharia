/**
 * O <video> do Hero nunca tem autoplay no HTML — só toca se o JS carregar
 * e o usuário não tiver pedido para reduzir movimento (mesma regra das
 * animações do dial/pulse do HeroVisual). Sem isso, ele fica parado no
 * poster (primeiro frame), que já funciona como imagem estática.
 */
const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (video && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.play().catch(() => {});
}
