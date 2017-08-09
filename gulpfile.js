const gulp = require('gulp');
const typescript = require('gulp-typescript');

// pull in the project TypeScript config
const typescriptProject = typescript.createProject('tsconfig.json');

// Place compiled files in the dist directory
gulp.task('scripts', () => {
  const typescriptResult = typescriptProject.src()
  .pipe(typescriptProject());
  return typescriptResult.js.pipe(gulp.dest('dist'));
});

// Watch .ts files for changes 
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);