/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
            },
            dist: {
                files: {
                    'index.html': 'html_src/index.html',
                    'project-2048.html': 'html_src/project-2048.html',
                    'project-mobile.html': 'html_src/project-mobile.html',
                    'project-webperf.html': 'html_src/project-webperf.html',
                    'views/pizza.html': 'views/html_src/pizza.html'
                }
            }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css_src/',
          src: ['*.css'],
          dest: 'css/'
        },
        {
          expand: true,
          cwd: 'views/css_src/',
          src: ['*.css'],
          dest: 'views/css/'
        }]
      }
    },

    uglify: {
      target: {
        files: [{
          expand: true,
          cwd: 'js_src/',
          src: ['*.js'],
          dest: 'js/'
        },
        {
          expand: true,
          cwd: 'views/js_src/',
          src: ['*.js'],
          dest: 'views/js/'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 70,
            suffix: '_small_1x',
            quality: 60
          },
          {
            width: 115,
            suffix: '_medium_2x',
            quality: 60
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      pizza: {
        options: {
          engine: 'im',
          sizes: [{
            width: 400,
            suffix: '_medium_2x',
            quality: 50
          },
          {
            width: 200,
            suffix: '_small_1x',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images_src/',
          dest: 'views/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images', 'views/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images', 'views/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        },
        {
          expand: true,
          src: 'views/images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'htmlmin', 'cssmin', 'uglify']);

};
