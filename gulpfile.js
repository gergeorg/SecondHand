import gulp from 'gulp';
import browserSync from 'browser-sync'
import cssImport from  'gulp-cssimport'
import del from 'del'
import gulpImg from 'gulp-image'
import cleanCss from 'gulp-clean-css'
// import terser from 'gulp-terser'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'

const html = () => gulp
  .src('src/*.html')
  .pipe(gulp.dest('distr'))
  .pipe(browserSync.stream())

const css = () => gulp
  .src('src/css/style.css')
  .pipe(cssImport())
  .pipe(cleanCss())
  .pipe(gulp.dest('distr/css'))
  .pipe(browserSync.stream())

const js = () => gulp
  .src('src/js/**/*.js')
  //.pipe(terser()) //минифицирует все js файлы если проект модульный
  .pipe(webpackStream({
    mode: 'production',
    devtool: false,
    optimization: {
      minimize: true
    },
    output: {
      filename: 'main.js'
    }
  }, webpack))
  .pipe(gulp.dest('distr/js'))
  .pipe(browserSync.stream())

const copy = () => gulp
  .src([
    'src/api/**/*',
    'src/fonts/**/*',
    'src/img/favicon/*',
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('distr'))

const server = () => {
  browserSync.init({
    server: {
      baseDir: 'distr'
    }
  })

  gulp.watch('src/*.html', html)
  gulp.watch('src/css/**/*.css', css)
  gulp.watch('src/js/**/*.js', js)
}

const images = () => gulp
  .src('src/img/**/*.{jpg, jpeg, png, gif}')
  .pipe(gulpImg())
  .pipe(gulp.dest('distr/img'))

const imgToDistr = () => gulp
  .src(['./src/img/*.svg'])
  .pipe(gulp.dest('./distr/img'))


const clear = () => del('distr/**/*')





export default gulp.series(clear, gulp.parallel(html, css, js, copy, images, imgToDistr), server)
