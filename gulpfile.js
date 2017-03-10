var gulp = require('gulp');
gulp.task("copy",function(){
    return gulp.src("./sample/**")
    .pipe(gulp.dest("./dist"));
})