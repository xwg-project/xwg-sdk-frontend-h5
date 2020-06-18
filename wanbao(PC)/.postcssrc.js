module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem-exclude": {
      // 1rem = 192px;
      // remUnit 为设计稿的1/10
      remUnit: 192,
      exclude: /node_modules|folder_name/i,
    }
  }
}
