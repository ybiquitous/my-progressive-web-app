if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    // registration worked
    console.log(`Registration succeeded. Scope is ${reg.scope}`)
  }).catch((error) => {
    // registration failed
    console.log(`Registration failed with ${error}`)
  })

  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true })
      .then((subscription) => {
        console.log(subscription)
      })
      .catch((error) => {
        console.error(error)
      })
  })
}
