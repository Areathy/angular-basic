var gulp = require("gulp");

gulp.task("Copy-dist-to-wwwroot", () => {
    return gulp.src("./dist/Angular-basic/**/*")
        .pipe(gulp.dest("C:\\Angular\\nodejs\\nodejs\\wwwroot"));
});

gulp.task("default", () => {
    gulp.watch("./dist/Angular-basic", gulp.series("Copy-dist-to-wwwroot"));
}); 