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
    watch: {
      files: ["app.js", "Gruntfile.js", "views/*", "public/**", "yummly-list.js"],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["jshint", "copy"]);
};
