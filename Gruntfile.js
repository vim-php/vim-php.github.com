module.exports = function(grunt) {
  'use strict';

  grunt.file.mkdir('vendor/js');
  grunt.file.mkdir('vendor/css');

  grunt.initConfig({
    clean: {
      test: ['vendor']
    },
    copy: {
      bootstraJs: {
        src: 'bower_components/bootstrap/dist/js/bootstrap.js',
        dest: "vendor/js/bootstrap.js"
      },
      jquery: {
        src: 'bower_components/jquery/dist/js/jquery.js',
        dest: "vendor/js/jquery.js"
      },
      bootstrapCss: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.css',
        dest: "vendor/css/bootstrap.css"
      },
      bootstrapThemeCss: {
        src: 'bower_components/bootstrap/dist/css/bootstrap-theme.css',
        dest: "vendor/css/bootstrap-theme.css"
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['clean', 'copy']);
};
