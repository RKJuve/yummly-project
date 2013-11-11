module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/*.js", "package.json"]
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, cwd: "bower_components/", src: ["handlebars.js/lib/handlebars.runtime.js", "handlebars.js/lib/handlebars.js", "backbone/backbone.js", "jquery/jquery.min.js","jquery/jquery.min.map","underscore/underscore.js"], dest: "public/js/"},
          {src: ["yummly-list.js"], dest: "public/js/"}
        ]
      }
    },
    sass: {
      compile: {
        options: {
          includePaths: require("node-neat").includePaths,
          outputStyle: "compressed"
        },
        files: {
          "public/css/base.css": "public/scss/base.scss"
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
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["jshint", "copy", "sass"]);
};
