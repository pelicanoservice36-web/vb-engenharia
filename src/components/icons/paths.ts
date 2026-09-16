/**
 * Registro de ícones em linha (originais, desenhados para este projeto —
 * não reproduzem nenhum logotipo ou biblioteca de terceiros). Cada entrada é
 * o markup interno de um <svg viewBox="0 0 24 24">, consumido por Icon.astro.
 */
export const iconPaths = {
  'clipboard-check': `<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="m9 13 2.2 2.2L15.5 11"/>`,
  shield: `<path d="M12 2.5 19 5.5v5.5c0 5-3 8.3-7 10.5-4-2.2-7-5.5-7-10.5V5.5Z"/>`,
  'shield-check': `<path d="M12 2.5 19 5.5v5.5c0 5-3 8.3-7 10.5-4-2.2-7-5.5-7-10.5V5.5Z"/><path d="m8.7 11.8 2.2 2.2 4.4-4.4"/>`,
  'badge-check': `<circle cx="12" cy="12" r="9"/><path d="m8.2 12.3 2.4 2.4 5.2-5.2"/>`,
  'document-check': `<path d="M7 2.5h7l4 4V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z"/><path d="M14 2.5V7h4"/><path d="m9 14.5 2 2 4-4.2"/>`,
  headset: `<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="1.3"/><rect x="17" y="13" width="4" height="6" rx="1.3"/><path d="M19 19v.5a3 3 0 0 1-3 3h-2.5"/>`,
  bolt: `<path d="M12.7 2 5 13.2h5.3L10.6 22 19 10.3h-5.6L12.7 2Z"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`,
  eye: `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>`,
  sparkles: `<path d="M11 3.5 12.4 8l4.6 1.4L12.4 10.8 11 15.3 9.6 10.8 5 9.4l4.6-1.4L11 3.5Z"/><path d="M18.5 14.5 19.3 17l2.5.8-2.5.8-.8 2.4-.8-2.4-2.5-.8 2.5-.8.8-2.5Z"/>`,
  factory: `<path d="M3 21V11l5 3.2V11l5 3.2V9l6 4v8H3Z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/>`,
  building: `<rect x="5" y="2.5" width="14" height="19" rx="1"/><path d="M9 6.5h1.2M13.8 6.5H15M9 10.5h1.2M13.8 10.5H15M9 14.5h1.2M13.8 14.5H15"/><path d="M10 21.5v-4h4v4"/>`,
  home: `<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v10.5h12V10"/><path d="M10 20.5V15h4v5.5"/>`,
  'drafting-compass': `<path d="M12 3v3.2"/><circle cx="12" cy="4.5" r="1.3"/><path d="m12 6.2-7 15h3l1.7-3.7h4.6L16 21.2h3l-7-15Z"/><path d="M10.8 14.5h2.4"/>`,
  plug: `<path d="M9 2.5v5M15 2.5v5"/><rect x="6.5" y="7.5" width="11" height="7" rx="2"/><path d="M12 14.5v3a4 4 0 0 1-4 4H7"/>`,
  wrench: `<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3Z"/>`,
  cpu: `<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2.5V5M12 2.5V5M15 2.5V5M9 19v2.5M12 19v2.5M15 19v2.5M2.5 9H5M2.5 12H5M2.5 15H5M19 9h2.5M19 12h2.5M19 15h2.5"/>`,
  menu: `<path d="M4 6.5h16M4 12h16M4 17.5h16"/>`,
  close: `<path d="M5 5l14 14M19 5 5 19"/>`,
  chat: `<path d="M4 12.5a8 8 0 1 1 3.5 6.6L4 20l1-3.4A7.9 7.9 0 0 1 4 12.5Z"/><path d="M9 12h.01M12 12h.01M15 12h.01"/>`,
  phone: `<path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5Z"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>`,
  'chevron-down': `<path d="m6 9 6 6 6-6"/>`,
  check: `<path d="m5 12.5 4.5 4.5L19 7"/>`,
  'arrow-right': `<path d="M4.5 12h15M13 5.5 19.5 12 13 18.5"/>`,
  'map-pin': `<path d="M12 21.5S5 14.8 5 9.8a7 7 0 0 1 14 0c0 5-7 11.7-7 11.7Z"/><circle cx="12" cy="9.8" r="2.4"/>`,
  atom: `<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>`,
} as const;

export type IconName = keyof typeof iconPaths;
