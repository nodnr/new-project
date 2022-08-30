const { src, dest } = require('gulp');
const pug = require('gulp-pug');

exports.views = () => {
    return src('./src/**/*.pug')
        .pipe(pug({}))
        .pipe(dest('./dist/'));
};