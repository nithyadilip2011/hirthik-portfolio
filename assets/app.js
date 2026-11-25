(() => {
  const CAP = 8, REFILL_MS = 1000;
  const bucket = document.getElementById('bucket'), log = document.getElementById('log');
  const btn = document.getElementById('send');
  if (!bucket || !log || !btn) return;
  let tokens = 3, n = 0, lastRefill = Date.now(), announced = 0;
  for (let i = 0; i < CAP; i++) bucket.appendChild(Object.assign(document.createElement('div'), {className: 'tok'}));
  const draw = () => {
    [...bucket.children].forEach((t, i) => t.classList.toggle('full', i < tokens));
    bucket.setAttribute('aria-label', `Bucket with ${tokens} of ${CAP} tokens`);
  };
  const line = (ok) => {
    n++;
    empty.remove();
    const d = document.createElement('div');
    d.className = ok ? 'ok' : 'no';
    const a = document.createElement('span'), b = document.createElement('span');
    a.textContent = `GET /api/resource #${n}`;
    b.textContent = ok ? '200 OK' : '429 Too Many Requests';
    d.append(a, b);
    log.appendChild(d);
    while (log.children.length > 5) log.firstChild.remove();
  };
  const empty = document.createElement('div');
  empty.className = 'empty';
  empty.textContent = 'No requests yet. Send a few.';
  log.appendChild(empty);
  btn.addEventListener('click', () => {
    if (tokens > 0) { tokens--; line(true); } else line(false);
    draw();
  });
  // Refill is time-based so it stays correct if the tab was throttled.
  setInterval(() => {
    const now = Date.now(), add = Math.floor((now - lastRefill) / REFILL_MS);
    if (add > 0) { lastRefill += add * REFILL_MS; tokens = Math.min(CAP, tokens + add); draw(); }
  }, 250);
  draw();
})();
