module.exports = {
    publicPath: "/content/vuecontentbrowser",
    outputDir: "dist/content/vuecontentbrowser",
    devServer: {
      proxy: 'http://localhost:8080'
    }
  }