/* Service worker: deixa o app abrir sem internet.
   Ao mudar algum arquivo do app, troque a versão abaixo para o celular buscar a atualização. */
const VERSAO = 'ingles-v1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icone-192.png', './icone-512.png', './icone-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  /* YouTube, podcasts e outros sites vão direto para a rede */
  if (url.origin !== self.location.origin) return;

  /* A página principal tenta a rede primeiro, para pegar atualizações, e usa a cópia guardada sem internet */
  if (req.mode === 'navigate' || url.pathname.endsWith('.html')){
    e.respondWith(
      fetch(req)
        .then(resp => { const copia = resp.clone(); caches.open(VERSAO).then(c => c.put(req, copia)); return resp; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  /* Ícones e manifesto: cópia guardada primeiro */
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(resp => {
      const copia = resp.clone();
      caches.open(VERSAO).then(c => c.put(req, copia));
      return resp;
    }))
  );
});
