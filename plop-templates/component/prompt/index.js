/**
 * template prompt file
 */
module.exports = {
  description: 'generate a vue component', //描述这个generate的作用
  prompts: [{
    type: 'input', // 问题的类型
    name: 'name', // 问题对应得到答案的变量名，可以在acitons中使用该变量
    message: 'component name please:', // 在命令行中的问题
  }],
  actions: (data) => {// 这里可以通过data获取输入的name
    let name = data.name;
    const tname = `ys-${data.name}`;
    const cname = `Ys${name.charAt(0).toUpperCase() + name.slice(1)}`
    console.log("name:",tname,cname)
    const actions = [
      {
        type: 'add', // 操作类型 添加文件
        path: `src/components/general/${tname}/index.ts`, //添加的文件的路径
        templateFile: './plop-templates/component/hbs/index.hbs', //模版文件的路径
        data: {
          cname
        }
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/components/general/${tname}/tsx/${tname}.tsx`, //添加的文件的路径
        templateFile: './plop-templates/component/hbs/render.hbs', //模版文件的路径
        data: {
          cname
        }
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/components/general/${tname}/style/index.scss`, //添加的文件的路径
        templateFile: './plop-templates/component/hbs/scss.hbs', //模版文件的路径
        data: {}
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/components/general/${tname}/style/index.ts`, //添加的文件的路径
        templateFile: './plop-templates/component/hbs/style.hbs', //模版文件的路径
        data: {}
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/components/general/${tname}/sfc/${tname}.vue`, //添加的文件的路径
        templateFile: './plop-templates/component/hbs/template.hbs', //模版文件的路径
        data: {
          name
        }
      }
    ];
    return actions;
  }
};
