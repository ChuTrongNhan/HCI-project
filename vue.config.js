module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hci-project-build/'
    : '/'
}