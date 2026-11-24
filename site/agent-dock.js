// The agent's composer, docked at the bottom of every page: a click grows it into a sheet holding the agent page itself
// (agent.html?embed in an iframe), so the conversation is exactly the one of the agent page
(() => {
  if (/\/agent(\.html)?$/.test(location.pathname)) return;
  const root = document.documentElement;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = { fr: { ph: 'Une question sur mon parcours ?', open: 'Ouvrir l’agent IA', title: 'Agent IA' }, en: { ph: 'Any question about my work?', open: 'Open the AI agent', title: 'AI agent' } };
  const lang = () => root.lang === 'en' ? 'en' : 'fr';

  document.head.insertAdjacentHTML('beforeend', `<style>
/* The same glass, halo and ring as the agent's composer (agent.html, .compose) */
/* A little narrower than the content column (32px gutters, 16 on phones), so it never lines up with the images and thumbnails */
/* Only as wide as the field and lifted off the bottom edge: Safari on iOS takes a full-width fixed bar glued to the
   bottom for a toolbar, and fills the space under its own floating address bar with a solid colour */
.agd { position: fixed; z-index: 90; left: 50%; bottom: max(16px, env(safe-area-inset-bottom, 0px)); width: min(640px, calc(100% - 96px)); translate: -50% 0; display: flex; pointer-events: none; transition: opacity .25s, translate .25s; }
.agd.away { opacity: 0; translate: -50% 8px; }
/* It waits a beat after the page loads, then pops out of its bottom edge with an overshoot, like the agent's bubbles */
/* No fill: an animation still applied after it ends stops the glass from blurring the page behind it */
.agd.later { visibility: hidden; }
.agd.in .agd-field { animation: agd-in .32s cubic-bezier(.2,.9,.3,1.35); transform-origin: 50% 100%; }
@keyframes agd-in { from { opacity: 0; transform: translateY(10px) scale(.5); } 40% { opacity: 1; } }
.agd-field { pointer-events: auto; position: relative; isolation: isolate; width: 100%; display: flex; align-items: center; gap: 8px; padding: 5px 5px 5px 17px; border-radius: 26px; border: 1px solid rgba(255,255,255,.85); background: none; cursor: text; text-align: left;
  font: 16px/1.45 "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; color: #55565d; -webkit-font-smoothing: antialiased;
  box-shadow: 0 0 0 1px rgba(15,15,18,.08), 0 16px 40px -20px rgba(20,20,40,.3); }
/* More see-through than the agent's composer: the page shows, blurred, through the glass */
.agd-field::before { content: ""; position: absolute; inset: 0; border-radius: inherit; z-index: -1; pointer-events: none; background: rgba(255,255,255,.64); -webkit-backdrop-filter: blur(22px) saturate(1.8); backdrop-filter: blur(22px) saturate(1.8); }
@property --agd-beam { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
@keyframes agd-beam { to { --agd-beam: 360deg; } }
.agd-field::after { content: ""; position: absolute; inset: -65px; padding: 64px; background: conic-gradient(from var(--agd-beam), transparent 0 58%, #7c5cff 70%, #ff5ca8 79%, #ffb547 87%, #4fd1ff 95%, transparent) content-box;
  border-radius: 999px; z-index: -2; pointer-events: none; opacity: .38; filter: blur(22px); animation: agd-beam 5s linear infinite; transition: opacity .3s; }
.agd-field:hover::after, .agd-field:focus-visible::after { opacity: .55; }
.agd-field:focus-visible { outline: none; }
.agd-ring { position: absolute; inset: -1px; border-radius: inherit; pointer-events: none; z-index: 1; opacity: .7; clip-path: inset(50%); transition: opacity .3s;
  background: conic-gradient(from var(--agd-beam), transparent 0 58%, #7c5cff 70%, #ff5ca8 79%, #ffb547 87%, #4fd1ff 95%, transparent); animation: agd-beam 5s linear infinite; }
.agd-field:hover .agd-ring, .agd-field:focus-visible .agd-ring { opacity: .9; }
.agd-ph { flex: 1; min-width: 0; padding: 9px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
/* The text and the button are swept by the ring's beam: same gradient, centred on the field (--cx/--cy, set in JS) */
.agd-ph, .agd-send { animation: agd-beam 5s linear infinite; }
.agd-ph { color: transparent; -webkit-text-fill-color: transparent; -webkit-background-clip: text; background-clip: text;
  background-image: conic-gradient(from var(--agd-beam) at var(--cx, 50%) var(--cy, 50%), #55565d 0 58%, #7c5cff 70%, #ff5ca8 79%, #ffb547 87%, #4fd1ff 95%, #55565d); }
.agd-send { flex: none; width: 40px; height: 40px; border-radius: 50%; color: #fff; display: grid; place-items: center; opacity: .55;
  background: conic-gradient(from var(--agd-beam) at var(--cx, 50%) var(--cy, 50%), #2c2d32 0 58%, #7c5cff 70%, #ff5ca8 79%, #ffb547 87%, #4fd1ff 95%, #2c2d32); }
.agd-send svg { width: 18px; height: 18px; }
.agd-space { height: 96px; }
/* Phones: a slimmer field, closer to the bottom edge, so it hides as little of the page as possible */
@media (max-width: 640px) {
  .agd { bottom: max(10px, env(safe-area-inset-bottom, 0px)); width: calc(100% - 88px); }
  .agd-field { padding: 3px 3px 3px 14px; font-size: 15px; }
  .agd-ph { padding: 7px 0; }
  .agd-send { width: 32px; height: 32px; }
  .agd-send svg { width: 15px; height: 15px; }
  .agd-space { height: 64px; }
}
/* The sheet: full width, a strip of the page left visible on top */
.agd-modal { position: fixed; inset: 0; z-index: 1000; }
.agd-modal[hidden] { display: none; }
.agd-backdrop { position: absolute; inset: 0; background: rgba(15,15,18,.35); -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); }
.agd-sheet { position: absolute; left: 0; right: 0; bottom: 0; top: max(28px, 7svh); border-radius: 26px 26px 0 0; overflow: hidden; background: #f1f1f4; box-shadow: 0 -30px 80px -30px rgba(20,20,40,.45); }
.agd-sheet iframe { display: block; width: 100%; height: 100%; border: 0; opacity: 0; }
@media (prefers-reduced-motion: reduce) { .agd-field::after, .agd-ring, .agd.in .agd-field { animation: none; --agd-beam: 200deg; } }
</style>`);

  const dock = document.createElement('div');
  dock.className = 'agd no-i18n';
  // The pop plays once per visit: on the next pages the field is simply there
  let seen = false;
  try { seen = sessionStorage.getItem('agent-dock-seen') === '1'; sessionStorage.setItem('agent-dock-seen', '1'); } catch (e) {}
  if (!seen) { dock.classList.add('later'); setTimeout(() => dock.classList.replace('later', 'in'), 600); }
  dock.innerHTML = `<button class="agd-field" type="button" aria-haspopup="dialog"><i class="agd-ring" aria-hidden="true"></i><span class="agd-ph"></span><span class="agd-send" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></button>`;
  const modal = document.createElement('div');
  modal.className = 'agd-modal no-i18n'; modal.hidden = true;
  modal.innerHTML = '<div class="agd-backdrop"></div><div class="agd-sheet" role="dialog" aria-modal="true"></div>';
  const space = document.createElement('div');
  space.className = 'agd-space'; space.setAttribute('aria-hidden', 'true');
  document.body.append(space, dock, modal);
  const field = dock.querySelector('.agd-field'), ring = dock.querySelector('.agd-ring'), ph = dock.querySelector('.agd-ph'), send = dock.querySelector('.agd-send');
  const backdrop = modal.querySelector('.agd-backdrop'), sheet = modal.querySelector('.agd-sheet');

  const texts = () => { const t = T[lang()]; ph.textContent = t.ph; field.setAttribute('aria-label', t.open); sheet.setAttribute('aria-label', t.title); };
  texts(); addEventListener('langchange', texts);

  // The ring's 1px band, drawn as in agent.html: the rounded outline minus the same outline 1px inside (even-odd)
  const pill = (x, y, w, h, r) => `M${x + r},${y}H${x + w - r}A${r},${r} 0 0 1 ${x + w},${y + r}V${y + h - r}A${r},${r} 0 0 1 ${x + w - r},${y + h}H${x + r}A${r},${r} 0 0 1 ${x},${y + h - r}V${y + r}A${r},${r} 0 0 1 ${x + r},${y}Z`;
  const fitRing = () => {
    const w = field.offsetWidth, h = field.offsetHeight, r = Math.min(26, h / 2);
    if (w && h) ring.style.clipPath = `path(evenodd, '${pill(0, 0, w, h, r)}${pill(1, 1, w - 2, h - 2, r - 1)}')`;
    for (const el of [ph, send]) { el.style.setProperty('--cx', w / 2 - el.offsetLeft + 'px'); el.style.setProperty('--cy', h / 2 - el.offsetTop + 'px'); }
  };
  new ResizeObserver(fitRing).observe(field);

  let frame = null, loaded = false, open = false, anim = [];
  const agent = () => frame?.contentWindow;
  const sync = () => {
    // The sheet speaks the page's language, and lands in the composer
    const w = agent();
    if (!loaded || !w) return;
    if (w.document.documentElement.lang !== lang()) w.applyLang?.(lang());
    if (open && matchMedia('(hover: hover)').matches) w.document.getElementById('q')?.focus({ preventScroll: true });
  };
  const reveal = () => {
    if (!open || !loaded) return;
    frame.animate([{ opacity: 0 }, { opacity: 1 }], { duration: still ? 0 : 160, easing: 'ease-out', fill: 'forwards' });
    // The page is on screen: its portrait composes itself, then the agent says hello
    agent().dispatchEvent(new (agent().Event)('sheetopen'));
    sync();
  };

  // The sheet grows out of the composer: a clip-path from the composer's outline to the whole sheet
  const from = () => {
    const f = field.getBoundingClientRect(), s = sheet.getBoundingClientRect();
    return `inset(${f.top - s.top}px ${s.right - f.right}px ${s.bottom - f.bottom}px ${f.left - s.left}px round 26px)`;
  };
  const FULL = 'inset(0px 0px 0px 0px round 26px 26px 0px 0px)';

  const show = () => {
    if (open) return;
    open = true;
    anim.forEach(a => a.cancel());
    modal.hidden = false;
    root.style.overflow = 'hidden';
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = T[lang()].title;
      frame.addEventListener('load', () => { loaded = true; if (!anim.length || anim.every(a => a.playState === 'finished')) reveal(); }, { once: true });
      frame.src = 'agent.html?embed';
      sheet.appendChild(frame);
    }
    dock.classList.add('away');
    const ms = still ? 0 : 380, ease = 'cubic-bezier(.2,.85,.25,1)';
    anim = [
      sheet.animate([{ clipPath: from(), backgroundColor: '#ffffff' }, { clipPath: FULL, backgroundColor: '#f1f1f4' }], { duration: ms, easing: ease }),
      backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: still ? 0 : 200, easing: 'ease-out' }),
    ];
    anim[0].finished.then(() => { anim = []; reveal(); }, () => {});
  };

  const hide = () => {
    if (!open) return;
    open = false;
    anim.forEach(a => a.cancel());
    const ms = still ? 0 : 280, ease = 'cubic-bezier(.5,0,.2,1)';
    const fade = frame.animate([{ opacity: getComputedStyle(frame).opacity }, { opacity: 0 }], { duration: still ? 0 : 90, fill: 'forwards' });
    anim = [
      fade,
      sheet.animate([{ clipPath: FULL, backgroundColor: '#f1f1f4' }, { clipPath: from(), backgroundColor: '#ffffff' }], { duration: ms, delay: still ? 0 : 40, easing: ease, fill: 'forwards' }),
      backdrop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, delay: still ? 0 : 40, easing: 'ease-in', fill: 'forwards' }),
    ];
    setTimeout(() => dock.classList.remove('away'), still ? 0 : ms - 80);
    anim[1].finished.then(() => {
      anim.forEach(a => a.cancel()); anim = [];
      modal.hidden = true; root.style.overflow = ''; field.focus({ preventScroll: true });
    }, () => {});
  };

  field.addEventListener('click', show);
  backdrop.addEventListener('click', hide);
  addEventListener('keydown', e => { if (e.key === 'Escape' && open) hide(); });
  addEventListener('message', e => { if (e.origin === location.origin && e.data?.type === 'agent-close') hide(); });
  addEventListener('langchange', () => { if (loaded) sync(); });
})();
