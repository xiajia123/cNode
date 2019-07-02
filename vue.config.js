module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "https://cnodejs.org",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
