'use strict';

var yeoman = require('yeoman-generator');
var generators = yeoman.generators;
var yosay = require('yosay');

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
    this.mkdir('src/jade');
    this.mkdir('src/jade/layouts');
    this.mkdir('src/jade/views');
  },

  appFiles: function () {
    this.directory('gulp/tasks');
    this.directory('src/sass');
    this.directory('src/js');
    this.directory('src/jade');
    this.directory('src/images');
    this.directory('src/fonts');
  },

  projectfiles: function () {
    this.copy('gulp/config.json', 'gulp/config.json');
    this.copy('.gitignore', '.gitignore');
    this.copy('README.md', 'README.md');
    this.copy('Gemfile', 'Gemfile');
    this.copy('config.rb', 'config.rb');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('package.json', 'package.json');
  },

  runNpm: function () {
    this.npmInstall();
  },

  end: function () {
    console.log('\nPlease wait, installing node dev dependencies...\n');
  }
});

module.exports = GulpBoilerplateGenerator;