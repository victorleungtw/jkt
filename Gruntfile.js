'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['../*.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    },

    sass: {
      options: {
        includePath: require('node-bourbon').includePaths,
        sourceMap: true
      },
      dist: {
        files: {
          'assets/stylesheets/style.css': 'assets/stylesheets/style.scss'
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'sass']);
  grunt.registerTask('default', ['test']);
};
