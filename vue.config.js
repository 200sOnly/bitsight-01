module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/_variables.scss"`
      },
      scss: {
        additionalData: `@import "@/scss/_variables.scss";`
      }
    }
  }
};