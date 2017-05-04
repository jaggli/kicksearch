module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/img/*.jpg',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  runtimeCaching: [{
    urlPattern: /^https:\/\/kicksearch-data\.herokuapp\.com/,
    handler: 'fastest'
  },
  {
    urlPattern: /^https:\/\/cas01\.autoscout24\.ch/,
    handler: 'fastest'
  }
  ]
}
