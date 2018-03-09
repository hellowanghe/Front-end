var gulp = require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var cssclean=require('gulp-clean-css');
var less=require('gulp-less');
var sass=require('sass')



gulp.task('default',['forless'], function() {
  // 合并压缩js
  gulp.src(['js/jquery.min.js','js/jk.js'])
  .pipe(uglify())
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('build'))
});


gulp.task('forless', function () {
  //编译less，压缩css
 return gulp.src('css/*.less')
   .pipe(less())
   .pipe(cssclean())
   .pipe(gulp.dest('./build'));
});
