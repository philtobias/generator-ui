module.exports = {
  options: {
    interrupt: false,
    spawn: false
  },
  js: {
    files: [
      '<%= pkg.config.buildDir %>/src/**/*.js'
    ],
    tasks: [
      'jshint',
      'jasmine:unit'
    ]
  },
  sass: {
    files: [
      '<%= pkg.config.buildDir %>/src/sass/**/*.scss'
    ],
    tasks: [
      'sass:main'
    ]
  },
  unit: {
    files: [
      'tests/unit/**/*.spec.js'
    ],
    tasks: [
      'jshint',
      'jasmine:unit'
    ]
  }
};