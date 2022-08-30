const { src, dest } = require('gulp');

exports.jsScript = function () {
    return src('src/js/*.js')
        .pipe(dest('dist/js'));
}