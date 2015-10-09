module.exports = {
  options: '<%= pkg.jshintConfig %>',
  all: {
    src: [
      '<%= pkg.config.buildDir %>/src/**/*.js',
      'tests/unit/**/*.js'
    ]
  }
};
