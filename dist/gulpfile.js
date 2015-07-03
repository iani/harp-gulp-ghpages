var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var harp        = require('harp')
var deploy      = require('gulp-gh-pages');

gulp.task('serve', function (done) {
    harp.server('.', {
        port: 9000
    });
});

gulp.task('build', function (done) {
    cp.exec('harp compile . dist', {stdio: 'inherit'})
        .on('close', done)
});

gulp.task('watch', function () {
    gulp.watch("*.{jade,styl,haml,sass,scss,less}", browserSync.reload)
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:9000"
    });
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
    gulp.src("./dist/*")
        .pipe(deploy());
});


gulp.task('default', ['serve', 'browser-sync', 'watch']);
