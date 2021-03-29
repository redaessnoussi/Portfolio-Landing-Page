// Initialize modules
const { src, dest, watch, series, parallel } = require('gulp'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      concat = require('gulp-concat'),
			sass = require('gulp-sass'),
			pug = require('gulp-pug');
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      replace = require('gulp-replace'),
      babel = require('gulp-babel');

// File paths
const files = {
    scssPath: 'assets/stylesheets',
    jsPath: 'assets/javascripts',
    views: 'assets/views'
}

// Sass task: compiles the style.scss file into style.css
function scssTask() {

    return src(files.scssPath+'/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      //browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(dest('build/css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());
}

// pug task
function pugTask() {
	return src(['assets/views/*.pug', '!assets/views/_*'])
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest('build'))
};

// babel task
function babelTask() {
    return src(files.jsPath+'/main.js')
      .pipe(babel({presets: ['@babel/env']}))
      .pipe(dest(files.jsPath+'/babel'));
};

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {

    return src([
			'assets/javascripts/vendor/modernizr-3.6.0.min.js',
			'assets/javascripts/vendor/jquery-3.3.1.min.js',
			'assets/javascripts/vendor/popper.min.js', 
			'assets/javascripts/vendor/bootstrap/util.js',
			'assets/javascripts/vendor/bootstrap/alert.js',
			'assets/javascripts/vendor/bootstrap/button.js',
			'assets/javascripts/vendor/bootstrap/carousel.js',
			'assets/javascripts/vendor/bootstrap/collapse.js',
			'assets/javascripts/vendor/bootstrap/dropdown.js',
			'assets/javascripts/vendor/bootstrap/modal.js',
			'assets/javascripts/vendor/bootstrap/tooltip.js',
			'assets/javascripts/vendor/bootstrap/popover.js',
			'assets/javascripts/vendor/bootstrap/scrollspy.js',
			'assets/javascripts/vendor/bootstrap/tab.js',
			'assets/javascripts/vendor/bootstrap/index.js',
			'assets/javascripts/babel/main.js'
			])
			.pipe(concat('main.js'))
			.pipe(dest('build/js'))
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(sourcemaps.write('./'))
			.pipe(dest('build/js'))
			.pipe(browserSync.stream());
}

// Cachebust
function cacheBustTask() {
    var cbString = new Date().getTime();
    return src(['build/*.html'])
          .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
          .pipe(dest('build/'));
}

// const gulp = require('gulp')
// const purgecss = require('gulp-purgecss')

// gulp.task('purgecss', () => {
//     return gulp.src('src/**/*.css')
//         .pipe(purgecss({
//             content: ['src/**/*.html']
//         }))
//         .pipe(gulp.dest('build/css'))
// })


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {

    browserSync.init({
        server: {
            baseDir: "./build",
            directory: true
        },
    ghostMode: false
    });

		watch(files.views+"/**/*.pug", series(pugTask, cacheBustTask));
		watch([files.scssPath+'/**/*.scss'], series(scssTask, cacheBustTask)); 
    watch([files.jsPath+'/*.js', files.jsPath+'/vendor/**/*.js'], series(babelTask, jsTask, cacheBustTask));
    watch("build/*.html").on('change', browserSync.reload);
    watch("build/img/*.*", browserSync.reload);
}


// type gulp on the terminal and click enter :)
exports.default = series(	parallel(pugTask, scssTask, series(babelTask, jsTask)), 
		cacheBustTask,
    watchTask
);