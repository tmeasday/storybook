// Note that how you check if code is running in development may differ in your app
if (process.env.NODE_ENV === 'development') {
  const chromatic = require('react-chromatic').default;

  chromatic({
    appCode: 'bdcxx5mvsmq',
    componentContext: [
      // This will find all files in the components directory or subdirectories of it
      require.context('../components', true, /\/[^.]*\.js/),
    ],
    indexUrl: 'http://localhost:3007',
  });
}
