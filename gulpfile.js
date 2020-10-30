var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var reload = bs.reload;
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app",
            index: "index.html"
        },
        // files: ["**/*.css", "**/*.html"],
        files: ['./app'],
        watch: true,
        port: 3102
    });
    // gulp.watch("**/*.html").on("change", reload);
});
//type in terminal:  gulp browser-sync