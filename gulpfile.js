const {src, dest, watch, series, parallel} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const connect = require('gulp-connect');
const webpack = require('webpack-stream');

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

function buildStyles() {
    return src(appPath.scss)
        .pipe(sass({
            // outputStyle: 'compressed'
        }).on('error', sass.logError))
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
    return src(appPath.js)
        .pipe(webpack({
            mode: 'development',
            entry: {
                app: './src/js/index.js',
            },
            output: {
                filename: 'script.js',
            },
        }))
        .pipe(dest(destPath.js))
        .pipe(connect.reload());
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

function startLocalServer() {
    connect.server({
        root: 'dest',
        port: 7070,
        livereload: true
    })
}

function watchCode() {
    watch(appPath.scss, buildStyles)
    watch(appPath.html, buildHtml)
    watch(appPath.js, buildJs)
}

exports.build = series(buildStyles, buildHtml,  buildJs, copyImages, copyFonts)

exports.default = series(buildStyles, buildHtml,  buildJs, copyFonts, copyImages, parallel(startLocalServer, watchCode))