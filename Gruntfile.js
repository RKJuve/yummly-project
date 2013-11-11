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
