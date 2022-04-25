const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\3\\abstract2\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\3\\abstract2\\src\\pages\\index.js")))
}

