self.addEventListener('install', (event) => {
  console.log('installed')
  event.waitUntil(caches.open('v1').then(cache => cache.addAll([
    '/',
    '/index.html',
    '/styles/inline.css',
  ])))
})

self.addEventListener('activate', (event) => {
  console.log('activated')
})

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Fetch', event.request.url)
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)))
})

self.addEventListener('push', (event) => {
  const title = 'Yay a message.'
  const body = 'We have received a push message.'
  const icon = '/images/smiley.svg'
  const tag = 'simple-push-example-tag'
  event.waitUntil(self.registration.showNotification(title, {
    body,
    icon,
    tag,
  }))
})
