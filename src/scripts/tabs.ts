/**
 * Promove os grupos <details>/<summary> de TabAccordion.astro a um
 * tablist acessível de verdade (role="tab", aria-selected, roving
 * tabindex, navegação por seta) quando o JS carrega. Sem isso, cada
 * grupo continua sendo um accordion nativo 100% funcional — este script
 * é melhoria progressiva, nunca a única forma de acessar o conteúdo.
 */
function enhanceGroup(container: HTMLElement) {
  const originalItems = Array.from(container.querySelectorAll<HTMLDetailsElement>('[data-tab-item]'));
  if (originalItems.length === 0) return;

  const triggers = originalItems.map((item) => item.querySelector<HTMLElement>('[data-tab-trigger]')!);
  const panels = originalItems.map((item) => item.querySelector<HTMLElement>('[data-tab-panel]')!);
  const groupLabel = container.dataset.groupLabel ?? 'Categorias';
  const initialIndex = Math.max(
    0,
    originalItems.findIndex((item) => item.hasAttribute('open'))
  );

  container.setAttribute('role', 'tablist');
  container.setAttribute('aria-label', groupLabel);
  container.classList.add('is-enhanced');

  // O <details> original fica entre o tablist e o <summary role="tab"> no
  // DOM. Testado no Chromium: role="presentation" NÃO é respeitado de
  // forma confiável em <details> (continua exposto como "group" na árvore
  // de acessibilidade), quebrando a relação direta pai-filho exigida
  // entre tablist e tab. Uma <div> comum não tem essa restrição — por
  // isso trocamos o wrapper por uma div equivalente, já que o
  // comportamento nativo de abrir/fechar do <details> não é mais
  // necessário (o modo aprimorado controla tudo via classe .is-active).
  const items: HTMLElement[] = originalItems.map((item) => {
    const replacement = document.createElement('div');
    for (const attr of Array.from(item.attributes)) {
      replacement.setAttribute(attr.name, attr.value);
    }
    replacement.removeAttribute('open');
    while (item.firstChild) replacement.appendChild(item.firstChild);
    item.replaceWith(replacement);
    return replacement;
  });

  items.forEach((item, i) => {
    const id = item.dataset.id ?? String(i);
    const trigger = triggers[i];
    const panel = panels[i];
    trigger.setAttribute('role', 'tab');
    trigger.id = `tab-${id}`;
    trigger.setAttribute('aria-controls', `panel-${id}`);
    panel.setAttribute('role', 'tabpanel');
    panel.id = `panel-${id}`;
    panel.setAttribute('aria-labelledby', `tab-${id}`);
  });

  function activate(index: number, opts: { focus?: boolean } = {}) {
    items.forEach((item, i) => {
      const isActive = i === index;
      item.classList.toggle('is-active', isActive);
      triggers[i].setAttribute('aria-selected', String(isActive));
      triggers[i].tabIndex = isActive ? 0 : -1;
    });
    if (opts.focus) triggers[index].focus();
  }

  activate(initialIndex);

  triggers.forEach((trigger, i) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      activate(i);
    });

    trigger.addEventListener('keydown', (event) => {
      let nextIndex: number | null = null;
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = (i + 1) % items.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = (i - 1 + items.length) % items.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = items.length - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      activate(nextIndex, { focus: true });
    });
  });
}

document.querySelectorAll<HTMLElement>('[data-tab-accordion]').forEach(enhanceGroup);
