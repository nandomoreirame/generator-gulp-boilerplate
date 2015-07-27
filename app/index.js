'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var generators = yeoman.generators;
var yosay = require('yosay');
var chalk = require('chalk');

var GulpBoilerplateGenerator = generators.Base.extend({

  welcome: function() {
    this.log(yosay(
      'Welcome to the Gulp Boilerplate generator!'
    ));
  },

  scaffoldFolders: function () {
    this.mkdir('gulp');
    this.mkdir('gulp/tasks');

    this.mkdir('src');
    this.mkdir('src/sass');
    this.mkdir('src/js');
    this.mkdir('src/images');
    this.mkdir('src/fonts');
  },

  appFiles: function () {
    this.directory('gulp/tasks');
    this.directory('src/sass');
    this.directory('src/js');
    this.directory('src/images');
    this.directory('src/fonts');
  },

  projectfiles: function () {
    this.copy('README.md', 'README.md');
    this.copy('index.html', 'index.html');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('package.json', 'package.json');
  },

  runNpm: function () {
    this.npmInstall();
    console.log('\nEverything Setup !!!\n');
  },

  end: function () {
  }
});

module.exports = GulpBoilerplateGenerator;