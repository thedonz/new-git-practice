/*
if ( condition ){
  //code//;
}

function something(or, other){
  //code//;
}


//GULP

var gulp = require('gulp'); // gulp is the library, and it's assigned to the variable gulp.


//To use:

var gulp = require('gulp');

gulp.task('somename', function(){
    console.log('Word');
});

gulp.task('motha', function(){
  console.log('To your motha');
});

// run more than one gulp confirm negative, for example to run multiple ones.

// Default task

gulp.task('default', [ 'somename', 'motha', 'somename' ]);

*/

var gulp = require('gulp');

gulp.task('default', [ ], function(){
});
