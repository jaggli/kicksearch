module.exports = {
  stripPrefix: 'public/',
  staticFileGlobs: [
    'public/*.html',
    'public/img/*.jpg',
    'public/manifest.json',
    'public/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'public/service-worker.js',
  runtimeCaching: [{
    urlPattern: /^https:\/\/kicksearch-data\.herokuapp\.com/,
    handler: 'fastest'
  },
  {
    urlPattern: /^http:\/\/cas01\.autoscout24\.ch/,
    handler: 'cacheFirst'
  }
  ]
}
