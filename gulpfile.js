var path = require("path");
var gulp = require('gulp');
var to5 = require('gulp-babel');
var assign = Object.assign || require('object.assign');
var opt={
    filename: '',
    filenameRelative: '',
    sourceMap: true,
    sourceRoot: '',
    moduleRoot: path.resolve('sample').replace(/\\/g, '/'),
    moduleIds: false,
    comments: false,
    compact: false,
    code:true,
    presets: [ 'es2015-loose', 'stage-1' ],
    plugins: [
      "syntax-flow",
      "transform-decorators-legacy",
      "transform-flow-strip-types",
      'transform-es2015-modules-commonjs'
    ]
  };
gulp.task('build-commonjs', function () {
  return gulp.src("./sample/**")
    .pipe(to5(assign({}, opt)))
    .pipe(gulp.dest('./dist'));
});
