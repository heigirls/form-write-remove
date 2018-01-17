const gulp =  require('gulp');
const webserver =  require('gulp-webserver');
const fs = require('fs');
const url =  require('url');
const path = require('path');
gulp.task('web', function () {
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8080,
        fallback:'index.html'
    }))
});
gulp.task('server', function () {
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8008,
        livereload: true,
        middleware: function (req, res, next) {
            var pathname = url.parse(req.url, true).pathname;
            var file = path.join(process.cwd(), 'Data', 'index.json');
            res.writeHead(200, {
                'Content-Type':'text/json;charset:utf8',
                "Access-Control-Allow-Origin":"*"
            });
            var data = fs.readFileSync(file);
            if (pathname === '/index') {
                res.end(data)
            }
        }
    }))
});
gulp.task('default', ['web', 'server']);