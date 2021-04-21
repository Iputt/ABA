const dumber = require('gulp-dumber');
const fs = require('fs');
const { isProduction } = require('./_env');

module.exports = dumber({
  cache: !isProduction,
  hash: isProduction,
  deps: [
    { name: 'vue', main: isProduction ? 'dist/vue.min.js' : 'dist/vue.js' }
  ],
  codeSplit: function (moduleId, packageName) {
    if (!packageName) {
      if (moduleId.startsWith('foo')) return 'foo-bundle';
      if (moduleId.startsWith('ba')) return 'ba-bundle';
    }
  },
  onManifest: function (filenameMap) {
    console.log('Update index.html with ' + filenameMap['entry-bundle.js']);
    const indexHtml = fs.readFileSync('_index.html').toString()
      .replace('entry-bundle.js', filenameMap['entry-bundle.js']);

    fs.writeFileSync('index.html', indexHtml);
  }
});
