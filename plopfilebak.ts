import type { NodePlopAPI } from 'plop';
//import componentGenerator from './plop-templates/component/prompt';
const componentGenerator = require('./plop-templates/component/prompt');
// const routerGenerator = require('./plop-templates/router/prompt');
// const viewGenerator = require('./plop-templates/view/prompt');

export default function (plop: NodePlopAPI){
  //plop generator code
  plop.setGenerator('router', componentGenerator)
}
// const componentGenerator = require('./plop-templates/component/prompt');

// module.exports = function (plop) {
//     plop.setGenerator('router', componentGenerator);
// };
