module.exports = {
  options: '<%= pkg.jshintConfig %>',
  all: {
    src: [
      './src/js/**/*.js',
      './tests/unit/**/*.js'
    ]
  }
};
