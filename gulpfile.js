const {src, dest, watch, series, parallel} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
const scss = require('gulp-sass')(require('sass'));
const connect = require('gulp-connect');

const appPath = {
    scss: './src/scss/**/*.scss',
    html: './src/index.html',
    js: './src/js/**/*.js',
    img: './src/img/**/*.*',
    fonts: './src/fonts/**/*.*',
}

const destPath = {
    css: './dest/css',
    html: './dest',
    img: './dest/img',
    fonts: './dest/fonts',
    js: './dest/js'
}

const jsPath = [
    './src/js/script.js'
]

function buildStyles() {
    return src(appPath.scss)
        .pipe(scss({
            outputStyle: 'compressed'
        }).on('error', scss.logError))
        .pipe(dest(destPath.css))
        .pipe(connect.reload());
}

function buildHtml() {
    return src(appPath.html)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest(destPath.html))
        .pipe(connect.reload());
}

function buildJs() {
    return src(jsPath)
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
        }))
        .pipe(dest(destPath.js))
        .pipe(connect.reload());
}

function startLocalServer() {
    connect.server({
        root: 'dest',
        port: 7070,
        livereload: true
    })
}

function copyImages() {
    return src(appPath.img)
        .pipe(dest(destPath.img))
        .pipe(connect.reload());
}

function copyFonts() {
    return src(appPath.fonts)
        .pipe(dest(destPath.fonts))
        .pipe(connect.reload());
}

function watchCode() {
    watch(appPath.scss, buildStyles)
    watch(appPath.html, buildHtml)
    watch(appPath.js, buildJs)
}

exports.build = series(buildStyles, buildHtml,  buildJs, copyFonts, copyImages)

exports.default = series(buildStyles, buildHtml,  buildJs, copyFonts, copyImages, parallel(startLocalServer, watchCode))