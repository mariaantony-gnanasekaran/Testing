var gulp = require('gulp');
gulp.task("copy",function(){
    return gulp.src("./sample/main.js")
    .pipe(gulp.dest("./dist"));
})