// Contact block of the case studies and the design system: Olivier's ASCII self-portrait standing on the footer line,
// and the button that copies the email address. The home page draws the same portrait with its own script (index.html)
{
const ART = `




                       ..::::
                  :+%@@@@@@@@@@@%*=-
                -%@@@@@@@@@@@@@@@@@@%+:
              :%@@@@@@@@@@@@@@@@@@@@@@@@*-.
            :*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.
          .*@@@@@@@%%%@@@@@@@@@@@@@@@@@@@@@@%=
         :%@@%@##+++=+++++*##%%%%#####%%%%%@@@#.
        =%@#*#*=----------===+++++++++++*****%@%.
       #@@*-----:::--:----------=========+++++*@%-
      #@@*----::::::::::::::-----=-==========++*@@:
     *@@*=----:::::::::::::::---==============++#@@:
    -@@#+---:::::::::::------:--===============+*#@#
    #@%#+-:::::::--:::::---------==============++*%@=
   .%%#*=::::::::::::::::--------================+#@#.
   .%#*+-:::::----::::::::-==:----=========+=====+#%%.
   .#*=-::::--=+*****+=-::-==:-====+***######*+===+#%.
   .*=:::::==++=++***##*+--=--=+**#%%%%##****##*+=+*#
    +=::.:---:-==+*##%%*+=::-=++*##%%####***+++*+++#+
    ++:...::=+++*#@@%#%%#+::-=++*#%%%#%@@@%###+++=+#-
    =+:...:-=++--#%%#*##+=:-===+*##%#*#@@#**##*+===+
  .:=+:...:-:::-==+****+=---===++*#####****+++++===-
 ==:::...::--:::--===+=-----=====++***+++++=+=+===-----
.==::::.:::--::::------:----=======+++++=========--===+=
:=:-==:::::::--------::-::--===========+====-------=====
.:-++-:::::::::--------:::---====++========--------=+==+
 :=+*=::::::::::-----=:--:---=+=-=+++======--------+*+=-
 :::==::::::::::::-===-**-==+*%%*=++++==----====--=+**+
  :::==-::::::::::-==---===++******++===--=========*+=:
   ..==------::::----==*###**##%%##*++===-==+++===+*=-
     :+==+==----:-==+##%%%###%#%%%%%#**+===+++++++**-
      =====++=---+*###**+==*#+++***###%#*+++*******-
      :==+++=--=****+---=++===***++=++**##*++*###**.
       +==*+==-=++***+++++++****#######****+*#####+
       :=+**++==+++=-..::-=====++==++**###**######.
        :+***+==*+-::::--=*******+++==+*####%%#%#:
         .*##*=++++=:::----=++++==++++*#%%%%%%%+
          .*#**#**#*+-:::-===+***+++*#%%%@@@%%-
            =#%####*+--===+++******##%%%@@@@%-
            ::*%%#**++*++*+*******#%%%%%@@@#+:
            :::=#%%##*#**+**####*##%%%%%@%*==.
            :.::-+*%%####*###%###%%%%%@%#+==-.
            ..::::--+*#%%%%%%%%@@@@%%#*+===--.
            ::::::::---==+++******++++==-----:
           .::::::::::--:::-------===---------:.
         .-:::::::::::::::::::-::--------:-----+:
     .:: -:::::.:::::::::::::::::::---:::::-----+::
    :-=..=.:::...::::::::::::::::::::::::::----==:++:
.:. :-=. -..:::...::::::::::::::::::::::::::---+:-===-.
`;

  // copy email
  document.getElementById('copy')?.addEventListener('click', e => {
    navigator.clipboard?.writeText('otousche@gmail.com').then(() => { e.target.textContent = 'Copié'; setTimeout(() => e.target.textContent = "Copier l'adresse", 1600); }, () => {});
  });

  // ASCII self-portrait in the footer: composes itself when it comes into view (glyphs scramble, then settle from top to bottom); under the cursor they stir, drift aside and warm to orange
  (() => {
    const cv = document.querySelector('.ascii-me');
    if (!cv) return;
    const art = ART.replace(/^\n+|\n+$/g, '').split('\n');
    const rows = art.length, cols = Math.max(...art.map(l => l.length));
    const GLYPHS = '@%#*+=-:.', INK = [38, 38, 42], HOT = [252, 76, 2], R = 70;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = cv.getContext('2d');
    const cells = [];
    art.forEach((line, y) => [...line].forEach((c, x) => {
      if (c !== ' ') cells.push({ x, y, c, at: 250 + (y / rows) * 1300 + Math.random() * 650, heat: 0, g: c });
    }));
    let cw = 0, ch = 0, t0 = 0, raf = 0, pointer = null;
    const size = () => {
      const fs = parseFloat(getComputedStyle(cv).fontSize), dpr = devicePixelRatio || 1;
      ctx.font = `${fs}px "Geist Mono", ui-monospace, monospace`;
      cw = ctx.measureText('M').width; ch = fs * 1.02;
      cv.width = Math.ceil(cols * cw * dpr); cv.height = Math.ceil(rows * ch * dpr);
      cv.style.width = cols * cw + 'px'; cv.style.height = rows * ch + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fs}px "Geist Mono", ui-monospace, monospace`; ctx.textBaseline = 'top';
    };
    const draw = now => {
      const t = still ? 1e9 : now - t0;
      let busy = t >= 0 && t < 2600;  // t is negative until the bust has scrolled into view
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (const k of cells) {
        let g = k.c, a = 1, ox = 0, oy = 0;
        if (t < k.at) {
          const p = 1 - (k.at - t) / 500;
          if (p <= 0) continue;
          a = p * .55; g = GLYPHS[Math.random() * GLYPHS.length | 0];
        }
        const px = (k.x + .5) * cw, py = (k.y + .5) * ch;
        if (pointer) {
          const dx = px - pointer.x, dy = py - pointer.y, d = Math.hypot(dx, dy);
          if (d < R) { k.heat = Math.max(k.heat, 1 - d / R); k.dx = dx / (d || 1); k.dy = dy / (d || 1); }
        }
        if (k.heat > .01) {
          busy = true;
          const h = k.heat * k.heat;
          if (Math.random() < h * .6) k.g = GLYPHS[Math.random() * GLYPHS.length | 0];
          if (h > .08) g = k.g;
          ox = k.dx * h * 9; oy = k.dy * h * 9;
          k.heat *= .94;
        }
        const fade = 1;
        const m = Math.min(1, k.heat * 1.4);
        ctx.fillStyle = `rgba(${INK.map((v, i) => Math.round(v + (HOT[i] - v) * m)).join()},${a * fade})`;
        ctx.fillText(g, k.x * cw + ox, k.y * ch + oy);
      }
      pointer = null;
      raf = busy ? requestAnimationFrame(draw) : 0;
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(draw); };
    // The composition starts once the tab is actually visible, so it isn't missed in a background tab
    // The composition starts when the bust scrolls into view (and the tab is visible), so it plays in front of the visitor
    const start = () => {
      if (document.hidden) return addEventListener('visibilitychange', start, { once: true });
      t0 = performance.now(); wake();
    };
    (document.fonts ? document.fonts.load('10px "Geist Mono"').catch(() => {}) : Promise.resolve()).then(() => {
      size();
      if (still || !('IntersectionObserver' in window)) return start();
      t0 = Infinity;
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); start(); } }, { threshold: .35 });
      io.observe(cv);
    });
    addEventListener('resize', () => { size(); wake(); });
    if (!still) addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      const r = cv.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (x < -R || y < -R || x > r.width + R || y > r.height + R) return;
      pointer = { x, y }; wake();
    }, { passive: true });
  })();
}
