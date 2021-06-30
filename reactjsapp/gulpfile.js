var gulp = require('gulp');
var surge = require('gulp-surge');

gulp.task('deploy', [], function () {
  return surge({
    project: './build/',        
    domain: 'news-app.surge.sh'  
  });
});