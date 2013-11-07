module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/*.js", "package.json"]
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: "bower_components/jquery/", src: ["jquery.min.js"], dest: "public/js/"}
        ]
      }
    },
    watch: {
      files: ["app.js", "Gruntfile.js", "views/*", "public/**"],
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
