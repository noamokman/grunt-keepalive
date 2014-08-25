# grunt-keepalive [![Build Status](https://travis-ci.org/noamokman/grunt-keepalive.svg?branch=master)](https://travis-ci.org/noamokman/grunt-keepalive)

> Grunt task to keep your grunt process running

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-keepalive --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-keepalive');
```

## The "keepalive" task

### Usage Examples

#### Using With Express
In this example, we used the keepalive task to make sure the express server will continue to run.

```js
grunt.registerTask('serve', ['build', 'express:prod', 'open', 'keepalive']);
```

## License
Copyright (c) 2014 Noam Okman. Licensed under the MIT license.
