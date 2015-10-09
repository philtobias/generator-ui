module.exports = {
  unit: {
    src: '<%= pkg.config.buildDir %>/src/**/*.js',
    options: {
      specs: 'tests/unit/**/*.spec.js',
      outfile: 'tests/_SpecRunner.html'
    }
  }
};