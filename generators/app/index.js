'use strict';

var path = require('path');
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _s = require('underscore.string');


module.exports = generators.Base.extend({
  prompting: {
    askFor: function() {
      var done = this.async();

      var prompts = [{
        name: 'appName',
        message: 'Enter the name of this app?'
      }];

      this.prompt(prompts, function(props) {
        this.appName = props.appName;
        this.appNameSlug = _s.slugify(props.appName);
        done();
      }.bind(this));
    }
  },
  writing: {
    gitFiles: function() {
      this.fs.copy(
        this.templatePath('gitattributes'),
        this.destinationPath(this.appNameSlug, '.gitattributes')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath(this.appNameSlug, '.gitignore')
      );
    },

    app: function() {
      this.fs.copyTpl(
        this.templatePath('src/js/app.js'),
        this.destinationPath(this.appNameSlug, 'src/js/app.js')
      );

      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath(this.appNameSlug, 'index.html'),
        { appName: this.appName }
      );
    },

    projectFiles: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(this.appNameSlug, 'package.json'),
        { appNameSlug: this.appNameSlug }
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath(this.appNameSlug, '.editorconfig')
      );

      this.fs.copy(
        this.templatePath('_GruntFile.js'),
        this.destinationPath(this.appNameSlug, 'Gruntfile.js')
      );

      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath(this.appNameSlug, 'README.md'),
        { appName: this.appName }
      );
    },

    tasks: function() {
      var self = this;
      var files = ['clean', 'concurrent', 'connect', 'jasmine', 'jshint', 'watch'];

      files.forEach(function(file) {
        self.fs.copy(
          self.templatePath('tasks/' + file + '.js'),
          self.destinationPath(self.appNameSlug, 'tasks/' + file + '.js')
        );
      });
    },

    tests: function() {
      this.fs.copyTpl(
        this.templatePath('tests/unit/app.spec.js'),
        this.destinationPath(this.appNameSlug, 'tests/unit/app.spec.js'),
        { appName: this.appName }
      );
    }
  }
});