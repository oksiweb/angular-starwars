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
                    'angular/angular.min.js': 'angular/angular.min.js',
               },
           },
       },
    bowerInstall: {

      target: {
        src: [
          'index.html',   // .html support...
        ],
      }
    }
   });

   grunt.loadNpmTasks('grunt-bowercopy');
   grunt.loadNpmTasks('grunt-bower-install');;
   grunt.registerTask('default', ['bowercopy','bowerInstall']);

};