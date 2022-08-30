const { watch } = require('gulp');
const { views } = require('./gulp-pug-config.js');
const { buildStyles } = require('./gulp-sass-config.js');
const { jsScript } = require('./gulp-js-config.js');

async function css() {
    await buildStyles();
}

async function js() {
    await jsScript();
}

async function pug() {
    await views();
}

exports.default = () => {
    watch('./src/sass/*.scss', css);
    watch('./src/*.pug', pug);
    watch('./src/js/*.js', js);
};
