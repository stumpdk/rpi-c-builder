var gulp = require('gulp');
var exec = require('child_process').exec;
var buildCommand = "g++ src/*.cpp -o performMeasurement -Wall -lwiringPi -lwiringPiDev -lpthread -lm -lpthread -lrt -ldl -L/usr/local/lib,/usr/lib/arm-linux-gnueabihf -I/usr/local/include";

gulp.task('build',function(){
exec(buildCommand, function (error, stdout, stderr) {
console.log(stdout);
console.log(stderr);
});
});

gulp.task('watch', function() {
gulp.watch('src/*.cpp', ['build']);
gulp.watch('include/*.h', ['build']);
});

gulp.task('default',['build','watch'],function(){});