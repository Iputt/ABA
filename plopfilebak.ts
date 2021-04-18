import { NodePlopAPI } from 'plop';
import routerGenerator from './plop-templates/router/prompt';
// const routerGenerator = require('./plop-templates/router/prompt');
// const viewGenerator = require('./plop-templates/view/prompt');

export default function (plop: NodePlopAPI){
  //plop generator code
  plop.setGenerator('controller', routerGenerator)
}
