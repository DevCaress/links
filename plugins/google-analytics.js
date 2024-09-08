export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return 

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2MEM0YJYNG'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', 'G-2MEM0YJYNG')


  nuxtApp.hook('page:finish', () => {
    gtag('config', 'G-2MEM0YJYNG', {
      page_path: window.location.pathname,
    })
  })
})