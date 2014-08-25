/*
 * grunt-keepalive
 * https://github.com/noamokman/grunt-keepalive
 *
 * Copyright (c) 2014 Noam Okman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Register the task
  grunt.registerTask('keepalive', 'Grunt task to keep your grunt process running', function () {

      // Print a success message.
      grunt.log.writeln('Keeping the grunt process alive. forever.');

      this.async();
  });
};
