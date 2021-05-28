const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

/* -------- Server  -------- */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* ------------ Pug compile ------------- */
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('online-zoo/pages/landing/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
});
gulp.task('template:compile', function buildHTML() {
    return gulp.src('online-zoo/pages/landing/zoos/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build/zoos'))
});
/* --------  js landing-------- */
gulp.task('js', function() {
    return gulp.src([
            'online-zoo/js/main.js',
            'online-zoo/js/slider.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});
/* --------  js map page -------- */
gulp.task('jsMap', function() {
    return gulp.src([
            'online-zoo/js/map.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('map.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});
/* --------  js zoos page -------- */
gulp.task('jsZoos', function() {
    return gulp.src([
            'online-zoo/js/zoos.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('zoos.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function() {
    return gulp.src('online-zoo/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('build/css'));
});

/* ------------ Sprite ------------- */
// gulp.task('sprite', function(cb) {
//   const spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     imgPath: '../images/sprite.png',
//     cssName: 'sprite.scss'
//   }));

//   spriteData.img.pipe(gulp.dest('build/images/'));
//   spriteData.css.pipe(gulp.dest('source/styles/global/'));
//   cb();
// });

/* ------------ Delete ------------- */
gulp.task('clean', function del(cb) {
    return rimraf('build', cb);
});

/* ------------ Copy fonts ------------- */
gulp.task('copy:assets/fonts', function() {
    return gulp.src('./online-zoo/assets/fonts/**/*.*')
        .pipe(gulp.dest('build/assets/fonts'));
});

/* ------------ Copy images ------------- */
gulp.task('copy:assets/images', function() {
    return gulp.src('./online-zoo/assets/images/**/*.*')
        .pipe(gulp.dest('build/assets/images'));
});

/* ------------ Copy ------------- */
gulp.task('copy', gulp.parallel('copy:assets/fonts', 'copy:assets/images'));

/* ------------ Watchers ------------- */
gulp.task('watch', function() {
    gulp.watch('online-zoo/pages/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('online-zoo/pages/**/*.pug', gulp.series('template:compile'));
    gulp.watch('online-zoo/styles/**/*.scss', gulp.series('styles:compile'));
    gulp.watch('online-zoo/js/*.js', gulp.series('js'));
    gulp.watch('online-zoo/js/map.js', gulp.series('jsMap'));
    gulp.watch('online-zoo/js/zoos.js', gulp.series('jsZoos'));

});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'js', 'jsMap', 'jsZoos', 'styles:compile', 'copy', 'template:compile'),
    gulp.parallel('watch', 'server')
));