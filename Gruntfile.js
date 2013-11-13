module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/**.js", "package.json"]
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, cwd: "bower_components/", src: ["backbone/backbone.js", "jquery/jquery.min.js","jquery/jquery.min.map","underscore/underscore.js"], dest: "js/lib/"}
        ]
      }
    },
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          "css/base.css": "scss/base.scss"
        }
      }
    },
    watch: {
      files: ["app.js", "Gruntfile.js", "views/*", "public/**", "yummly-list.js"],
      tasks: ['jshint'],
      options: {
        livereload: true
      },
      css: {
        files: ["**/*.scss"],
        tasks: ["sass"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["jshint", "copy", "sass"]);
  grunt.registerTask("onInstall", ["copy", "sass"]);
};
