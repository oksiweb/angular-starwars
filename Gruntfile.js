module.exports = function(grunt) {

   grunt.initConfig({
       bowercopy: {
           options: {
                srcPrefix: 'bower_components'
           },
           your_target: {
               options: {
                    destPrefix: 'vendor'
               },
               files: {
                    'angular.min.js': 'angular/angular.min.js',
               },
           },
       }
   });

   grunt.loadNpmTasks('grunt-bowercopy');
   grunt.registerTask('default', ['bowercopy']);

};