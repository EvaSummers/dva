const context = require.context("./", false, /\.js$/).keys().filter(item => item !== "./index.js");
const newContext = context.map(it => it.slice(2));
export default newContext;