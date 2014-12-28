'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    browserify: {
      dev: {
        src: ['./assets/javascripts/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },
    clean: {
      dev: {
        src: ['build/']
      }
    },
    copy:{
      assets: {
        cwd: 'assets/',
        src: ['*.html', 'stylesheets/**/*.css', 'images/*.jpg', 'images/*.ico', 'fonts/*.eot', 'fonts/*.svg', 'fonts/*.ttf', 'fonts/*.woff', 'fonts/*.otf', 'less/*.less', 'scss/*.scss'],
        expand: true,
        dest: 'build/'
      }
    },
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: true
      }
    },
    uglify: {
      my_target: {
        options: {
          // sourceMap: true,
          // sourceMapName: './build/bundle.map',
          compress: true
        },
        files: {
          './build/bundle.min.js': ['./build/bundle.js']
        }
      }
    },
    jscs: {
      src: ['./*.js', 'server.js'],
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
          './assets/stylesheets/style.css': './assets/stylesheets/style.scss'
        }
      }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'copy:assets', 'browserify:dev']);
  grunt.registerTask('build', ['build:dev']);
  grunt.registerTask('default');
};
