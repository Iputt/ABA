const gulp = require('gulp');
const { task, src, dest, series, parallel } = gulp;
const less = require('gulp-less'); // 处理less文件
// const concat = require('gulp-concat');
const uglify = require('gulp-uglify'); // 处理js文件
const minifyCss = require('gulp-minify-css'); // 处理css文件
const htmlmin = require('gulp-htmlmin'); // 处理html文件
const del = require('del'); // 引入删除任务
const watch = require('gulp-watch'); // 解决原生gulp.watch只更新一次的bug
const browserSync = require('browser-sync'); // 服务
const plumber = require('gulp-plumber'); // 防止出错崩溃

task('htmlMin', () => src('src/**/*.html')
  .pipe(htmlmin({
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    // collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true, //压缩页面CSS
  }))
  .pipe(dest('dist'))
);

task('uglify', () => src('src/**/*.js')
  .pipe(uglify())
  .pipe(dest('dist'))
);

task('less', () => src('src/**/*.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(dest('dist'))
);

task('minifyCss', () => src('dist/**/*.css')
  .pipe(minifyCss())
  .pipe(dest('dist'))
);

/**
 * 清空dist文件目录下所有文件
 * 图片目录不清理，图片一般不需要重复生产
 */
task('del', () => del([
  'dist/**/*',
  '!dist/images',
  '!dist/images/**/*',
  '!dist/img',
  '!dist/img/**/*',
  '!dist/common/img',
  '!dist/common/img/**/*'
]));

task('build', series(
  'del',
  'less',
  parallel('htmlMin', 'uglify', 'minifyCss')
));

task('browserSync', () =>
  browserSync.init({
    port: 8088,
    server: { baseDir: "src" },
    reloadOnRestart: false, // 刷新每个浏览器时Browsersync重新启动
    notify: false, // 不显示在浏览器中的任何通知
    timestamps: false, // 不追加时间戳文件注入
  })
);

task('watch', callback => {
  watch('src/**/*.html', series('htmlMin'));
  watch('src/**/*.less', series('less'));
  watch('src/**/*.js', series('uglify'));
  watch('dist/**/*.css', series('minifyCss'));
  watch('dist/**/*', browserSync.reload);
  callback();
});

task('help', callback => {
  setTimeout(() => {
    console.info(`
--------------------------------------------
执行以下命令：
$ gulp start      启动项目服务
$ gulp build      打包
$ gulp clear      清空dist目录(包含图片)
--------------------------------------------`);
  }, 50);
  callback();
});

/**
 * 清空dist文件目录下所有文件
 */
task('clear', () => del('dist/**/*'));
task('start', series('build', parallel('browserSync', 'watch')));
task('default', series('help'));
