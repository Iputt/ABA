const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const terser = require('gulp-terser');
const gulpCache = require('gulp-cache');
const gulpif = require('gulp-if');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const vue = require('gulp-vue-file');
const projectName = require('../package.json').name;
const dr = require('./_dumber');
const { isProduction } = require('./_env')

const task = () => {
  let compileVue = vue({
    style: {
      postcssPlugins: [
        autoprefixer(),
        postcssUrl({ url: 'inline', encodeType: 'base64' })
      ]
    }
  });
  if (!isProduction) {
    compileVue = gulpCache(compileVue, { name: projectName });
  }
  return gulp.src('src/**/*.{js,ts,vue}', { sourcemaps: !isProduction, since: gulp.lastRun(task) })
    .pipe(gulpif(!isProduction, plumber()))
    .pipe(compileVue)
    // .pipe(babel())
    // .pipe(dr())
    .pipe(gulpif(isProduction, terser({ compress: false })))
    .pipe(gulp.dest('dist/static', { sourcemaps: !isProduction }));

}
// const style = () => {
//   return gulp.src('src/**/*.{scss, css}')
//     .pipe(gulp.dest('dist/static/css'))
// }
// const script = () => {
//   return gulp.src('src/**/*.{js,ts}')
//     .pipe(gulp.dest('dist/static/js'))
// }
const page = () => {
  return gulp.src('public/**')
    .pipe(gulp.dest('dist'))
}
const build = gulp.parallel(task, page)

module.exports = build
