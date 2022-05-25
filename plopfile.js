/* eslint-disable func-names */
module.exports = function (plop) {
  // paths
  const path = 'src/containers/{{classname}}';
  const reducerPath = 'src/containers/{{classname}}/store';
  const viewsPath = 'src/containers/{{classname}}/views';
  const testPath = 'src/containers/{{classname}}/__test__/{{classname}}.test.js';
  // block generator
  plop.setGenerator('Create New Pages', {
    description: 'Generate class for pages',
    prompts: [
      {
        type: 'input',
        name: 'classname',
        message: 'Your Class Name',
      },
      {
        type: 'input',
        name: 'reducer',
        message: 'Your Reducer Name',
      },
    ],
    actions: [
      // import file
      {
        type: 'add',
        path: `${path}/index.js`,
        templateFile: 'templates/exportPage.hbs',
      },
      {
        type: 'add',
        path: `${reducerPath}/actions.js`,
        templateFile: 'templates/actions.hbs',
      },
      {
        type: 'add',
        path: `${reducerPath}/constants.js`,
        templateFile: 'templates/constants.hbs',
      },
      {
        type: 'add',
        path: `${reducerPath}/reducer.js`,
        templateFile: 'templates/reducer.hbs',
      },
      {
        type: 'add',
        path: `${viewsPath}/{{classname}}.scss`,
        templateFile: 'templates/Style.hbs',
      },
      {
        type: 'add',
        path: `${viewsPath}/index.js`,
        templateFile: 'templates/Page.hbs',
      },
      {
        type: 'add',
        path: `${testPath}`,
        templateFile: 'templates/test.hbs',
      },
      {
        path: 'src/store/reducers.js',
        pattern: /(\/\/ REDUCERIMPORT)/g,
        template: `import {{reducer}} from 'containers/{{classname}}/store/reducer';\n$1`,
        type: 'modify',
      },
      {
        path: 'src/store/reducers.js',
        pattern: /(\/\/ COMBINEREDUCER)/g,
        template: `{{reducer}},\n$1`,
        type: 'modify',
      },
    ],
  });
};
